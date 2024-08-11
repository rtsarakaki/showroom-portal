import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { getSession } from 'next-auth/react'
import LogoutButton from './logout-button'
import { HeaderProfileMenu } from '@/types/header'
import TextToSvgIcon from '../layout/text-to-svg-icon'

interface ComponentProps {
  menus: HeaderProfileMenu[]
  logoutText: string
}

export default async function Profile({ menus, logoutText }: ComponentProps) {
  const session = await getSession()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex items-center bg-transparent rounded-full"
            size="icon"
          >
            <Image
              src={session?.user?.picture || '/avatar.png'}
              alt={session?.user?.name || ''}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {menus.map((menu: HeaderProfileMenu, index: number) => {
            if (menu.title === '---') {
              return (
                <DropdownMenuItem key={index}>
                  <div className="border  w-full"></div>
                </DropdownMenuItem>
              )
            } else {
              return (
                <DropdownMenuItem key={index} className="ml-2">
                  <div className="flex gap-3 items-center">
                    <TextToSvgIcon
                      className="text-foreground w-5 h-5"
                      icon={menu.iconSvg}
                    />
                    {menu.title}
                  </div>
                </DropdownMenuItem>
              )
            }
          })}
          <DropdownMenuItem className="flex justify-end">
            <LogoutButton text={logoutText} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
