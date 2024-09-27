import type { Metadata } from 'next'
import '@/styles/globals.css'

import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import PageHeader from '@/components/building-blocks/navigation/page-header'
import { AuthProvider } from '@/providers/auth.provider'
import { ThemeProvider } from '@/providers/theme.provider'
import checkEnvironmentVariable from '@/utilities/checkEnviromentVariable'
import { getHeader } from '@/graphql/header'
import { getSession } from 'next-auth/react'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const appTitle = checkEnvironmentVariable(process.env.APP_TITLE, 'APP_TITLE')
const appDescription = checkEnvironmentVariable(
  process.env.APP_DESCRIPTION,
  'APP_DESCRIPTION'
)

export const metadata: Metadata = {
  title: appTitle,
  description: appDescription
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const header = await getHeader()
  const session = await getSession()
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <PageHeader header={header} session={session} />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  )
}
