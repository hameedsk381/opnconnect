import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "@/app/data/mockData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { articleId } = req.query;

  if (req.method === "GET") {
    const articleComments = comments.filter((c) => c.articleId === articleId);
    return res.status(200).json(articleComments);
  }

  if (req.method === "POST") {
    const { content } = req.body;
    if (!content || !articleId)
      return res.status(400).json({ error: "Invalid comment data" });

    const newComment = {
      id: String(Date.now()),
      articleId: articleId as string,
      content,
    };

    comments.push(newComment); // Add to in-memory array for testing
    return res.status(201).json(newComment);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
