"use client"
import { useEffect, useState } from "react"

export default function TaskList() {
  const [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    fetch("/Task/api/tasks")
      .then(res => res.json())
      .then(setTasks)
  }, [])

  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <li key={task.id} className="bg-white p-3 rounded shadow">
          {task.title}
        </li>
      ))}
    </ul>
  )
}
