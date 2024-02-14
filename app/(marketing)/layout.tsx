import React from 'react'
import Navbar from '../components/Other/Navbar'
import { LandingPage } from '../components/Other/LandingPagePhoto'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-full bg-slate-100 ">
    <Navbar />
    <main className="pt-40 pb-96 bg-slate-100">
        {children}
    </main>


</div>
  )
}

export default layout