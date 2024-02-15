import Image from 'next/image'
import Link from 'next/link'

export const LandingPage = () => {
  return (
    <Link href="/login">
        <div className='transition hover:scale-105 shadow-lg flex w-full items-center rounded'>
            <Image 
            src={"/landingpage.jpg"}
            alt='LandingPage'
            height={1000}
            width={1000} />
        </div>
    
    </Link>
  )
}

