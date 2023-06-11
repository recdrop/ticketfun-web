import axios from "axios";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Método não permitido
  }

  const { input } = req.query;

  if (!input) {
    return res.status(400).json({ error: "Missing input query parameter" });
  }

  try {
    const googlePlacesRes = await axios.get(
      "https://maps.googleapis.com/maps/api/place/autocomplete/json",
      {
        params: {
          key: "AIzaSyCChapqfxcu9GbU3VpPBNE9h1GK5ortbBo",
          input: input,
        },
      }
    );

    return res.status(200).json(googlePlacesRes.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error fetching data" });
  }
}
