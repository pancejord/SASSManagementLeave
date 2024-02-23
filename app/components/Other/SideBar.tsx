'use client'
import Image from "next/image"

const SideBar = () => {
  return (
    <div className="hidden fixed  inset-y-0 left-0 sm:block w-[5rem] bg-white rounded-lg shadow-lg overflow-hidden dark:bg-black dark:border-r">
        <div className="flex flex-col items-center justify-between h-full">
        <div className="my-8">
            <Image src={'/logo.png'} width={40} height={40} alt="logoSide"/>


        </div>

        </div>


    </div>
  )
}

export default SideBar


