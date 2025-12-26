import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/Task/login",
  },
})

export const config = {
  matcher: ["/Task/:path*"],
}
