import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Método não permitido
  }

  const { place_id } = req.query;

  if (!place_id) {
    return res.status(400).json({ error: 'Missing place_id query parameter' });
  }

  try {
    const googlePlacesRes = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
      params: {
        key:'AIzaSyCChapqfxcu9GbU3VpPBNE9h1GK5ortbBo',
        place_id: place_id,
      },
    });

    return res.status(200).json(googlePlacesRes.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error fetching data' });
  }
}