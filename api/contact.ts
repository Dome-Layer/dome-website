import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const { error } = await resend.emails.send({
    from: 'Dome Contact Form <onboarding@resend.dev>', // change after domain verification
    to: 'ipprodo@gmail.com', // ← your actual email
    subject: `New enquiry from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
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