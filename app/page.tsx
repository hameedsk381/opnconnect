"use client"
import Link from 'next/link'
import { ContentTabs } from './components/ContentTabs'
import RecommendedArticles from './components/RecommendedArticles'
import RecommendedTopics from './components/RecommendedTopics'
import PeopleToFollow from './components/PeopleToFollow'
import { useState } from 'react'

// Dummy data for articles
const articles = [
  { 
    id: 1, 
    title: "Getting Started with Next.js", 
    excerpt: "Next.js is a powerful React framework...", 
    author: "John Doe",
    category: "Web Development",
    readingTime: 5
  },
  { 
    id: 2, 
    title: "The Future of AI", 
    excerpt: "Artificial Intelligence is rapidly evolving...", 
    author: "Jane Smith",
    category: "Technology",
    readingTime: 7
  },
  { 
    id: 3, 
    title: "Mastering TypeScript", 
    excerpt: "TypeScript adds static typing to JavaScript...", 
    author: "Bob Johnson",
    category: "Programming",
    readingTime: 6
  },
]

const articlesByTopic: Record<string, typeof articles> = {
  "Latest Articles": articles,
  "Web Development": articles.filter(article => article.category === "Web Development"),
  "Technology": articles.filter(article => article.category === "Technology"),
  "Programming Languages": articles.filter(article => article.category === "Programming"),
  // Add more categories as needed
}

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string>("Latest Articles")

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-lg shadow-lg space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 space-y-8">
          <ContentTabs onTabChange={setSelectedTab} />
          {articlesByTopic[selectedTab]?.map((article) => (
            <article key={article.id} className="bg-white rounded-lg p-4 shadow-md border-b pb-4">
              <Link href={`/article/${article.id}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">{article.title}</h2>
              </Link>
              <p className="text-gray-600 mb-2">{article.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>By {article.author}</span>
                <span>{article.readingTime} min read · {article.category}</span>
              </div>
            </article>
          )) || <p>No articles available for this category.</p>}
        </div>
        <div className="w-full md:w-1/3 space-y-8">
          <RecommendedArticles />
          <RecommendedTopics />
          <PeopleToFollow />
        </div>
      </div>
    </div>
  )
}
