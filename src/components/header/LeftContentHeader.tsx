"use client";
import { FaAngleDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";

import { FiShoppingCart } from "react-icons/fi";

import { LuBellRing } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import OptionProduct from "~/components/header/OptionProduct";
import OptionBlog from "~/components/header/OptionBolg";
import { usePathname } from "next/navigation";
import TooltipAvatar from "~/components/custom/TooltipAvatar";
import { useAuthStore } from "~/store/auth/AuthStore";

import TooltipChatbot from "../custom/TooltipChatbot";
export default function LeftContentHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenAllProduct, setOpenAllProduct] = useState(false);
  const [isOpenBlogs, setOpenBlogs] = useState(false);
  const { isAuth } = useAuthStore();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div
      className="content-left  w-full  flex justify-end  items-center h-full gap-1 
        sm:justify-between relative  sm:px-5  xs:justify-between  xs:px-5"
    >
      <div
        className="flex flex-col justify-center items-center w-4/12 h-[75px]
      lg:w-[30%]  sm:items-start xs:w-[45%] xs:items-start"
      >
        <Link href={"/"} className="cursor-pointer flex flex-col">
          <span
            className="text-5xl xs:tracking-widest lg:text-[40px] font-semibold text-center text-[#D32F2F] text-shadow-lg xs:text-4xl"
            style={{
              textShadow:
                "rgb(106 109 129) 3px 0px 0px, rgba(0, 0, 0, 0) 4px -1px 10px, rgba(0, 0, 0, 0) 16px 1px 2px, rgba(115, 86, 86, 0) 22px 18px 30px",
            }}
          >
            OpenLAB
          </span>
          <span className="text-[#D32F2F] font-semibold text-lg text-center tracking-widest xs:tracking-normal">
            AI/IoT as a service
          </span>
        </Link>
      </div>

      {isAuth === true ? (
        <div className=" sm:flex xs:flex items-center gap-5 w-1/2 hidden">
          <div className=" gap-4 items-center hidden xs:flex sm:flex w-full justify-end">
            <TooltipChatbot />
            <div className="relative cursor-pointer">
              <FiShoppingCart className="text-2xl" />
              <span className="absolute text-white text-xs font-medium block bottom-[-4px] right-[-5px] bg-red-500 z-10 w-[16px] rounded-full text-center">
                2
              </span>
            </div>
            <div className="relative cursor-pointer">
              <LuBellRing className="text-2xl" />
              <span className="absolute text-white text-xs font-medium block bottom-[-4px] right-[-5px] bg-red-500 z-10 w-[16px] rounded-full text-center">
                3
              </span>
            </div>
            <TooltipAvatar />
          </div>
          <div
            className="hidden sm:block xs:block cursor-pointer z-10 ml-1"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <FiMenu className="text-2xl" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-12 xs:gap-4  sm:gap-7  xl:hidden lg:hidden 2xl:hidden ">
          <TooltipChatbot />
          <Link href={"/auth"}>
            <button className="px-5 py-2 rounded text-white bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] shadow-2xl shadow-[#7A9598]">
              Đăng nhập
            </button>
          </Link>
          <div
            className="hidden sm:block xs:block cursor-pointer z-10 ml-1"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <FiMenu className="text-2xl" />
          </div>
        </div>
      )}

      <div
        className={`w-8/12 lg:w-[70%]  sm:flex-col xs:flex-col  xs:inline-flex flex text-lg font-medium justify-around items-center sm:justify-start sm:items-start xs:justify-start xs:items-start
              sm:bg-[#080544] xs:bg-[#080544] sm:text-[#1464cc] xs:text-[#1464cc]  sm:absolute xs:absolute sm:duration-200 xs:duration-200 sm:h-screen 
            sm:w-1/3 sm:z-20 xs:w-[45%] xs:z-20 xs:h-screen xs:right-0 xs:top-0 sm:right-0 sm:top-0 sm:transition-all xs:transition-all sm:ease-in xs:ease-in  ${
              isOpenMenu
                ? "sm:-translate-x-0 xs:translate-x-0"
                : " sm:translate-x-full xs:translate-x-full"
            }`}
        //  data-aos="zoom-out"
      >
        <div
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className=" px-4 pt-2 cursor-pointer hidden sm:flex sm:justify-end  xs:flex xs:justify-end w-full"
        >
          <HiXMark />
        </div>
        <Link
          href="/"
          className={`sm:w-full xs:w-full cursor-pointer hover:text-[rgb(20,100,204)] ${
            pathname === "/" && "text-[#1464cc]"
          } active:text-[#5ea0f5] focus:text-[#1464cc]
              sm:px-3 sm:py-1 sm:border-b-[1px] xs:px-3 xs:py-1 xs:border-b-[1px] font-semibold`}
        >
          Trang chủ
        </Link>

        <Link
          href="/about"
          className={` sm:w-full xs:w-full cursor-pointer hover:text-[#1464cc] flex font-semibold ${
            pathname === "/about" && "text-[#1464cc]"
          }
              sm:px-3 sm:py-1 sm:border-b-[1px] xs:px-3 xs:py-1 xs:border-b-[1px] active:text-[#5ea0f5] focus:text-[#1464cc]`}
        >
          Giới thiệu
        </Link>

        <TooltipProvider delayDuration={100}>
          <Tooltip open={isOpenAllProduct}>
            <TooltipTrigger
              onClick={() => setOpenAllProduct(!isOpenAllProduct)}
              className="xs:w-full sm:w-full cursor-pointer active:text-[#5ea0f5]   focus:text-[#1464cc]"
            >
              <span
                className="flex items-center gap-0.5 cursor-pointer title-product hover:text-[#1464cc] font-semibold
              sm:pl-3  sm:border-b-[1px] sm:justify-between xs:pl-3  xs:border-b-[1px] xs:justify-between sm:w-full xs:w-full"
              >
                <span className=" sm:py-1">Sản phẩm</span>
                <div className="sm:px-4 sm:py-2 sm:border-l-[1px] xs:px-3 xs:py-2 xs:border-l-[1px] ">
                  <FaAngleDown className="text-xs  icon-product " />
                </div>
              </span>
            </TooltipTrigger>
            <TooltipContent className="px-0 py-0 bg-white">
              <OptionProduct />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100}>
          <Tooltip open={isOpenBlogs}>
            <TooltipTrigger
              className="xs:w-full sm:w-full"
              onClick={() => setOpenBlogs(!isOpenBlogs)}
            >
              <Link
                href="/blog"
                className={`active:text-[#5ea0f5] focus:text-[#1464cc] ${
                  pathname === "/blog" && "text-[#1464cc]"
                }`}
              >
                <span
                  className="cursor-pointer hover:text-[#1464cc] font-semibold flex items-center gap-0.5 sm:pl-3 sm:border-b-[1px] sm:justify-between  xs:pl-3  xs:border-b-[1px] xs:justify-between"
                  data-tooltip-id="my-blog"
                >
                  <span className=" sm:py-1">Blog</span>
                  <div className="sm:px-4 sm:py-2 sm:border-l-[1px] xs:px-3 xs:py-2 xs:border-l-[1px]">
                    <FaAngleDown className="text-xs  icon-product " />
                  </div>
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-white">
              <OptionBlog />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Link
          href="/contact"
          className={`sm:w-full xs:w-full active:text-[#5ea0f5]  focus:text-[#1464cc] ${
            pathname === "/contact" && "text-[#1464cc]"
          }`}
        >
          <span className="cursor-pointer hover:text-[#1464cc] flex sm:pl-3 xs:pl-3 font-semibold">
            Liên hệ
          </span>
        </Link>
      </div>
    </div>
  );
}
