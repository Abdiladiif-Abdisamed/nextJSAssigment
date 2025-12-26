import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

export default function TaskPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      <TaskForm />
      <TaskList />
    </>
  )
}
