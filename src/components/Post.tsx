import { useState } from "react";
import CommentList from "./CommentList";
import AddCommentForm from "./AddCommentForm";
import { IPost } from "../types";

export default function Post({
  post,
  updatePost,
  deletePost
}: {
  post: IPost;
  updatePost: (id: string, post: IPost) => void;
  deletePost: (postId: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(post.content);

  const handleUpdate = () => {
    updatePost(post.id, { ...post, content: editedContent });
    setIsEditing(false);
  };

  return (
    <div className="w-[600px] bg-gray-800 shadow-md rounded-lg p-4 pt-[70px] relative">
      <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
      {isEditing ? (
        <div>
          <textarea
            className="w-full p-2 border rounded mb-2"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleUpdate}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-4 text-xl">{post.content}</p>
          <div className="space-x-2 absolute top-2 right-2">
            <button
              className="bg-gray-700 text-sm text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-700 text-sm text-white px-[14px] py-2 rounded hover:bg-red-600"
              onClick={() => deletePost(post.id)}
            >
              X
            </button>
          </div>
        </div>
      )}
      <CommentList comments={post.comments} />
      <AddCommentForm post={post} updatePost={updatePost} />
    </div>
  );
}
