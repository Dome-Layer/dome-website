import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const { error } = await resend.emails.send({
    from: 'Dome Contact Form <contact@domelayer.com>',
    to: 'francesco.prodomo@gmail.com',
    subject: `New enquiry via domelayer.com`,
    html: `<p><strong>From:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  });

  if (error) {
    return res.status(500).json({ error });
  }

  return res.status(200).json({ success: true });
}
