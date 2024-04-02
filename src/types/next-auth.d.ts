import {
  DefaultSession,
  Profile as DefaultProfile,
  JWT as DefaultJWT,
} from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      username: string
    } & DefaultSession['user']
  }

  interface Profile extends DefaultProfile {
    login?: string
  }

  interface JWT extends DefaultJWT {
    username?: string
  }
}
