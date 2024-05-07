import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import emailTemplate from './welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request: Request) {
  const { firstName, email} = await request.json();
  await resend.emails.send({
    from: 'email@mail.digitaltx.studio',
    to: email,
    subject: 'hello world',
    react: emailTemplate({ 
    //   firstName 
    }),
  });
  await resend.emails.send({
    from: 'email@mail.digitaltx.studio',
    to: 'mateus@mateusloubach.tech', // replace with the actual email address
    subject: 'Notification: Email Sent',
    text: `An email has been sent to your email with the subject 'hello world'.`,
  });
  return NextResponse.json({status: 'Ok'});
}