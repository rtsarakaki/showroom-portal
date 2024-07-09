'use client'

import React from 'react'
import Header from '@/components/building-blocks/text/header'
import LoginForm from '@/components/building-blocks/auth/login-form'

export default function Login() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen bg-slate-100">
        <div className="w-7/12 bg-white p-5 rounded-sm">
          <div className="flex items-center  justify-center  w-full">
            <Header className="pb-5" text="Title" size="3" />
          </div>
          <div className="flex">
            <div className="w-full h-full p-5">
              <Header text="Subtitle" size="2" />
              <p className="mt-5">Description</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
