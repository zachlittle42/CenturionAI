import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const ADMIN_EMAIL = "zlittle@uci.edu"
// ADMIN_PASSWORD must be set via environment variable - no default allowed
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
if (!ADMIN_PASSWORD) {
  console.error("CRITICAL: ADMIN_PASSWORD environment variable is not set")
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Reject all logins if ADMIN_PASSWORD is not configured
        if (!ADMIN_PASSWORD) {
          console.error("Login rejected: ADMIN_PASSWORD not configured")
          return null
        }
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
  // NEXTAUTH_SECRET must be set via environment variable - no default allowed for security
  secret: process.env.NEXTAUTH_SECRET,
}

// Validate required environment variables
if (!process.env.NEXTAUTH_SECRET) {
  console.error("CRITICAL: NEXTAUTH_SECRET environment variable is not set")
}
