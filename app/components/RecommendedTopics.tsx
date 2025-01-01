import Link from 'next/link'

const topics = [
  "Technology", "Programming", "Data Science", "Artificial Intelligence",
  "Blockchain", "Cybersecurity", "Web Development", "Mobile Development"
]

export default function RecommendedTopics() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-secondary">Recommended Topics</h2>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Link 
            key={topic} 
            href={`/topic/${topic.toLowerCase().replace(' ', '-')}`}
            className="bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-full text-sm"
          >
            {topic}
          </Link>
        ))}
      </div>
    </div>
  )
}

