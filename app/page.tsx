import { Suspense } from "react";
import Slow from "./components/Slow";
import Count from "./count/page";

export default async function Home() {

  const  now = new Date().toLocaleString();
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()

  return (
    <main>
      <Suspense fallback={<div>Loading Slow Component...</div>}>
      <Slow/>
      </Suspense>
      <p>Current time: {now}</p>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Count />
    </main>
  );
 
}
