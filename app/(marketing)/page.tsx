import Image from "next/image";
import { LandingPage } from "../components/Other/LandingPagePhoto";
import {cn} from "@/lib/utils"
import localFont from "next/font/local"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "../components/Other/Navbar";


const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
})

export default function Home() {
  return (
    <div className="overflow-hidden bg-slate-100 pt-32 min-h-screen min-w-screen">
    <div className={cn("text-3xl md:text-6xl flex-col text-center text-neutral-800 mb-3", headingFont.className)}>
      SASSLeaveManagment
      </div>
      <div className={cn("text-2xl md:text-3xl items-center mt-2 justify-center px-4 p-2 mx-auto w-fit rounded-md pb-4 bg-gradient-to-r from-blue-600 to-pink-500", headingFont.className)}>Empowering Work-Life Balance</div>
    <div className="flex w-full items-center justify-center pt-3 mx-auto">
      <LandingPage/>
    </div>
    <div className={cn("text-sm md:text-xl text-neutral-400 mt-4 font-semibold max-w-xs md:max-w-2xl text-center mx-auto", headingFont.className)}>
    Elevating Leave Management, Event Coordination, Calendar Integration, and User Administration for Seamless Business Operations
    </div>
    <Button asChild className="flex flex-col mx-auto hover:scale-105 w-56 mt-4 items-center justify-center">
      <Link href='/login'>
      Start Managing Your Time
      </Link>
    </Button>
    </div>
  );
}
