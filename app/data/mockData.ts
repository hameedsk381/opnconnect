import { Article } from "@/app/types/article";
import { Comment } from "@/app/types/comment";

export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Anonymous Content",
    content:
      "In a world where anonymity is scarce, our platform provides a safe space for readers and creators...",
    excerpt: "Discover how anonymous content is reshaping online spaces...",
    suggestedTopics: ["Privacy", "Content Creation", "Anonymity"],
  },
  {
    id: "2",
    title: "Top 10 Benefits of Staying Anonymous Online",
    content:
      "Remaining anonymous online protects privacy, promotes free speech, and empowers creators to share without judgment...",
    excerpt: "Explore the advantages of online anonymity...",
    suggestedTopics: ["Cybersecurity", "Freedom of Speech", "Online Behavior"],
  },
];

export const comments: Comment[] = [
  { id: "101", articleId: "1", content: "Great article on anonymity!" },
  { id: "102", articleId: "1", content: "This platform is a game-changer!" },
  { id: "103", articleId: "2", content: "Loved the insights on privacy!" },
];
