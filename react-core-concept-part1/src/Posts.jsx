import { use } from "react";
import Post from "./Post";

export default function Posts({ posts }) {
  const post = use(posts);
  return (
    <div>
      <h3>Post: {post.length} </h3>
      {
        post.map(post=> <Post key={post.id} post={post}></Post>)
      }
    </div>
  );
}
