'use client'

import { Button } from '@/components/ui/button'
import { TbLogin2 } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

type componentProps = {
  email?: string
  password?: string
  text?: string
  provider: 'github' | 'google' | 'credentials'
  callbackUrl: string
  onSuccess?: () => void
  onError?: (errorMessage: string) => void
}

function getButtonProps(provider: string, text?: string) {
  switch (provider) {
    case 'github':
      return {
        icon: <FaGithub />,
        style: 'bg-black text-white',
        text: text ?? 'Login with Github'
      }
    case 'google':
      return {
        icon: <FcGoogle />,
        style: 'bg-white text-black',
        text: text ?? 'Login with Google'
      }
    default:
      return {
        icon: <TbLogin2 />,
        style: 'bg-primary text-white',
        text: text ?? 'Login with Credentials'
      }
  }
}

export default function LoginButton(props: Readonly<componentProps>) {
  const { icon, style, text } = getButtonProps(props.provider, props.text)

  const customSignIn = async () => {
    const credentials = {
      redirect: false,
      email: props.email,
      password: props.password,
      callbackUrl: props.callbackUrl
    }

    try {
      const response = await signIn(props.provider, credentials)
      if (!response?.error) {
        props.onSuccess?.()
      } else {
        props.onError?.('Invalid credentials.')
      }
    } catch (error) {
      props.onError?.(JSON.stringify(error))
    }
  }

  const handleSignIn = async () => {
    if (props.provider === 'credentials') {
      await customSignIn()
    } else {
      await signIn(props.provider, { callbackUrl: props.callbackUrl })
    }
  }

  return (
    <Button className={`gap-2 ${style}`} onClick={() => handleSignIn()}>
      {icon}
      {text}
    </Button>
  )
}
