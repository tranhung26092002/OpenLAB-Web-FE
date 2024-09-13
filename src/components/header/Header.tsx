"use client";
import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";

import OptionProduct from "~/components/header/OptionProduct";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="body-header flex flex-col  shadow-xl sticky top-0 z-10 bg-white">
      <div className="flex bg-blue-50 justify-around py-3 sm:py-0 xs:py-0">
        <div
          className="content-left w-[70%]  flex justify-end  items-center h-full gap-3 bg-red-600
      sm:w-full sm:justify-between relative  sm:px-14 xs:w-full xs:justify-between  xs:px-5
      "
        >
          <div
            className="logo flex flex-col justify-center items-center w-4/12 h-[75px]
        sm:w-[35%] sm:items-start xs:w-2/3 xs:items-start"
          >
            <Link href={"/"} className="cursor-pointer flex flex-col">
              <span
                className="text-5xl font-semibold text-center text-[#D32F2F] text-shadow-lg xs:text-4xl"
                style={{
                  textShadow:
                    "rgb(106 109 129) 3px 0px 0px, rgba(0, 0, 0, 0) 4px -1px 10px, rgba(0, 0, 0, 0) 16px 1px 2px, rgba(115, 86, 86, 0) 22px 18px 30px",
                }}
              >
                OpenLAB
              </span>
              <span className="text-[#D32F2F] text-center font-medium ">
                AI/IoT as a service
              </span>
            </Link>
          </div>
          <div
            className={`w-8/12 sm:flex-col xs:flex-col  xs:inline-flex flex text-lg font-medium justify-around items-center sm:justify-start sm:items-start xs:justify-start xs:items-start
              sm:bg-[#080544] xs:bg-[#080544] sm:text-[#1464cc] xs:text-[#1464cc]  sm:absolute xs:absolute sm:duration-200 xs:duration-200 sm:h-screen 
              xs:h-screen xs:right-0 xs:top-0 sm:right-0 sm:top-0 sm:transition-all xs:transition-all sm:ease-in xs:ease-in  ${
                isOpenMenu
                  ? "sm:w-1/3 sm:z-20 xs:w-[45%] xs:z-20 "
                  : "sm:w-0 sm:opacity-100 sm:z-0 xs:w-0 xs:opacity-100 xs:z-0 "
              }`}
          >
            <NavigationMenu >
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white w-fit h-fit">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                       className={"w-fit h-fit bg-white"}
                      >
                        <OptionProduct />
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="border-none">
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent  className={"w-fit h-fit bg-white border-0"}>
                    <NavigationMenuLink
                      className={"w-fit h-fit"}
                    >
                      <OptionProduct />
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div
          className="content-right w-[25%] flex items-center text-lg font-medium pl-5 justify-center gap-6 sm:hidden xs:hidden
    "
        >
          <div className=" flex items-center justify-start gap-6  ">
            <Link href={"/login"}>
              <button
                className="px-5 py-2 rounded text-white bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] shadow-2xl shadow-[#7A9598]
            "
              >
                Đăng ký khoá học
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
