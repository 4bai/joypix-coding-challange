'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import type { User } from './types'
import { createClient } from '@/utils/supabase/client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import useUser from '@/components/user/hooks/useUser'

export default function UserRegisterForm() {
  const router = useRouter()
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [user, setUser] = useUser() as [User, any]
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const registerData = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      options: {
        data: {
          username: formData.get('username') as string,
          first_name: formData.get('first_name') as string,
          last_name: formData.get('last_name') as string,
        },
      },
    }

    const { data, error } = await supabase.auth.signUp(registerData)

    if (error) {
      setErrorMessage(error.message)
      router.push('/error')
    }

    if (data.user)
      setUser?.(data.user)

    router.push('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
        <Input type="email" name="email" placeholder="Email" required autoComplete="email" />
        <Input type="password" name="password" placeholder="Password" required autoComplete="current-password" />
        <Input type="text" name="username" placeholder="User Name" required />
        <Input className="md:w-auto md:basis-[48%]" type="text" name="first_name" placeholder="First Name" required />
        <Input className="md:w-auto  md:basis-[48%] md:self-end" type="text" name="last_name" placeholder="Last Name" required />
        <div className="flex basis-full justify-end"><Button type="submit" className="self-end">Register</Button></div>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  )
}
