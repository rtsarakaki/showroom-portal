'use client'

import If from '@/components/building-blocks/conditional/if'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: session } = useSession()
  return (
    <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center">
      <h1>Home</h1>
      {session && (
        <pre className="bg-slate-800 text-slate-50 p-10 rounded-lg mt-10">
          {JSON.stringify(session, null, 2)}
        </pre>
      )}
      <If condition={session === null}>
        <Link href="/auth/login">
          <Button>Go to Login</Button>
        </Link>
      </If>
    </div>
  )
}
