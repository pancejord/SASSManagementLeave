import Image from 'next/image'
import Link from 'next/link'
import { CardItem, CardContainer } from '@/components/ui/3d-card'

export const LandingPage = () => {
  return (

        <CardContainer>
        <CardItem
        translateZ="150"
        rotateX={2}
        rotateZ={2}
        className="-mt-10"
      >
        <Image
          src="/landingpage.jpg"
          height="1000"
          width="1000"
          className="sm:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl "
          alt="thumbnail"
        />
      </CardItem>
      </CardContainer>

    
  )
}
