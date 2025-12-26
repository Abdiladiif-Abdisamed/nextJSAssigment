import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"

export async function GET() {
  const session = await getServerSession()
  const tasks = await prisma.task.findMany({
    where: { user: { email: session?.user?.email! } },
  })
  return Response.json(tasks)
}

export async function POST(req: Request) {
  const session = await getServerSession()
  const { title } = await req.json()

  const task = await prisma.task.create({
    data: {
      title,
      user: { connect: { email: session?.user?.email! } },
    },
  })

  return Response.json(task)
}
