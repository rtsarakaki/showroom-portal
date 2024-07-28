'use client'

import { useSession } from 'next-auth/react'

import Link from 'next/link'
import If from '../conditional/if'
import { ThemeToggle } from '../layout/theme-toggle'
import Profile from '../auth/profile'

export default function PageHeader() {
  const { data: session } = useSession()

  return (
    <If condition={session !== null}>
      <header className="fixed w-full flex items-center text-slate-50 bg-slate-800 py-2">
        <nav className="flex w-full items-center justify-between m-auto max-w-screen-xl">
          <div className="flex items-center justify-center gap-2">
            <Link rel="stylesheet" href="/">
              Logo
            </Link>
          </div>
          <ul className="flex items-center justify-between gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/public">Public</Link>
            </li>
            <li>
              <Link href="/private/home">Private</Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Profile />
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-12"></div>
    </If>
  )
}
