import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, message } = req.body ?? {}

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' })
  }

  try {
    await resend.emails.send({
      from: 'Dome Website <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL ?? 'hello@domelayer.com',
      replyTo: email,
      subject: `New contact from ${email}`,
      text: `From: ${email}\n\n${message}`,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
