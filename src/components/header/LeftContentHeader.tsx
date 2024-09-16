"use client";
import { FaAngleDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import OptionProduct from "~/components/header/OptionProduct";
import OptionBlog from "~/components/header/OptionBolg";
export default function LeftContentHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div
      className="content-left w-[70%]  flex justify-end  items-center h-full gap-3
        sm:w-full sm:justify-between relative  sm:px-14 xs:w-full xs:justify-between  xs:px-5"
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
        className="bg-[#080544] px-3 py-3 rounded hidden sm:block xs:block cursor-pointer z-10"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <FiMenu className="text-3xl text-[#1464cc]" />
      </div>
      <div
        className={`w-8/12 sm:flex-col xs:flex-col  xs:inline-flex flex text-lg font-medium justify-around items-center sm:justify-start sm:items-start xs:justify-start xs:items-start
              sm:bg-[#080544] xs:bg-[#080544] sm:text-[#1464cc] xs:text-[#1464cc]  sm:absolute xs:absolute sm:duration-200 xs:duration-200 sm:h-screen 
            sm:w-1/3 sm:z-20 xs:w-[45%] xs:z-20 xs:h-screen xs:right-0 xs:top-0 sm:right-0 sm:top-0 sm:transition-all xs:transition-all sm:ease-in xs:ease-in  ${
              isOpenMenu
                ? "sm:translate-x-0 xs:translate-x-0"
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
        <Link href="/" className=" sm:w-full xs:w-full ">
          <span
            className="cursor-pointer hover:text-[#1464cc]  block  
              sm:px-3 sm:py-1 sm:border-b-[1px] xs:px-3 xs:py-1 xs:border-b-[1px] "
          >
            Trang chủ
          </span>
        </Link>

        <Link href="/about" className=" sm:w-full xs:w-full">
          <span
            className="cursor-pointer hover:text-[#1464cc] flex 
              sm:px-3 sm:py-1 sm:border-b-[1px] xs:px-3 xs:py-1 xs:border-b-[1px]"
          >
            Giới thiệu
          </span>
        </Link>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="xs:w-full sm:w-full">
              <span
                className="flex items-center gap-0.5 cursor-pointer title-product hover:text-[#1464cc] 
              sm:pl-3  sm:border-b-[1px] sm:justify-between xs:pl-3  xs:border-b-[1px] xs:justify-between sm:w-full xs:w-full"
              >
                <span className=" sm:py-1">Sản phẩm</span>
                <div className="sm:px-4 sm:py-2 sm:border-l-[1px] xs:px-3 xs:py-2 xs:border-l-[1px] ">
                  <FaAngleDown className="text-xs  icon-product " />
                </div>
              </span>
            </TooltipTrigger>
            <TooltipContent className="px-0 py-0 ">
              <OptionProduct />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="xs:w-full sm:w-full">
              <Link href="/blog">
                <span
                  className="cursor-pointer hover:text-[#1464cc] flex items-center gap-0.5 sm:pl-3 sm:border-b-[1px] sm:justify-between  xs:pl-3  xs:border-b-[1px] xs:justify-between"
                  data-tooltip-id="my-blog"
                >
                  <span className=" sm:py-1">Blog</span>
                  <div className="sm:px-4 sm:py-2 sm:border-l-[1px] xs:px-3 xs:py-2 xs:border-l-[1px]">
                    <FaAngleDown className="text-xs  icon-product " />
                  </div>
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <OptionBlog />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Link href="/contact" className=" sm:w-full xs:w-full ">
          <span className="cursor-pointer hover:text-[#1464cc] flex sm:pl-3 xs:pl-3">
            Liên hệ
          </span>
        </Link>
      </div>
    </div>
  );
}
