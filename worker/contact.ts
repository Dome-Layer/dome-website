import { Resend } from 'resend';

// The contact form endpoint for the Cloudflare Worker: api/contact.ts ported from Vercel's
// (req, res) handler to the Web Request/Response API, with the same validation and email.
// Rate limiting uses Cloudflare's rate-limiting binding (3 per minute per IP, counted per
// Cloudflare location, nothing stored) instead of the Upstash database, which was deleted.
// api/contact.ts is deleted when Vercel is retired (Sprint H phase 1).

export interface ContactEnv {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL?: string;
  ENVIRONMENT?: string;
  /** Cloudflare rate-limiting binding (wrangler.jsonc "ratelimits"). */
  CONTACT_RATE_LIMITER?: RateLimit;
}

const ALLOWED_ORIGIN = 'https://domelayer.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

// Returns whether this submission may go ahead.
async function withinRateLimit(env: ContactEnv, ip: string): Promise<boolean> {
  const limiter = env.CONTACT_RATE_LIMITER;
  if (!limiter) {
    if (env.ENVIRONMENT === 'production') {
      console.error('[rate_limit] CONTACT_RATE_LIMITER binding missing in production: failing closed');
      return false;
    }
    return true;
  }
  try {
    return (await limiter.limit({ key: ip })).success;
  } catch (err) {
    console.error('[rate_limit] rate-limiting binding failed', err);
    return true;
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

  // Honeypot: bots fill hidden fields, humans don't. It short-circuits before the rate limit so
  // dumb-bot traffic does not use up the IP's allowance.
  if (hp) {
    console.log(JSON.stringify({ event: 'contact_honeypot_triggered', ip: getClientIp(request) }));
    return json(200, { success: true }, headers);
  }

  const ip = getClientIp(request);
  if (!(await withinRateLimit(env, ip))) {
    headers.set('Retry-After', '60');
    console.log(JSON.stringify({ event: 'contact_rate_limited', ip }));
    return json(429, { error: 'Too many requests. Please try again in a minute.' }, headers);
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
