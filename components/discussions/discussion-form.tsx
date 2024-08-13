'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { createClient } from "~/utils/supabase/client";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import useUser from '@/components/user/hooks/useUser'

export default function DiscussionForm() {
    const supabase = createClient();
    const router = useRouter();
    const [user] = useUser();

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get('title');
        const content = formData.get('content');
        console.log(title, content);

        const discussionData = {
            user: user.id,
            title,
            content
        }

        const { error } = await supabase
            .from('discussions')
            .insert(discussionData);

        if (error) {
            console.log('error', error)
        }
        else {
            console.log('success');
            router.push('/');
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
                <Input type="text" name="title" placeholder="Title" required />
                <Textarea name="content" placeholder="Content" required />
                <Button className="self-end" type="submit">Submit</Button>
            </form>
        </div>
    )
}