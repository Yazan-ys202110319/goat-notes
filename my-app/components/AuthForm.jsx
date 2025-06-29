'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';
import { CardContent, CardFooter } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useTransition } from 'react';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { loginAction } from '@/actions/users';
import { signUpAction } from '@/actions/users';


function AuthForm({ type }) {

    const isLoginForm = type === 'login';

    const router = useRouter();

    const [isPending, startTransition] = useTransition()

    const handleSubmit = (formData) => {
        startTransition(async () => {
            const email = formData.get("email")?.toString();
            const password = formData.get("password")?.toString();


            let errorMessage;
            let title;
            let description;
            
            // login form
            if (isLoginForm) {
                errorMessage = (await loginAction(email, password)).errorMessage;
                title = "Logged in";
                description = "You have been successfully logged in";
            }

            // sign up form
            else {
                errorMessage = (await signUpAction(email, password)).errorMessage;
                title = "Signed Up";
                description = "Check your email for confirmation link";
            }

            if (!errorMessage) {
                toast.success(title, {
                    description,
                });
                router.replace("/");
            }

            else {
                toast.error("Error", {
                    description: errorMessage,
                });
            }

        });
    };

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

        <CardFooter className="mt-4 flex flex-col gap-6">
            <Button className="w-full">
                {isPending ? <Loader2 className='animte-spin' /> : isLoginForm ? 'Login' : 'Sign Up' }
            </Button>
            <p className='text-xs'>
                {isLoginForm ? "Don't have an account yet?" : "Already have an account?"}{" "}
                <Link href={isLoginForm ? "/sign-up" : "/login"} className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}>
                {isLoginForm ? "Sign Up" : "Login"}
                </Link>
            </p>
        </CardFooter>

    </form>
  )
}

export default AuthForm