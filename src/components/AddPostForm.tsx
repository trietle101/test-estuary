import React, { useState } from "react";
import { IPost } from "../types";

export default function AddPostForm({
  addPost
}: {
  addPost: (post: IPost) => void;
}) {
  const [newPost, setNewPost] = useState({
    id: "",
    title: "",
    content: "",
    comments: []
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost({ ...newPost, id: Date.now().toString() });
    setNewPost({
      id: "",
      title: "",
      content: "",
      comments: []
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10 space-y-2">
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Content"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
      />
      <button
        className="w-full bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
        type="submit"
      >
        Add Post
      </button>
    </form>
  );
}
