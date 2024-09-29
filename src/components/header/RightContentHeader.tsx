"use client";
import { RxAvatar } from "react-icons/rx";
import { FaAddressCard } from "react-icons/fa";
import Link from "next/link";
import { IoCalculatorOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { MdEditCalendar } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { LuBellRing } from "react-icons/lu";
import { handleLogout } from "~/services/auth/authService";
import { useAuthStore } from "~/store/auth/AuthStore";
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
  const { isAuth, setIsAuth, setUser } = useAuthStore();
  const handleLogoutPage = async () => {
    await handleLogout();
    const resetUser = {
      _id: "",
      fullname: "",
      role: "",
      email: "",
      address: "",
      dateOfBirth: "",
      access_token: "",
    };
    setIsAuth(false);
    setUser(resetUser);
  };
  return (
    <div className="content-right w-[25%] flex items-center text-lg font-medium pl-5 justify-center gap-6 sm:hidden xs:hidden">
      {isAuth === true ? (
        <>
          <div className="flex gap-7 items-center">
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
          </div>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="xs:w-full sm:w-full">
                <div className="flex justify-center items-center gap-2 cursor-pointer ">
                  <RxAvatar className="cursor-pointer text-2xl" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-0 py-0 bg-white ">
                <Command>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>

                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem className="flex items-center gap-2">
                        <FaAddressCard className="cursor-pointer " />
                        Thông tin cá nhân
                      </CommandItem>

                      <Link href="/products/courses/search-course">
                        <CommandItem className="flex items-center gap-2">
                          <MdEditCalendar />
                          Thông tin khóa học
                        </CommandItem>
                      </Link>
                      <Link href="/products/devices-kits/search-kit">
                        <CommandItem className="flex items-center gap-2">
                          <IoCalculatorOutline />
                          Thông tin Thiết bị/Kit
                        </CommandItem>
                      </Link>

                      <Link onClick={handleLogoutPage} href={"/auth"}>
                        <CommandItem className="flex items-center gap-2">
                          <MdLogout />
                          Đăng xuất
                        </CommandItem>
                      </Link>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
      ) : (
        <div className="flex items-center justify-start gap-6  ">
          <Link href={"/auth"}>
            <button className="px-5 py-2 rounded text-white bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] shadow-2xl shadow-[#7A9598]">
              Đăng ký khoá học
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
