'use client'

import React from "react"
import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation'
import useUser from '@/components/user/hooks/useUser'
import LoginDialog from "~/components/user/user-login-dialog"
import RegisterDialog from "~/components/user/user-register-dialog"
const supabase = createClient();

export default function HeaderAccount() {

    //const [user, setUser] = useState<any>(null);
    const [user, setUser] = useUser();

    // TODO refactor! unessary useEffect
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
        redirect('/')
    }


    return <>
        {user &&
            <>
                <div>Logged in as {user.email}</div>
                <Link href="/submit-discussion">
                    <Button>Start Discussion </Button>
                </Link>
                <Button variant="outline" onClick={() => handleLogout()}>Logout</Button>
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
