'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import useUser from '@/components/user/hooks/useUser'
import type { Discussion } from '@/components/discussions/types'

export default function DiscussionForm() {
  const supabase = createClient()
  const router = useRouter()
  const [user] = useUser()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const title = formData.get('title')
    const content = formData.get('content')

    const discussionData = {
      user: user?.id,
      title,
      content,
    } as Discussion

    const { error } = await supabase
      .from('discussions')
      .insert(discussionData)

    if (error)
      console.error(error)

    else
      router.push('/')
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input type="text" name="title" placeholder="Title" required />
        <Textarea name="content" placeholder="Content" required />
        <Button className="self-end" type="submit">Submit</Button>
      </form>
    </div>
  )
}
