import NextAuth from 'next-auth'
import { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialProvider from 'next-auth/providers/credentials'

const gitHubProvider = GitHubProvider({
  clientId: process.env.AUTH_GITHUB_ID ?? '',
  clientSecret: process.env.AUTH_GITHUB_SECRET ?? ''
})

const googleProvider = GoogleProvider({
  clientId: process.env.AUTH_GOOGLE_ID ?? '',
  clientSecret: process.env.AUTH_GOOGLE_SECRET ?? ''
})

const customCredential = CredentialProvider({
  name: 'Credentials',
  credentials: {
    email: { label: 'Email', type: 'email' },
    password: { label: 'Password', type: 'password' }
  },
  async authorize(credentials) {
    const validUser = {
      id: '1',
      email: 'rtsarakaki@gmail.com',
      password: 'smartsoft',
      name: 'Ricardo T S Arakaki',
      role: 'admin',
      picture: '/avatar.png'
    }

    const emailIsValid = credentials?.email === validUser.email
    const passwordIsValid = credentials?.password === validUser.password
    if (emailIsValid && passwordIsValid) {
      return validUser
    }
    return null
  }
})

const authOptions: NextAuthOptions = {
  providers: [gitHubProvider, googleProvider, customCredential],
  callbacks: {
    jwt: ({ token, user }) => {
      const customUser = user as unknown as any

      if (user) {
        return {
          ...token,
          role: customUser?.role || 'guest',
          picture: token.picture || customUser.picture
        }
      }
      return token
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          name: token.name,
          email: token.email,
          role: token.role,
          picture: token?.picture
        }
      }
    }
  },
  pages: {
    signIn: '/auth/login'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
