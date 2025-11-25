"use client";
import { useState } from "react";


const Count = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button className="bg-blue-600" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Count