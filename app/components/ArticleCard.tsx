import Link from "next/link";
import { Article } from "@/app/types/article";

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="font-bold text-lg">{article.title}</h2>
      <p className="text-gray-600">{article.excerpt}</p>
      <Link href={`/article/${article.id}`}>
        <a className="text-blue-500 mt-2 block">Read More</a>
      </Link>
    </div>
  );
}
