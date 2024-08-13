import React from "react";
import { useRouter } from 'next/navigation'
import { createClient } from "~/utils/supabase/client";

export default function DeleteDiscussion({ discussion, onDelete }) {
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
            onDelete();
        }
    }

    return <div>
            <button onClick={handleDelete}>
                Delete
            </button>
        </div>
    
}   