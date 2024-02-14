import Image from "next/image";
import { LandingPage } from "../components/Other/LandingPagePhoto";
import {cn} from "@/lib/utils"
import localFont from "next/font/local"


const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
})

export default function Home() {
  return (
    <div className={cn("text-3xl md:text-6xl  text-center text-neutral-800 mb-6", headingFont.className)}>
      SASSLeaveManagment
      <div className="text-2xl md:text-3xl items-center mt-3 justify-center px-4 p-2 mx-auto w-fit rounded-md pb-4 bg-gradient-to-r from-blue-600 to-pink-600">Empowering Work-Life Balance</div>
    <div className="flex w-full justify-center pt-6 mx-auto">
      <LandingPage/>
    </div>
    <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
    Elevating Leave Management, Event Coordination, Calendar Integration, and User Administration for Seamless Business Operations
    </div>
    </div>
  );
}
