import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis/cloudflare';

// The contact form endpoint for the Cloudflare Worker: api/contact.ts ported from Vercel's
// (req, res) handler to the Web Request/Response API, same validation, rate limit and email.
// api/contact.ts is deleted when Vercel is retired (Sprint H phase 1); until then keep the two
// in step.

export interface ContactEnv {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL?: string;
  UPSTASH_REDIS_REST_URL?: string;
  UPSTASH_REDIS_REST_TOKEN?: string;
  RATELIMIT_PREFIX?: string;
  ENVIRONMENT?: string;
}

const ALLOWED_ORIGIN = 'https://domelayer.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

type RateLimitResult = { success: boolean; limit: number; remaining: number; reset: number };

// One limiter per isolate, keyed by the settings it was built from.
let cached: { key: string; limiter: Ratelimit } | null = null;

function getRatelimiter(env: ContactEnv): Ratelimit | null {
  const url = env.UPSTASH_REDIS_REST_URL;
  const token = env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  const prefix = `${env.RATELIMIT_PREFIX ?? ''}contact_form`;
  const key = `${url}|${prefix}`;
  if (cached?.key === key) return cached.limiter;
  const limiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(3, '1 h'),
    analytics: true,
    prefix,
  });
  cached = { key, limiter };
  return limiter;
}

async function checkContactRateLimit(env: ContactEnv, ip: string): Promise<RateLimitResult> {
  const ratelimit = getRatelimiter(env);

  if (!ratelimit) {
    if (env.ENVIRONMENT === 'production') {
      console.error('[rate_limit] Upstash env vars missing in production: failing closed');
      return { success: false, limit: 3, remaining: 0, reset: 0 };
    }
    console.warn('[rate_limit] Upstash env vars missing: fail-open in non-production');
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

function getClientIp(request: Request): string {
  const cfIp = request.headers.get('cf-connecting-ip');
  if (cfIp) return cfIp;
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0]!.trim();
  return 'unknown';
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function json(status: number, body: unknown, headers: Headers): Response {
  headers.set('Content-Type', 'application/json; charset=utf-8');
  return new Response(JSON.stringify(body), { status, headers });
}

export async function handleContact(request: Request, env: ContactEnv): Promise<Response> {
  const headers = new Headers({
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  if (request.method !== 'POST') {
    return json(405, { error: 'Method not allowed' }, headers);
  }

  // Vercel parsed JSON bodies for us; here a missing or malformed body reads as empty.
  const body = (await request.json().catch(() => ({}))) as Record<string, unknown> | null;
  const { name, email, company, topic, message, hp } = body ?? {};

  // Honeypot: bots fill hidden fields, humans don't. Honeypot trips short-circuit BEFORE the
  // rate-limit check so dumb-bot traffic does not consume the IP's hourly budget.
  if (hp) {
    console.log(JSON.stringify({ event: 'contact_honeypot_triggered', ip: getClientIp(request) }));
    return json(200, { success: true }, headers);
  }

  const ip = getClientIp(request);
  const rl = await checkContactRateLimit(env, ip);

  headers.set('X-RateLimit-Limit', String(rl.limit));
  headers.set('X-RateLimit-Remaining', String(rl.remaining));
  headers.set('X-RateLimit-Reset', String(rl.reset));

  if (!rl.success) {
    const retryAfter = rl.reset > 0 ? Math.max(1, Math.ceil((rl.reset - Date.now()) / 1000)) : 3600;
    headers.set('Retry-After', String(retryAfter));
    console.log(JSON.stringify({ event: 'contact_rate_limited', ip }));
    return json(429, { error: 'Too many requests. Please try again in an hour.' }, headers);
  }

  if (typeof email !== 'string' || !email || !message) {
    return json(400, { error: 'Missing fields' }, headers);
  }

  if (!EMAIL_REGEX.test(email)) {
    return json(400, { error: 'Invalid email address' }, headers);
  }

  if (typeof message !== 'string' || message.length > MAX_MESSAGE_LENGTH) {
    return json(400, { error: 'Message too long' }, headers);
  }

  const optional = (value: unknown): string =>
    typeof value === 'string' ? value.slice(0, MAX_FIELD_LENGTH).trim() : '';
  const senderName = optional(name);
  const senderCompany = optional(company);
  const enquiryTopic = optional(topic);

  const resend = new Resend(env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: 'DOME Contact Form <contact@domelayer.com>',
    to: env.CONTACT_EMAIL ?? 'hello@domelayer.com',
    replyTo: email,
    subject: enquiryTopic
      ? `New enquiry via domelayer.com: ${enquiryTopic}`
      : `New enquiry via domelayer.com`,
    html: `<p><strong>From:</strong> ${escapeHtml(senderName || email)} &lt;${escapeHtml(email)}&gt;</p>
           ${senderCompany ? `<p><strong>Company:</strong> ${escapeHtml(senderCompany)}</p>` : ''}
           ${enquiryTopic ? `<p><strong>Topic:</strong> ${escapeHtml(enquiryTopic)}</p>` : ''}
           <p><strong>Message:</strong></p>
           <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
  });

  if (error) {
    return json(500, { error }, headers);
  }

  return json(200, { success: true }, headers);
}
