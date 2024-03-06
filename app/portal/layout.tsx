'use server'
import React from 'react'
import SideBar from '../components/Other/SideBar'
import Header from '../components/Other/Header'
import { getCurrentUser } from "@/lib/session";
import { User } from "@prisma/client";


const layout = async ({children}: {children: React.ReactNode}) => {

  const user = await getCurrentUser();



  return (
    <section className="">
    <div className="min-h-screen bg-slate-100 dark:bg-black">
      <SideBar user={user as User} />
      <div className="sm:ml-24"> 
      <Header user={user as User} />
        {children}
      </div>
    </div>
  </section>
  )
}

export default layout