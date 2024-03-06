import React from 'react'
import { User } from '@prisma/client';
import {cn} from "@/lib/utils"
import localFont from "next/font/local"




const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
  })


type Props = {
    user: User;
  };

const Welcomebanner = ({user} : Props) => {
  return (
    <div className='max-w-[2520px] mx-auto md:px-10 sm:px-2 px-4 mt-4'>
        <div className='flex justify-start items-center'>
            <h2 className={cn('text-xl font-extrabold leading-tight lg:text-2xl', headingFont.className)}>Welcome {user.name}!</h2>
        </div>

      
  </div>
  )
}

export default Welcomebanner