import React from "react"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '~/components/ui/avatar'
import { formatDate, formatTime } from "~/utils/date"
import DeleteDiscussion from "./delete-discussion"

export default function DiscussionItem({ discussion, onDelete }: { discussion: any, onDelete: () => void }) {
    return (
        <Card className="w-full my-4 flex flex-col md:flex-row">
            <CardHeader>

                <CardDescription>
                    <Avatar>
                        <AvatarImage src="https://github.com/nyxb.png" alt="@nyxb" />
                        <AvatarFallback>NY</AvatarFallback>
                    </Avatar>
                    <span>{discussion.user?.username}</span>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-1.5 p-6 w-full">
                <CardTitle className="text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white"><Link href={`/discussion/${discussion.id}`}>{discussion.title}</Link></CardTitle>

                <p>{discussion.content}</p>
            </CardContent>
            <div className="w-[200px] flex flex-col items-center justify-arround p-6 text-left">
                <div className="text-sm">{formatDate(discussion.created_at)}</div>
                <div className="text-sm" >{formatTime(discussion.created_at)}</div>
            </div>

            <DeleteDiscussion discussion={discussion} onDelete={onDelete} />
        </Card>
    )
}