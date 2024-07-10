import type { Metadata } from 'next'
import '@/styles/globals.css'

import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import PageHeader from '@/components/building-blocks/navigation/page-header'
import { AuthProvider } from '@/providers/auth.provider'
import { ThemeProvider } from '@/providers/theme.provider'
import QueryProvider from '@/providers/query.provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: process.env.APP_TITLE,
  description: process.env.APP_DESCRIPTION
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
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
            <PageHeader />
            <QueryProvider>{children}</QueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  )
}
