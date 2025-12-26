import Link from "next/link"

export default function TaskLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">TaskFlow</h2>
        <nav className="space-y-3">
          <Link href="/Task">Dashboard</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  )
}
