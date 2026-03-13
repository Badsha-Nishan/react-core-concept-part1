export default function Post({ post }) {
  return (
    <div>
      <h3>Post: {post.title} </h3>
      <p>{post.body}</p>
    </div>
  );
}
