import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Button } from '@/components/ui/button'
import UserRegisterForm from '@/components/user/user-register-form'

interface linktype {
  linkvariant?: 'button' | 'text'
}

export default function UserRegisterDialog({ linkvariant = 'button' }: linktype) {
  return (
    <Dialog>
      {linkvariant === 'button' && (
        <DialogTrigger asChild>
          <Button>Register</Button>
        </DialogTrigger>
      )}

      {linkvariant === 'text'
      && <DialogTrigger className="color-primary underline">Register</DialogTrigger>}
      <DialogContent className="backdrop-blur-lg">
        <DialogHeader className="my-5">
          <DialogTitle>Register Account</DialogTitle>
          <DialogDescription>
            Please register with your email and password
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <UserRegisterForm />
        </div>
      </DialogContent>
    </Dialog>
  )
}
