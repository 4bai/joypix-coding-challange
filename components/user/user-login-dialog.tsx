import React from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import { Button } from '@/components/ui/button'
import UserLoginForm from "@/components/user/user-login-form"

type linktype = {
    linkvariant: "button" | "text"
};

export default function UserLoginDialog({ linkvariant = "button" }: linktype) {
    return <Dialog>
        {linkvariant === "button" &&
            <DialogTrigger asChild>
                <Button variant="outline">Login</Button>
            </DialogTrigger>
        }

        {linkvariant === "text" &&
            <DialogTrigger className="underline color-primary">Login</DialogTrigger>
        }

        <DialogContent className="backdrop-blur-lg">
            <DialogHeader className="my-5">
                <DialogTitle>Login</DialogTitle>
                <DialogDescription>
                    Please login with your email and password
                </DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
                <UserLoginForm />
            </div>
        </DialogContent>
    </Dialog>
}