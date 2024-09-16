import React from "react";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "~/components/ui/command";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
export default function RightContentHeader() {
  const isAuth = true;
  return (
    <div className="content-right w-[25%] flex items-center text-lg font-medium pl-5 justify-center gap-6 sm:hidden xs:hidden">
      {isAuth === true ? (
        <>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="xs:w-full sm:w-full">
                <div
                  className="flex justify-center items-center gap-2 cursor-pointer  "
                  data-tooltip-id="my-profile"
                >
                  Hello Admin! <RxAvatar className="cursor-pointer " />
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-0 py-0 ">
                <Command>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>

                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem className="flex items-center gap-2">
                        <RxAvatar className="cursor-pointer " />
                        Thông tin cá nhân
                      </CommandItem>

                      <Link href="/products/courses/search-course">
                        <CommandItem>Thông tin khóa học</CommandItem>
                      </Link>
                      <Link href="/products/devices-kits/search-kit">
                        <CommandItem>Thông tin Thiết bị/Kit</CommandItem>
                      </Link>
                      <CommandItem>Đăng xuất</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
      ) : (
        <div className=" flex items-center justify-start gap-6  ">
          <Link href={"/login"}>
            <button className="px-5 py-2 rounded text-white bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] shadow-2xl shadow-[#7A9598]">
              Đăng ký khoá học
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
