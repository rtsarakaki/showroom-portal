export type Header = {
  title: string
  logo: string
  slug: string
  buttonLogout: string
  menus: HeaderMenu[]
  profileMenus: HeaderProfileMenu[]
}

export type HeaderMenu = {
  id: string
  title: string
  navigateTo: string
}

export type HeaderProfileMenu = {
  id: string
  title: string
  navigateTo: string
  iconSvg: string
}
