'use client'

import { Button } from '@/components/ui/button'
import { TbLogout } from 'react-icons/tb'
import { signOut } from 'next-auth/react'

type componentProps = {
  text?: string
}

export default function LogoutButton(props: componentProps) {
  return (
    <Button className={`bg-primary`} onClick={() => signOut()}>
      <TbLogout />
      {props.text || 'Logout'}
    </Button>
  )
}
