export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL || 'https://n8n.srv1392648.hstgr.cloud/webhook/contact';

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error(`N8N responded with ${response.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('API Route Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}