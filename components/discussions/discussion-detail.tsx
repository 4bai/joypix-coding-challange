'use client'

import React from "react";
import { createClient } from "~/utils/supabase/client";
import useUser from "~/components/user/hooks/useUser";
import { useState, useEffect, useReducer } from "react";
import { Discussion } from './types'

export default function DiscussionDetail({ discussionId }) {
    const supabase = createClient();
    const [user] = useUser();
    const [discussions, setDiscussions] = useState<Discussion[]>([]);
    const [update, forceUpdate] = useReducer((x: number) => x + 1, 0);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        setStatus("loading");
        const fetchDiscussions = async () => {
            const { data: loadedDiscussions, error } = await supabase
                .from('discussions')
                .where('id', 'eq', discussionId)
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
    }, [update])
    return (
        <div>
            <h1>Discussion Detail</h1>
        </div>
    );
}
