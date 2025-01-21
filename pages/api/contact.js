import PocketBase from 'pocketbase';

const pb = new PocketBase("https://db.jkpowersystem.com");
pb.autoCancellation(false);
const admin_username = "aadityathakkar47@gmail.com";
const admin_password = "ggrHcH0t6B";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Authenticate admin
    await pb.admins.authWithPassword(admin_username, admin_password);

    const { companyName, enquirerName, designation, email, contactNo, description } = req.body;

    // Create contact record
    const data = {
      "company_name": companyName,
      "enquirer_name": enquirerName,
      "designation": designation,
      "email": email,
      "contact": contactNo,
      "description": description
    };

    await pb.collection('contactus').create(data);

    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ message: 'Failed to submit contact form', error: error.message });
  }
} 