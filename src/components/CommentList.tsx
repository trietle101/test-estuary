import Comment from "./Comment";

export default function CommentList({ comments }: { comments: string[] }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comments:</h3>
      <div className="space-y-2">
        {comments
          ? comments.map((comment, i) => <Comment key={i} comment={comment} />)
          : "No comment"}
      </div>
    </div>
  );
}
