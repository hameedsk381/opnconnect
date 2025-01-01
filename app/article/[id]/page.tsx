import { notFound } from 'next/navigation'
import UserProfile from '../../components/UserProfile'
import { Button } from "@/components/ui/button"
// eslint-disable-file no-use-before-define 
// Enhanced data for articles with better themes
const articles = [
  { 
    id: 1, 
    title: "Getting Started with Next.js", 
    content: "Next.js is a powerful React framework that simplifies building server-side rendered and statically generated web applications, enabling developers to create fast and scalable web experiences.", 
    author: {
      name: "John Doe",
      bio: "Full-stack developer and tech enthusiast with a passion for modern web technologies.",
      image: "/placeholder.svg?height=64&width=64"
    },
    category: "Web Development",
    claps: 42,
    readingTime: 5
  },
  { 
    id: 2, 
    title: "The Future of AI", 
    content: "Artificial Intelligence is rapidly evolving, transforming industries and enhancing the way we interact with technology, paving the way for smarter solutions and innovations.", 
    author: {
      name: "Jane Smith",
      bio: "AI researcher and writer dedicated to exploring the implications of AI in our daily lives.",
      image: "/placeholder.svg?height=64&width=64"
    },
    category: "Technology",
    claps: 15,
    readingTime: 7
  },
  { 
    id: 3, 
    title: "Mastering TypeScript", 
    content: "TypeScript introduces static typing to JavaScript, making it easier to write, maintain, and scale large applications while improving developer productivity and code quality.", 
    author: {
      name: "Bob Johnson",
      bio: "Software engineer and TypeScript advocate, passionate about building robust applications.",
      image: "/placeholder.svg?height=64&width=64"
    },
    category: "Programming",
    claps: 30,
    readingTime: 6
  },
]

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find(a => a.id === parseInt(params.id))

  if (!article) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto bg-gradient-to-r from-blue-500 to-green-500 shadow-lg rounded-lg p-6">
      <h1 className="text-4xl font-bold mb-4 text-white">{article.title}</h1>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-gray-200">
          {article.readingTime} min read · {article.category}
        </span>
        <Button className="flex items-center space-x-2 text-white bg-transparent border">
          <span>👏</span>
          <span>{article.claps}</span>
        </Button>
      </div>
      <div className="prose lg:prose-xl mb-8 text-gray-100">
        {article.content}
      </div>
      <UserProfile {...article.author} />
    </article>
  )
}
