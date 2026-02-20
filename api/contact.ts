import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { email, message } = await req.json();

  if (!email || !message) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const { error } = await resend.emails.send({
    from: 'Dome Contact Form <onboarding@resend.dev>',
    to: 'ipprodo@gmail.com',
    subject: `New enquiry via domelayer.com`,
    html: `<p><strong>From:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  });

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { 
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}