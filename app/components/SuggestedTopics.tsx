interface Props {
    topics: string[];
  }
  
  export default function SuggestedTopics({ topics }: Props) {
    return (
      <div className="mt-6">
        <h3 className="font-bold text-lg">Suggested Topics</h3>
        <ul className="list-disc list-inside">
          {topics.map((topic, index) => (
            <li key={index} className="text-gray-600">
              {topic}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  