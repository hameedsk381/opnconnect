import { useState, useEffect } from "react";
import { Comment } from "@/app/types/comment";

interface Props {
  articleId: string;
}

export default function CommentSection({ articleId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    fetch(`/api/comments?articleId=${articleId}`)
      .then((res) => res.json())
      .then((data: Comment[]) => setComments(data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, [articleId]);

  const handleCommentSubmit = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ articleId, content: newComment }),
    });
    if (res.ok) {
      setNewComment("");
      setComments([...comments, { id: String(Date.now()), content: newComment, articleId }]);
    } else {
      alert("Error adding comment.");
    }
  };

  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg">Comments</h3>
      <div className="mt-4">
        {comments.map((comment) => (
          <p key={comment.id} className="border-b py-2">
            {comment.content}
          </p>
        ))}
      </div>
      <textarea
        className="border rounded p-2 w-full mt-4"
        placeholder="Write a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        onClick={handleCommentSubmit}
        className="mt-2 bg-green-500 text-white p-2 rounded"
      >
        Post Comment
      </button>
    </div>
  );
}
