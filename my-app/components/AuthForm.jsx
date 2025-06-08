'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';
import { CardContent } from './ui/card';
import { Label } from './ui/label';


function AuthForm({ type }) {
    const isLoginForm = type === 'login';

    const router = useRouter();

    const handleSubmit = (formData) => {
        console.log('form submitted')
    }

  return (
    <form action={handleSubmit}>AuthForm

        <CardContent>
            <div>
                <Label htmlFor="email">Email</Label>
            </div>
        </CardContent>

    </form>
  )
}

export default AuthForm