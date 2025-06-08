'use client';

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function LogOutButton() {

    const router = useRouter();

    const [loading, setLoading] = useState(true);

    const handleLogOut = async () => {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const errorMessage = null;

        // if there is no error

        if (!errorMessage) {
            toast.success("Logged out", {
                    description: "You have been logged out successfully."
                });
            router.push("/");
        }

        // if there is an error

        else {
            toast.error("Logout failed", {
                description: errorMessage,
            });
        }

        setLoading(false);

        console.log('Logging out...');
    }

  return (
    <Button className="w-24"
    variant="outline"
    onClick={handleLogOut}
    disabled={loading}
    >
        {loading ? <Loader2 className='animate-spin' /> : "Log Out"}
    </Button>
  );
}

export default LogOutButton