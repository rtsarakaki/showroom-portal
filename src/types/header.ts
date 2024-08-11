export type Header = {
  title: string
  logo: string
  slug: string
  buttonLogout: string
  menus: HeaderMenu[]
  profileMenus: HeaderProfileMenu[]
}

export type HeaderMenu = {
  title: string
  navigateTo: string
}

export type HeaderProfileMenu = {
  title: string
  navigateTo: string
  iconSvg: string
}
