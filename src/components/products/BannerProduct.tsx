import { LuQuote } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";

type BannerProductProps = {
  nameProduct: string;
  description: string;
};
const BannerProduct = ({ nameProduct, description }: BannerProductProps) => {
  return (
    <div className="flex px-20 py-16 bg-gradient-to-r from-blue-900 from-0% via-cyan-800 via-58% to-sky-800 to-100%">
      <div className="w-[60%] flex flex-col">
        <div className=" flex gap-1">
          <span className="text-[#D32F2F] font-semibold">Trang chủ /</span>
          <span className="text-[#D32F2F] font-semibold">Sản phẩm /</span>
          <span className="text-white font-semibold">{nameProduct}</span>
        </div>
        <span className="text-white text-4xl font-semibold py-5">
          {nameProduct}
        </span>
        <div className="flex  items-start gap-2">
          <LuQuote className="rotate-180 text-white text-4xl font-semibold " />
          <p className="py-2 text-white">{description}</p>
        </div>
        <div className="flex gap-10 py-2">
          <div className="flex gap-1 items-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <div className="flex gap-2 items-center text-white">
            <FaUniversity className="mt-[1px]" />
            <span className=" font-semibold text-sm text-end">
              6 đơn vị đã sử dụng
            </span>
          </div>
        </div>
        <div className="py-6 flex gap-10">
          {/* <button className="px-5 py-3 text-white bg-red-500 rounded hover:bg-[#120f2d] hover:transition-colors hover:duration-300 hover:ease-in font-semibold">
            Đăng Kí Ngay
          </button> */}
          <AlertDialog>
            <AlertDialogTrigger className="px-5 py-3 text-white bg-red-500 rounded hover:bg-[#120f2d] hover:transition-colors hover:duration-300 hover:ease-in font-semibold">
              Đăng Kí Ngay
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white rounded">
              <AlertDialogHeader>
                <AlertDialogTitle className="justify-between items-center  flex">
                  <span>Bạn muốn đăng kí khóa học? </span>
                  <AlertDialogCancel className="border-none outline-none shadow-none">
                    <Cross2Icon />
                  </AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <span>Hoàn thành các thông tin để tiếp tục</span>
                  
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex-row-reverse justify-between items-center ">
                <AlertDialogCancel className="w-[40%]">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="w-[40%]">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <button className="px-5 py-3  bg-[#fff] rounded hover:bg-[#120f2d] hover:transition-colors hover:duration-300 hover:ease-in font-semibold hover:text-white">
            Nhận Tài Liệu Giới Thiệu
          </button>
        </div>
      </div>
      <div className="w-[38%] px-3 py-3">
        <iframe
          className="w-full h-full rounded-md"
          src="https://www.youtube.com/embed/xzu3QXwo1BU?si=A36ch_COhP-rivIR"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default BannerProduct;
