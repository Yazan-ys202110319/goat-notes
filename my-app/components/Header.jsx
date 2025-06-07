import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { shadow } from '@/app/styles/utils';
import { Button } from '@/components/ui/button.jsx';
import DarkModeToggle from '@/components/DarkModeToggle.jsx';

function Header() {
  const user = null;
  return (
    <header className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8' 
    style={{ boxShadow: shadow }}>
        <Link href = "/" className='flex items-end gap-2'>
          <Image src = "/goatius.png" height={60} width={60} alt = "GOAT Notes Logo" className="rounded-full"
          priority>
          </Image>
          
          <h1 className='flex flex-col pb-1 text-2xl font-semibold leading-6'>
            GOAT <span>Notes</span>
          </h1>

        </Link>

        <div className='flex gap-4'>

          {user ? (
            "Logout"
          ) :
          (
            <>

              <Button asChild>
                  <Link href='/sign-up'>Sign Up</Link>
              </Button>

              <Button asChild variant = 'outline' className="hidden sm:block">
                  <Link href='/login'>Login</Link>
              </Button>

            </>
          )
        }

        <DarkModeToggle />

        </div>

    </header>
  );
}

export default Header;