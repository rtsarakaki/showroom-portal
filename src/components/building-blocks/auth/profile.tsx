import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { useSession } from 'next-auth/react'
import LogoutButton from './logout-button'

export default function Profile() {
  const { data: session } = useSession() as any

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex items-center bg-transparent rounded-full"
            size="icon"
          >
            <Image
              src={session?.user?.picture || ''}
              alt={session?.user?.name || ''}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem>My Profile</DropdownMenuItem>
          <DropdownMenuItem>
            <div className="border w-full"></div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-end">
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
