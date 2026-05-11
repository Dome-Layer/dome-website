import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_ORIGIN = 'https://domelayer.com';
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'hello@domelayer.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

// ── Rate limiting ───────────────────────────────────────────────────────────
// Inlined here (rather than ./_lib/rateLimit) because Vercel's serverless
// bundler does not consistently resolve relative imports under api/ in ESM
// mode — see commit history for the failed extraction attempt.

let _ratelimit: Ratelimit | null = null;

function getRatelimiter(): Ratelimit | null {
  if (_ratelimit) return _ratelimit;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  // RATELIMIT_PREFIX namespaces keys when a single Upstash database is shared
  // across environments (e.g. `staging:` on the staging Vercel project).
  // Empty by default — production keys remain `contact_form:*`.
  const envPrefix = process.env.RATELIMIT_PREFIX ?? '';
  _ratelimit = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(3, '1 h'),
    analytics: true,
    prefix: `${envPrefix}contact_form`,
  });
  return _ratelimit;
}

function getClientIp(req: VercelRequest): string {
  const realIp = req.headers['x-real-ip'];
  if (typeof realIp === 'string' && realIp) return realIp;
  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string' && xff) return xff.split(',')[0]!.trim();
  return req.socket?.remoteAddress ?? 'unknown';
}

type RateLimitResult = { success: boolean; limit: number; remaining: number; reset: number };

async function checkContactRateLimit(ip: string): Promise<RateLimitResult> {
  const ratelimit = getRatelimiter();

  if (!ratelimit) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[rate_limit] Upstash env vars missing in production — failing closed');
      return { success: false, limit: 3, remaining: 0, reset: 0 };
    }
    console.warn('[rate_limit] Upstash env vars missing — fail-open in non-production');
    return { success: true, limit: 3, remaining: 3, reset: 0 };
  }

  try {
    const { success, limit, remaining, reset } = await ratelimit.limit(ip);
    return { success, limit, remaining, reset };
  } catch (err) {
    console.error('[rate_limit] Upstash check failed', err);
    return { success: true, limit: 3, remaining: 3, reset: 0 };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, message, hp } = req.body ?? {};

  // Honeypot: bots fill hidden fields, humans don't. Honeypot trips short-
  // circuit BEFORE the rate-limit check so dumb-bot traffic does not consume
  // the IP's hourly budget; smart bots that leave it empty still hit the cap.
  if (hp) {
    console.log(JSON.stringify({ event: 'contact_honeypot_triggered', ip: getClientIp(req) }));
    return res.status(200).json({ success: true });
  }

  const ip = getClientIp(req);
  const rl = await checkContactRateLimit(ip);

  res.setHeader('X-RateLimit-Limit', String(rl.limit));
  res.setHeader('X-RateLimit-Remaining', String(rl.remaining));
  res.setHeader('X-RateLimit-Reset', String(rl.reset));

  if (!rl.success) {
    const retryAfter = rl.reset > 0
      ? Math.max(1, Math.ceil((rl.reset - Date.now()) / 1000))
      : 3600;
    res.setHeader('Retry-After', String(retryAfter));
    console.log(JSON.stringify({ event: 'contact_rate_limited', ip }));
    return res.status(429).json({ error: 'Too many requests. Please try again in an hour.' });
  }

  if (!email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (typeof message !== 'string' || message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ error: 'Message too long' });
  }

  const { error } = await resend.emails.send({
    from: 'DOME Contact Form <contact@domelayer.com>',
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `New enquiry via domelayer.com`,
    html: `<p><strong>From:</strong> ${escapeHtml(email)}</p>
           <p><strong>Message:</strong></p>
           <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
  });

  if (error) {
    return res.status(500).json({ error });
  }

  return res.status(200).json({ success: true });
}
