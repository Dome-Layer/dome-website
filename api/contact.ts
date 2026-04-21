import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

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

  const { email, message, hp } = req.body;

  // Honeypot: bots fill hidden fields, humans don't
  if (hp) {
    return res.status(200).json({ success: true });
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
