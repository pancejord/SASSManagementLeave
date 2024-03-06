'use client'
import Image from "next/image"
import { MdDashboard } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { User } from "@prisma/client";
import { AdminRoutes, ModeratorRoutes, UserRoutes } from "./Routes";
import { RenderRoutes } from "./RenderRoutes";
import ToggleDarkTheme from "./ToggleDarkTheme";


type SideBarProps = {
  user: User
};




const SideBar = ({user}: SideBarProps) => {

  const adminIconsRouter = () => {
    return <>{RenderRoutes({ routes: AdminRoutes })}</>;
  };
    

    const userIconsRouter = () => {
      return <>{RenderRoutes({ routes: UserRoutes })}</>;
    };
  
    const moderatorIconsRouter = () => {
      return <>{RenderRoutes({ routes: ModeratorRoutes })}</>;
    };
  






  return (
    <div className="hidden fixed  inset-y-0 left-0 sm:block w-[5rem] bg-white rounded-lg shadow-2xl overflow-hidden dark:bg-black dark:border-r">
    <div className="flex flex-col items-center justify-between h-full">
      {/* TOP PART  */}
      <div>
        <div className="my-10">
          <Image src="/logo.png" width={40} height={40} alt="logo" />
        </div>

        <nav className="flex flex-col items-center gap-8 justify-center px-3 overflow-y-auto">
          {user?.role === "ADMIN" && adminIconsRouter()}
          {user?.role === "USER" && userIconsRouter()}
          {user?.role === "MODERATOR" && moderatorIconsRouter()}
        </nav>
      </div>
      {/* BOTTOM PART  */}
      <div className="flex flex-col items-center space-y-6 my-8">
      <ToggleDarkTheme />

      </div>
    </div>
  </div>
);
};

export default SideBar


