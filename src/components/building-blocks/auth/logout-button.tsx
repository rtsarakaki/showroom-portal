'use client'

import { Button } from '@/components/ui/button'
import { TbLogout } from 'react-icons/tb'
import { signOut } from 'next-auth/react'

type componentProps = {
  text?: string
}

export default function LogoutButton(props: componentProps) {
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/auth/login' })
  }

  return (
    <Button className={`bg-primary`} onClick={() => handleLogout()}>
      <TbLogout />
      {props.text || 'Logout'}
    </Button>
  )
}
