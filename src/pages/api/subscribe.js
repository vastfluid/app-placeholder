// pages/api/subscribe.js
import axios from 'axios';

export default async function handler(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // mailchimp list id
    const listId = 'ec64f63603';
    // Your unique API key from the mailchimp dashboard
    const API_KEY = '751357df16dc7cc909497bb04a62cbf5-us8';
    const DATACENTER = API_KEY.split('-')[1];

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await axios({
      method: 'post',
      url: `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${listId}/members`,
      data: data,
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      res.status(200).json({ message: 'Subscribed successfully' });
    } else {
      res.status(500).json({ error: 'Error subscribing to Mailchimp' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error subscribing to Mailchimp' });
  }
}
