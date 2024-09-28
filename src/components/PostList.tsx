import { IPost } from "../types";
import Post from "./Post";

export default function PostList({
  posts,
  updatePost,
  deletePost
}: {
  posts: IPost[];
  updatePost: (id: string, post: IPost) => void;
  deletePost: (postId: string) => void;
}) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          updatePost={updatePost}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}
