"use client";

import { useFormState } from "react-dom";
import { greet } from "./form/action";

const initialMessage ={
  message: ''
}
export default async function Home() {

  // const  now = new Date().toLocaleString();
  // const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const posts = await data.json()

    const [state ,formState ] = useFormState(greet, initialMessage);

  return (
    <main>
      {/* <Suspense fallback={<div>Loading Slow Component...</div>}>
      <Slow/>
      </Suspense> */}

      <form action={formState}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Greet</button>
        {
          state.message && <p>{state.message}</p>
        }
      </form>
      {/* <p>Current time: {now}</p>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Count /> */}
    </main>
  );
 
}
