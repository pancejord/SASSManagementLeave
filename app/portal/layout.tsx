'use server'
import React from 'react'
import SideBar from '../components/Other/SideBar'
import HeaderDash from '../components/Other/HeaderDash'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className="">
    <div className="min-h-screen bg-slate-100 dark:bg-black">
        <SideBar />
      <div className="sm:ml-24"> 
        {children}
      </div>
    </div>
  </section>
  )
}

export default layout