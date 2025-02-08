import { Resend } from 'resend';

const resend = new Resend('re_Md3kBxnC_PX3gGd2jQKwjoTXzHZRtCzHC');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { companyName, enquirerName, designation, email, contactNo, description } = req.body;

    const emailContent = `
      New Contact Form Submission:
      
      Company Name: ${companyName}
      Enquirer Name: ${enquirerName}
      Designation: ${designation}
      Email: ${email}
      Contact Number: ${contactNo}
      Description: ${description}
    `;

    await resend.emails.send({
      from: 'contact@contact.jkpowersystem.com',
      to: ['jkpowersystempvtltd@gmail.com'],
      subject: `New Contact Form Submission from ${companyName}`,
      text: emailContent,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
} 
