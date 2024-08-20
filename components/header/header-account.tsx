'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { User } from '../user/types'
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client'
import useUser from '@/components/user/hooks/useUser'
import LoginDialog from '~/components/user/user-login-dialog'
import RegisterDialog from '~/components/user/user-register-dialog'

const supabase = createClient()

export default function HeaderAccount() {
  const [user, setUser] = useUser() as [User, any]
  const router = useRouter()

  function handleLogout() {
    supabase.auth.signOut()
    setUser?.(null)
    router.push('/')
  }

  return (
    <>
      {user
      && (
        <>
          <div>
            <span>Logged in as </span>
            <strong>{user.user_metadata?.username}</strong>
          </div>
          <Button variant="ghost" onClick={() => handleLogout()}>Logout</Button>
          <Link href="/submit-discussion">
            <Button>Start Discussion </Button>
          </Link>
        </>
      )}

      {!user
      && (
        <>
          <LoginDialog />
          <RegisterDialog />
        </>
      )}
    </>
  )
}
