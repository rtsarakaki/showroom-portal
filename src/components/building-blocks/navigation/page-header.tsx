import Link from 'next/link'
import { ThemeToggle } from '../layout/theme-toggle'
import Profile from '../auth/profile'
import Header from '../text/header'
import { Header as HeaderType, HeaderMenu } from '@/types/header'
import TextToSvgIcon from '../layout/text-to-svg-icon'

interface ComponentProps {
  header: HeaderType
  session: any
}

export default function PageHeader({
  header,
  session
}: Readonly<ComponentProps>) {
  return (
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
            {header.menus?.map((menu: HeaderMenu) => (
              <li key={menu.id}>
                <Link href={menu.navigateTo}>{menu.title}</Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Profile
                session={session}
                menus={header.profileMenus}
                logoutText={header.buttonLogout}
              />
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-12"></div>
    </>
  )
}
