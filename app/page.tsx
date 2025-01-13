"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import ArticleCard from "./components/ArticleCard";
import { Article } from "@/app/types/article";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data: Article[]) => setArticles(data))
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Anonymous Reads</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}
