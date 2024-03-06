import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

type RouteProps = {
    routes: { url: string; title: string; icon: React.ElementType }[];
}

export const RenderRoutes = ({routes}: RouteProps) => {
    return (
        <>
        {routes.map((route, index) => (
            <Link href={route.url} key={index}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button>
                                {React.createElement(route.icon, {
                                    size: 24,
                                })}
                            </button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{route.title}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            
            </Link>
        ))}   
        </>
    )

    
}

export  function RenderSideRoutes({ routes }: RouteProps) {
    return (
      <>
        {routes.map((route, index) => (
          <Link href={route.url} key={index} className="my-4  rounded-md">
            <div className="flex items-center justify-between ">
              <div className="px-3">
                {React.createElement(route.icon, {
                  size: 24,
                })}
              </div>
              <div className="w-16">
                <p>{route.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </>
    );
  }

