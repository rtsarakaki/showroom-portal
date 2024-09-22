import NextAuth, { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialProvider from 'next-auth/providers/credentials'
import checkEnvironmentVariable from '@/utilities/checkEnviromentVariable'

const authGithubId = checkEnvironmentVariable(
  process.env.AUTH_GITHUB_ID,
  'AUTH_GITHUB_ID'
)
const authGithubSecret = checkEnvironmentVariable(
  process.env.AUTH_GITHUB_SECRET,
  'AUTH_GITHUB_SECRET'
)

const gitHubProvider = GitHubProvider({
  clientId: authGithubId,
  clientSecret: authGithubSecret
})

const authGoogleId = checkEnvironmentVariable(
  process.env.AUTH_GOOGLE_ID,
  'AUTH_GOOGLE_ID'
)
const authGoogleSecret = checkEnvironmentVariable(
  process.env.AUTH_GOOGLE_SECRET,
  'AUTH_GOOGLE_SECRET'
)
const googleProvider = GoogleProvider({
  clientId: authGoogleId,
  clientSecret: authGoogleSecret
})

const fakeUserEmail = checkEnvironmentVariable(
  process.env.FAKE_USER_EMAIL,
  'FAKE_USER_EMAIL'
)

const fakeUserPassword = checkEnvironmentVariable(
  process.env.FAKE_USER_PASSWORD,
  'FAKE_USER_PASSWORD'
)

const customCredential = CredentialProvider({
  name: 'Credentials',
  credentials: {
    email: { label: 'Email', type: 'email' },
    password: { label: 'Password', type: 'password' }
  },
  async authorize(credentials) {
    const validUser = {
      id: '1',
      email: fakeUserEmail,
      password: fakeUserPassword,
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
