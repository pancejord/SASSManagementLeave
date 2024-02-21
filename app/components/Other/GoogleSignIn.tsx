import React from 'react'
import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

const GoogleSignIn = () => {

    const handleClick = () => {
        signIn('google', {callbackUrl: '/portal'});
    }


  return (
    <Button onClick={handleClick} className="hover:scale-110 bg-black text-white" size={'lg'}>
    <FcGoogle size='24' className="mr-3" />
        Sign in with Google

    </Button>
  )
}

export default GoogleSignIn