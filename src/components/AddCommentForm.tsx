import React, { useState } from "react";
import { IPost } from "../types";

export default function AddCommentForm({
  post,
  updatePost
}: {
  post: IPost;
  updatePost: (id: string, post: IPost) => void;
}) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePost(post.id, {
      ...post,
      comments: [...post.comments, newComment]
    });
    setNewComment("");
  };

  return (
    <form
      className="mt-4 flex items-center justify-between"
      onSubmit={handleSubmit}
    >
      <input
        className="w-[73%] p-2 border rounded "
        type="text"
        placeholder="Add a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        className="bg-gray-700 text-white px-4 py-[9px] rounded hover:bg-gray-600"
        type="submit"
      >
        Add Comment
      </button>
    </form>
  );
}
