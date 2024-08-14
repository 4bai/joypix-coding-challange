'use client'

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from '~/components/ui/alert'
import useUser from "@/components/user/hooks/useUser";
import { AlertCircle } from "lucide-react";

export default function UserLogin() {
    const router = useRouter();
    const [user, setUser] = useUser();
    const supabase = createClient();
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const loginData = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        }

        const { error, data } = await supabase.auth.signInWithPassword(loginData)

        if (error) {
            console.log('error', error);
            setErrorMessage(error.message);
            router.push('/error');
        }

        setUser(data.user);
        router.push('/');
    }

    return <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input type="email" name="email" placeholder="Email" required autoComplete="email" />
            <Input type="password" name="password" placeholder="Password" required autoComplete="current-password" />
            <Button type="submit" className="self-end">Login</Button>
            {errorMessage && <Alert variant="destructive">
                <AlertCircle className="size-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    {errorMessage}
                </AlertDescription>
            </Alert>
            }
        </form>
    </div>;
}