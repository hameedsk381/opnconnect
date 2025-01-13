import { NextApiRequest, NextApiResponse } from "next";
import { articles } from "@/app/data/mockData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (id) {
    const article = articles.find((a) => a.id === id);
    if (!article) return res.status(404).json({ error: "Article not found" });
    return res.status(200).json(article);
  }

  return res.status(200).json(articles);
}
