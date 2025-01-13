"use client"
import CommentSection from "@/app/components/CommentSection";
import SuggestedTopics from "@/app/components/SuggestedTopics";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Article } from "@/app/types/article";

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    params.then(unwrappedParams => {
      setId(unwrappedParams.id);
    });
  }, [params]);

  useEffect(() => {
    if (id) {
      fetch(`/api/articles?id=${id}`)
        .then((res) => res.json())
        .then((data) => setArticle(data))
        .catch((err) => console.error("Error fetching article:", err));
    }
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-gray-700 mt-4">{article.content}</p>
      <SuggestedTopics topics={article.suggestedTopics} />
      <CommentSection articleId={id || ""} />
    </div>
  );
}
