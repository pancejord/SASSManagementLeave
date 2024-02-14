import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="fixed top-0 px-4 border-b shadow-md bg-blue-300 items-center flex w-full h-20 ">
        <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
            <Logo />

        </div>

    </div>
  )
}

export default Navbar