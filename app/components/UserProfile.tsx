import Image from 'next/image'

interface UserProfileProps {
  name: string
  bio: string
  image: string
}

export default function UserProfile({ name, bio, image }: UserProfileProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg">
      <Image src={image} alt={name} width={64} height={64} className="rounded-full" />
      <div>
        <h2 className="text-xl font-semibold text-secondary">{name}</h2>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  )
}

