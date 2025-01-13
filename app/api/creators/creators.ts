import { NextApiRequest, NextApiResponse } from "next";

const creatorApplications: Array<{ name: string; email: string; bio: string }> =
  [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, bio } = req.body;

    if (!name || !email || !bio) {
      return res.status(400).json({ error: "Invalid application data" });
    }

    creatorApplications.push({ name, email, bio });
    return res.status(201).json({ message: "Application submitted successfully" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
