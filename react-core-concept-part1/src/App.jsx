import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batstman";
import Count from "./Count";
import User from "./User";

const loadUser = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
} 

function App() {
  const userLoad = loadUser();
  return (
    <>
      <h1>Get started</h1>

      <Count></Count>
      <Batsman></Batsman>
      <Suspense fallback={<p>Loading.....</p>}>
        <User userLoad={userLoad}>

        </User>
      </Suspense>
    </>
  );
}

export default App;
