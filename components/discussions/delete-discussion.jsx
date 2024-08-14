import React from "react";
import { useRouter } from 'next/navigation'
import { createClient } from "@/utils/supabase/client";
import { Button } from '@/components/ui/button'

export default function DeleteDiscussion({ discussion }) {
    const supabase = createClient();
    const router = useRouter();
    const handleDelete = async () => {
        const { error } = await supabase
            .from('discussions')
            .delete()
            .eq('id', discussion.id)
            .select();
        if (error) {
        } else {
            console.log('deleted');
            router.push('/');
        }
    }

    return <div>
            <Button variant="destructive" onClick={handleDelete}>
                Delete
            </Button>
        </div>
    
}   