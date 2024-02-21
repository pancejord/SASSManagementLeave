import React from 'react'
import Navbar from '../components/Other/Navbar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className="">
    <div className=" min-h-screen bg-slate-100 dark:bg-black">

      <div className="sm:ml-[6rem] " > 

        {children}
      </div>
    </div>
  </section>
  )
}

export default layout