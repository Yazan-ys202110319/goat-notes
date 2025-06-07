'use client';

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

function LogOutButton() {

    const [loading, setLoading] = useState(false);

  return (
    <Button>
        {loading ? <Loader2 className='animate-spin' /> : "Log out"}
    </Button>
  );
}

export default LogOutButton