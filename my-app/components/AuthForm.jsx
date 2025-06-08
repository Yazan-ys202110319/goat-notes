'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';
import { CardContent } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useTransition } from 'react';


function AuthForm({ type }) {

    const isLoginForm = type === 'login';

    const router = useRouter();

    const [isPending, startTransition] = useTransition()

    const handleSubmit = (formData) => {
        console.log('form submitted')
    }

  return (
    <form action={handleSubmit}>

        <CardContent className="grid w-full items-center gap-4">
            <div className='flex flex-col space-y-1.5'>
                <Label htmlFor="email">Email</Label>
                    <Input 
                    id = "email" 
                    name = "email" 
                    placeholder = "Enter your email" 
                    type="email" 
                    required 
                    disabled = {isPending}>
                        
                    </Input>
            </div>

            <div className='flex flex-col space-y-1.5'>
                <Label htmlFor="password">Password</Label>
                    <Input 
                    id = "password" 
                    name = "password" 
                    placeholder = "Enter your password" 
                    type="password" 
                    required 
                    disabled = {isPending}>
                        
                    </Input>
            </div>

        </CardContent>

    </form>
  )
}

export default AuthForm