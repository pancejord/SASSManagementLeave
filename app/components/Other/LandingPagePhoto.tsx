import Image from 'next/image'
import Link from 'next/link'

export const LandingPage = () => {
  return (
    <Link href="/">
        <div className='transition flex w-full items-center rounded'>
            <Image 
            src={"/landingpage.jpg"}
            alt='LandingPage'
            height={1000}
            width={1000} />
        </div>
    
    </Link>
  )
}

