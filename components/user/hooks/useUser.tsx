'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import type { User } from '@/components/user/types'

export const UserContext = createContext({
  user: null as User | null,
  // eslint-disable-next-line unused-imports/no-unused-vars
  setUser: (user: User) => {},
})

export function UserProvider({ children }: { children: React.ReactNode }) {
  const supabase = createClient()

  const [user, setState] = useState(null)
  const setUser = (user: User | any | null) => {
    setState(user)
  }

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      return user
    }
    fetchUser().then(user => setUser(user))
  }, [supabase])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default function useUser() {
  const { user, setUser } = useContext(UserContext)
  return [user, setUser]
}
