'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from "@/utils/supabase/client";
import useUser from '@/components/user/hooks/useUser'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import UserLoginDialog from '@/components/user/user-login-dialog'
import UserRegisterDialog from '@/components/user/user-register-dialog'
import SnippeItem from './discussion-item'
import { Discussion } from './types'

// TODO refactor: move to custom hook
export function DiscussionList() {
  const supabase = createClient();
  const [user] = useUser();
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");
    const fetchDiscussions = async () => {
      const { data: loadedDiscussions, error } = await supabase
        .from('discussions')
        .select(`
          id,
          created_at,
          title,
          content,
          user (
            id,
            username
          )
          `)
        .order('created_at', { ascending: false })

      if (error) {
        console.log('error', error);
        setStatus("error");
      } else {
        setDiscussions(loadedDiscussions);
        if (loadedDiscussions.length === 0) {
          setStatus("empty");
        } else {
          setStatus("success");
        }
      }
    }

    fetchDiscussions();
  }, [])

  if (status === "error") {
    return <div className="p-4 mx-auto max-w-7xl px-6 md:px-12 xl:px-6 text-center">
      <h2 className="text-3xl font-bold  text-zinc-600 dark:text-zinc-300">Error fetching discussions</h2>
    </div>
  }

  if (status === "loading") {
    return <div className="p-4 mx-auto max-w-7xl px-6 md:px-12 xl:px-6 text-center">
      <Spinner />
    </div>
  }

  if (status === "empty") {

    if (user) {
      return <div className="p-4 mx-auto max-w-7xl px-6 md:px-12 xl:px-6 text-center">
        <h2 className="text-3xl font-bold  text-zinc-600 dark:text-zinc-300 mb-10">No discussions</h2>
        <Link href="/submit-discussion">
          <Button>Start Discussion </Button>
        </Link>
      </div>
    }

    return <div className="p-4 mx-auto max-w-7xl px-6 md:px-12 xl:px-6 text-center">
      <h2 className="text-3xl font-bold  text-zinc-600 dark:text-zinc-300">No discussions</h2>
      <p className="py-4 text-xl"><UserLoginDialog linkvariant='text' /> or <UserRegisterDialog linkvariant='text' /> to add discussions</p>
    </div>
  }


  return (
    <div className="p-4 mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
      {discussions.map((discussion: Discussion) => (
        <SnippeItem key={discussion.id} discussion={discussion} />
      ))}
    </div>
  )
}   