import { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    jwt: async ({ token, profile }) => {
      const newToken = { ...token }
      if (profile?.login) {
        newToken.username = profile.login
      }

      return newToken
    },
    session: async ({ session, token }) => {
      session.user.username = token.username as string
      return session
    },
  },
} as AuthOptions

export { authOptions }
