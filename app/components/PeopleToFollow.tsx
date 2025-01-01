import Image from 'next/image'
import { Button } from "@/components/ui/button"

const people = [
  { id: 1, name: "Emma Watson", bio: "Tech enthusiast & writer", image: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Michael Chen", bio: "AI researcher & blogger", image: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Sophia Rodriguez", bio: "Full-stack developer", image: "/placeholder.svg?height=40&width=40" },
]

export default function PeopleToFollow() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-secondary">People to Follow</h2>
      <ul className="space-y-4">
        {people.map((person) => (
          <li key={person.id} className="flex items-center gap-4">
            <Image src={person.image} alt={person.name} width={40} height={40} className="rounded-full" />
            <div className="flex-grow">
              <h3 className="font-medium">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.bio}</p>
            </div>
            <Button variant="outline" size="sm" className="flex-shrink-0">
              Follow
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

