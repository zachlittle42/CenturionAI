import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const ADMIN_EMAIL = "zlittle@uci.edu"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "centurion2024"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === ADMIN_EMAIL &&
          credentials?.password === ADMIN_PASSWORD
        ) {
          return {
            id: "1",
            email: ADMIN_EMAIL,
            name: "Zach Little",
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "centurion-ai-secret-key-change-in-production",
}
