import axios from "axios";

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: "No URL provided" });
  }
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });
    res.setHeader("Content-Type", response.headers["content-type"]);
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ error: "Error fetching image" });
  }
}
