import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="fixed top-0 px-4 border-b shadow-lg bg-blue-300 items-center flex w-full h-20 ">
        <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
            <Logo />
            <div className="md:block md:w-auto flex justify-center items-center w-full">
            <Button className="hover:scale-105"  size={'lg'} asChild>
                <Link href={'/login'}>
                Start Managing Your Time
                </Link>
            </Button>
            </div>

        </div>

    </div>
  )
}

export default Navbar