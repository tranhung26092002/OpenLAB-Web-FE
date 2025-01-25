"use client";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { LuBellRing } from "react-icons/lu";
import { useAuthStore } from "~/store/auth/AuthStore";
import Image from "next/image";
import {
  Command,
  CommandItem,
  CommandList,
 
} from "~/components/ui/command";
import aiService from "~/assets/image/service-image/Chatbot_service.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import TooltipAvatar from "~/components/custom/TooltipAvatar";
import TooltipChatbot from "../custom/TooltipChatbot";

export default function RightContentHeader() {
  const { isAuth } = useAuthStore();

  return (
    <div className="content-right w-full flex items-center justify-end text-lg font-medium pl-5 gap-6 sm:hidden xs:hidden xl:pl-0 lg:pl-0">
      {isAuth === true ? (
        <>
          <div className="flex gap-7 items-center lg:gap-5">
            <TooltipChatbot/>
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
          <TooltipAvatar />
        </>
      ) : (
        <div className="flex items-center justify-end gap-12 w-full xl:gap-7 lg:gap-5 ">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="xs:w-full sm:w-full">
                <div className="flex justify-center items-center gap-2 cursor-pointer ">
                  <Image
                    src={aiService}
                    alt={"ai-chat"}
                    className="w-14 h-14 object-contain "
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-0 py-0 bg-white " side="bottom">
                <Command>
                  <CommandList>
                    <CommandItem className="flex items-center gap-2 text-[13px]">
                      Chat để được tư vấn về sản phẩm
                    </CommandItem>
                  </CommandList>
                </Command>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Link href={"/auth"}>
            <button className="px-5 py-2 rounded text-white bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] shadow-2xl shadow-[#7A9598]">
              Đăng nhập
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
