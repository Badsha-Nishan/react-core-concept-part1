import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batstman";
import Count from "./Count";
import User from "./User";
import Posts from "./Posts";

const loadUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

function App() {
  const userLoad = loadUser();
  const posts = fetchPost();
  return (
    <>
      <h1>Get started</h1>

      <Suspense fallback={<p>Post Loading.....</p>}>
        <Posts posts={posts}></Posts>
      </Suspense>

      <Count></Count>
      <Batsman></Batsman>
      <Suspense fallback={<p>Loading.....</p>}>
        <User userLoad={userLoad}></User>
      </Suspense>
    </>
  );
}

export default App;
