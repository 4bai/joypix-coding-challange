import React from 'react'
import Link from 'next/link'
import type { Discussion } from './types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/components/ui/avatar'
import { formatDate, formatTime } from '~/utils/date'

export default function DiscussionItem({ discussion }: { discussion: Discussion }) {
  return (
    <Card className="my-4 flex w-full flex-col md:flex-row">
      <CardHeader>

        <CardDescription>
          <Avatar>
            <AvatarImage src="https://github.com/nyxb.png" alt="@nyxb" />
            <AvatarFallback>NY</AvatarFallback>
          </Avatar>
          <span>{discussion.user?.username}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex w-full flex-col space-y-1.5 p-6">
        <CardTitle className="text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white"><Link href={`/discussion/${discussion.id}`}>{discussion.title}</Link></CardTitle>

        <p>{discussion.content}</p>
      </CardContent>
      <div className="justify-arround flex w-[200px] flex-col items-center p-6 text-left">
        <div className="text-sm">{formatDate(discussion.created_at)}</div>
        <div className="text-sm">{formatTime(discussion.created_at)}</div>
      </div>
    </Card>
  )
}
