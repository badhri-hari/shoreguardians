import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  const apiKey = process.env.SHOREGUARDIANS_API_KEY;
  const url = `https://script.google.com/macros/s/AKfycbxKwpuOaYVcBi2Xyt96lfIYteosmIIP-qRIFSGQJcwwBxrRJq4jqI9WY-7qNtOvSQLT/exec?apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching member details" });
  }
}
