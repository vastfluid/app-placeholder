import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const formId = '1xxVEJV4DKb1UJ7S2kWp6wdHbqwtr78iBigylw0dERU8';
    const entryId = '1106115317';
    const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

    const data = new FormData();
    data.append(`entry.${entryId}`, email);

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    try {
      await axios.post(url, data, config);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);  // Log the error message
      res.status(500).json({ success: false });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
