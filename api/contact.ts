import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { checkContactRateLimit, getClientIp } from './_lib/rateLimit';

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_ORIGIN = 'https://domelayer.com';
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'hello@domelayer.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

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
