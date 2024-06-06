// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, subject, message } = await req.json();
  console.log(req.body);

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // Hostinger SMTP server
    port: 465, // SSL port
    secure: true, // true for port 465, false for port 587
    auth: {
      user: process.env.EMAIL_USER, // replace with your email
      pass: process.env.EMAIL_PASS, // replace with your email password
    },
    // Increase connection timeout
    connectionTimeout: 10000, // 10 seconds
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address
    // from: `"${name}" <${email}>`, // sender address
    to: process.env.EMAIL_USER, // list of receivers
    subject: subject, // Subject line
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}
