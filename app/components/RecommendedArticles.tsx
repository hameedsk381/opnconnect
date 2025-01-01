import Link from 'next/link'

const recommendedArticles = [
  { id: 4, title: "10 Tips for Better Productivity", author: "Alice Williams" },
  { id: 5, title: "The Rise of Quantum Computing", author: "Charlie Brown" },
  { id: 6, title: "Sustainable Living in 2023", author: "Diana Green" },
]

export default async function RecommendedArticles() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-secondary">Recommended Articles</h2>
      <ul className="space-y-2">
        {recommendedArticles.map((article) => (
          <li key={article.id}>
            <Link href={`/article/${article.id}`} className="hover:text-primary">
              <h3 className="font-medium">{article.title}</h3>
              <p className="text-sm text-gray-500">By {article.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
