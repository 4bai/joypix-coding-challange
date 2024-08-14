'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Discussion } from './types'
import DeleteDiscussion from './delete-discussion'
import { createClient } from '@/utils/supabase/client'
import useUser from '@/components/user/hooks/useUser'
import PageHeader from '@/components/layout/page-header'
import { Spinner } from '@/components/ui/spinner'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/components/ui/avatar'
import { formatDate, formatTime } from '@/utils/date'

export default function DiscussionDetail({ discussionId }: { discussionId: string }) {
  const supabase = createClient()
  const [user] = useUser()
  const [discussion, setDiscussion] = useState<Discussion>() || null
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const fetchDiscussions = async () => {
      setStatus('loading')
      const { data: loadedDiscussion, error } = await supabase
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
        .eq('id', discussionId)
        .maybeSingle()

      if (error) {
        setStatus('error')
      }
      else {
        setStatus('success')
        if (loadedDiscussion !== null)
          setDiscussion(loadedDiscussion as Discussion)
      }
    }
    fetchDiscussions()
  }, [discussionId, setDiscussion, supabase])

  if (status === 'error') {
    return (
      <div className="mx-auto max-w-7xl p-4 px-6 text-center md:px-12 xl:px-6">
        <h2 className="text-3xl font-bold  text-zinc-600 dark:text-zinc-300">Error fetching discussion</h2>
      </div>
    )
  }

  if (status === 'loading') {
    return (
      <div className="mx-auto max-w-7xl p-4 px-6 text-center md:px-12 xl:px-6">
        <Spinner />
      </div>
    )
  }

  return (
    <div>
      <div className="flex w-full justify-center">
        <div className="flex w-[600px] flex-row justify-between">
          <Link className="" href="/"> Back</Link>
          <div className="text-right">
            <div className="flex justify-end">
              <Avatar className="self-end">
                <AvatarImage src="https://github.com/nyxb.png" alt="@nyxb" />
                <AvatarFallback>NY</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-sm font-bold">{discussion?.user?.username}</div>
            <div className="text-sm">{formatDate(discussion?.created_at)}</div>
            <div className="text-sm">{formatTime(discussion?.created_at)}</div>
            {user?.id === discussion?.user.id
            && <DeleteDiscussion discussion={discussion} />}
          </div>
        </div>
      </div>
      <PageHeader text={discussion?.title} className="text-left" />
      <div className="flex w-full justify-center">
        <div className="flex w-[600px] flex-col justify-center">
          <div className="flex flex-col gap-4">
            <p>{discussion?.content}</p>

          </div>
        </div>
      </div>
    </div>
  )
}
