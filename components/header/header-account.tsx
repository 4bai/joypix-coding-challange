'use client'

import React from "react"
import { useEffect } from "react"
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import useUser from '@/components/user/hooks/useUser'
import LoginDialog from "~/components/user/user-login-dialog"
import RegisterDialog from "~/components/user/user-register-dialog"
const supabase = createClient();

export default function HeaderAccount() {

    const [user, setUser] = useUser();
    const router = useRouter();

    // TODO refactor! unessary fetch
    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            console.log('header user', user);
            setUser(user);
        }
        fetchUser();
    }, []);

    function handleLogout() {
        supabase.auth.signOut();
        setUser(null);
        router.push('/');
    }

    return <>
        {user &&
            <>
            <div>Logged in as <strong>{user.user_metadata?.username}</strong></div>
            <Button variant="ghost" onClick={() => handleLogout()}>Logout</Button>
            <Link href="/submit-discussion">
                <Button>Start Discussion </Button>
            </Link>
            </>
        }

        {!user &&
            <>
                <LoginDialog />
                <RegisterDialog />
            </>
        }
    </>
}
