"use client"
import { useState } from "react"

export default function TaskForm() {
  const [title, setTitle] = useState("")

  async function submit(e: any) {
    e.preventDefault()
    await fetch("/Task/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
    })
    setTitle("")
  }

  return (
    <form onSubmit={submit} className="mb-4 flex gap-2">
      <input
        className="border p-2 flex-1"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4">Add</button>
    </form>
  )
}
