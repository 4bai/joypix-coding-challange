import React from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import type { Discussion } from '@/components/discussions/types'

export default function DeleteDiscussion({ discussion }: { discussion: Discussion }) {
  const supabase = createClient()
  const router = useRouter()
  const handleDelete = async () => {
    const { error } = await supabase
      .from('discussions')
      .delete()
      .eq('id', discussion.id)
      .select()
    if (!error)
      router.push('/')
  }

  return (
    <div>
      <Button variant="outline" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  )
}
