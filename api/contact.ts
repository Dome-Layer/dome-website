import type { IncomingMessage, ServerResponse } from 'node:http';
import { Resend } from 'resend';

// The request and response Vercel's Node runtime hands to the function, declared here so the
// @vercel/node package is not needed: it was only ever a type import, and it pins undici 5.
type VercelRequest = IncomingMessage & { body?: Record<string, unknown> };
type VercelResponse = ServerResponse & {
  status(code: number): VercelResponse;
  json(body: unknown): VercelResponse;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_ORIGIN = 'https://domelayer.com';
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'hello@domelayer.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

// No rate limit here: the Upstash database behind it was deleted, so the limiter had been failing
// open. Rate limiting lives in the Cloudflare Worker (worker/contact.ts), which replaces this
// function when domelayer.com moves off Vercel (Sprint H phase 1).

function getClientIp(req: VercelRequest): string {
  const realIp = req.headers['x-real-ip'];
  if (typeof realIp === 'string' && realIp) return realIp;
  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string' && xff) return xff.split(',')[0]!.trim();
  return req.socket?.remoteAddress ?? 'unknown';
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

  const { name, email, company, topic, message, hp } = req.body ?? {};

  // Honeypot: bots fill hidden fields, humans don't.
  if (hp) {
    console.log(JSON.stringify({ event: 'contact_honeypot_triggered', ip: getClientIp(req) }));
    return res.status(200).json({ success: true });
  }

  if (typeof email !== 'string' || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (typeof message !== 'string' || message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ error: 'Message too long' });
  }

  // Name, company and topic arrived with the contact page (plan phase 1c). They stay optional so a
  // cached copy of the old footer form, which posted only email and message, keeps working.
  const optional = (value: unknown): string =>
    typeof value === 'string' ? value.slice(0, MAX_FIELD_LENGTH).trim() : '';
  const senderName = optional(name);
  const senderCompany = optional(company);
  const enquiryTopic = optional(topic);

  const { error } = await resend.emails.send({
    from: 'DOME Contact Form <contact@domelayer.com>',
    to: CONTACT_EMAIL,
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
    return res.status(500).json({ error });
  }

  return res.status(200).json({ success: true });
}
