import { getSession } from 'next-auth/react'

import Link from 'next/link'
import If from '../conditional/if'
import { ThemeToggle } from '../layout/theme-toggle'
import Profile from '../auth/profile'
import { getHeader } from '@/graphql/header'
import Header from '../text/header'
import { HeaderMenu } from '@/types/header'
import TextToSvgIcon from '../layout/text-to-svg-icon'

export default async function PageHeader() {
  const session = await getSession()

  const header = await getHeader()

  return (
    // <If condition={session !== null}>
    <>
      <header className="fixed w-full flex items-center bg-foreground text-background py-2">
        <nav className="flex w-full items-center justify-between m-auto max-w-screen-xl">
          <div className="flex items-center justify-center gap-2">
            <Link rel="stylesheet" href="/" className="flex items-center gap-5">
              <TextToSvgIcon
                className="text-primary w-7 h-7"
                icon={header.logo}
              />
              <Header text={header.title} size="2" />
            </Link>
          </div>
          <ul className="flex items-center justify-between gap-4">
            {header.menus?.map((menu: HeaderMenu, index: number) => (
              <li key={index}>
                <Link href={menu.navigateTo}>{menu.title}</Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Profile
                menus={header.profileMenus}
                logoutText={header.buttonLogout}
              />
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-12"></div>
    </>
    // </If>
  )
}
