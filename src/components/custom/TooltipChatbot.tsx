import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import aiService from "~/assets/image/service-image/Chatbot_service.png";
import Image from "next/image";
export default function TooltipChatbot() {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="">
          <div className="flex justify-center items-center gap-2 cursor-pointer ">
            <Image
              src={aiService}
              alt={"ai-chat"}
              className="w-14 h-14 object-contain "
            />
          </div>
        </TooltipTrigger>
        <TooltipContent className="px-0 py-0 bg-white " side="bottom">
          <div className="flex items-center gap-2 text-[13px]">
            Chat để được tư vấn về sản phẩm
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
