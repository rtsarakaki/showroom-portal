'use client'

import Header from '../text/header'
import InputWithLabel from '../inputs/input-with-label'
import LoginButton from './login-button'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

type componentProps = {
  text?: string
}

export default function LoginForm(props: componentProps) {
  const router = useRouter()

  const [email, setEmailState] = useState('')
  const [password, setPasswordState] = useState('')
  const [errorMessage, setErrorMessageState] = useState('')

  const handleSignInSuccess = () => {
    router.refresh()
    router.push('/')
  }

  return (
    <div className="border-l w-full h-full p-5">
      <Header text="Login" size="2" />
      <InputWithLabel
        label="Email"
        type="text"
        id="email"
        onChange={(emailChanged) => {
          setEmailState(emailChanged)
        }}
      />
      <InputWithLabel
        label="Password"
        type="password"
        id="password"
        onChange={(passwordChanged) => {
          setPasswordState(passwordChanged)
        }}
      />
      <div className="flex justify-end mt-5 w-full">
        <div className="flex flex-col gap-2">
          <LoginButton
            provider="credentials"
            callbackUrl="/"
            email={email}
            password={password}
            onSuccess={() => {
              handleSignInSuccess()
            }}
            onError={(errorMessage: string) => {
              setErrorMessageState(errorMessage)
            }}
          />
          <div className="flex items-center justify-center py-2">
            <div className="border w-full"></div>
            <p className="absolute bg-white text-slate-600 px-2">or</p>
          </div>
          <LoginButton provider="github" callbackUrl="/" />
          <LoginButton provider="google" callbackUrl="/" />
        </div>
      </div>
      <div>
        <p>{errorMessage}</p>
      </div>
    </div>
  )
}
