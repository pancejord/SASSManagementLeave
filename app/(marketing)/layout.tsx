import React from 'react'
import Navbar from '../components/Other/Navbar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='overflow-hidden'>
          <Navbar />
    <main>
        {children}
    </main>


</div>
  )
}

export default layout