import Logo from "./custom/Logo";
import { MdPhone } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";
import { SiShopee } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import logoZalo from "@assets/logo/contact/Icon_of_Zalo.svg";
const SectionFooter = () => {
  return (
    <div className="body-section-footer bg-gradient-to-r from-[#080541] from-0% via-[#090979] via-58% to-[#06044a] to-100% px-20 py-14 border-t-2 border-[#48d6e9]">
      <div className="content-section-footer">
        <div className="flex text-white justify-around px-5 gap-8">
          <div className="w-[30%] pr-5 flex flex-col justify-between">
            <div>
              <Logo className="text-5xl" />
              <div className="flex flex-col gap-8">
                <p className=" mt-3 text-base font-normal text-white flex flex-col">
                  <span className="uppercase font-semibold">
                    {" "}
                    Công ty cổ phần công nghệ OpenLab{" "}
                  </span>
                  Đơn vị cung cấp nền tảng thực hành số, thiết bị thực hành
                  thông minh, khóa học thực hành chuyên sâu, dịch vụ trợ giảng
                  số AI hỗ trợ thực hành 24/7 và phát triển các giải pháp phần
                  mềm phục vụ chuyển đổi số giáo dục theo yêu cầu.
                </p>
              </div>
            </div>

            <span className="flex items-center gap-1 text-center text-sm font-normal text-white">
              <LuCopyright />
              <span className="text-sm font-normal text-white">
                2024 Bản quyền thuộc về
              </span>
              <span className=" text-base font-semibold text-white">
                Open LAB
              </span>
            </span>
          </div>
          <div className="w-[28%]  flex flex-col gap-3  text-base font-normal text-white">
            <span className="text-lg font-semibold text-white mb-2">
              ĐỊA CHỈ
            </span>
            <span className="flex gap-1 cursor-pointer hover:text-white items-center">
              <MdPhone className="text-lg" />
              (+84) 86 574 6698
            </span>

            <span className="flex gap-1 cursor-pointer hover:text-white items-center">
              <GrMail className="text-lg" />
              openlab.user@gmail.com
            </span>
            <span className="flex gap-1 cursor-pointer hover:text-white items-center">
              <IoLocation className="text-lg" />
              68B-6 Ao Sen, Hà Đông, HN
            </span>
            <div className="flex mt-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3725.28029825021!2d105.78630017525153!3d20.98139838940363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zNjhhLzYgUGjhu5EgQW8gU2VuLCBN4buZIExhbywgSMOgIMSQw7RuZywgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1724994267750!5m2!1svi!2s"
                width="300"
                height="160"
                style={{ borderWidth: "none", borderRadius: "6px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="w-[10%]  flex flex-col text-base font-normal text-white gap-3">
            <span className="text-lg font-semibold text-white mb-2">
              Khám phá
            </span>
            <span className="cursor-pointer hover:text-white">Giới thiệu</span>
            <span className="cursor-pointer hover:text-white">Blog</span>
            <span className="cursor-pointer hover:text-white">Hỗ trợ</span>
            <span className="cursor-pointer hover:text-white">Liên hệ</span>
            <span className="cursor-pointer hover:text-white">Báo giá</span>
            <span className="cursor-pointer hover:text-white">Khóa học</span>
          </div>
          <div className="w-[25%] flex flex-col justify-between  text-base font-medium text-white ">
            <div className="gap-3 flex flex-col">
              <span className="text-lg font-semibold text-white mb-2">
                Sản phẩm
              </span>
              <span className="cursor-pointer hover:text-white font-normal flex gap-1">
                Nền tảng thực hành số:
                <span className="font-semibold">OpenLab</span>
              </span>
              <span className="cursor-pointer hover:text-white font-normal flex gap-1">
                Trợ giảng số AI:
                <span className="font-semibold">OpenChat</span>
              </span>

              <span className="cursor-pointer hover:text-white font-normal flex gap-1">
                Quản lý thiết bị số:
                <span className="font-semibold">E-Chip</span>
              </span>
              <span className="cursor-pointer hover:text-white font-normal flex gap-1">
                Kit thực hành thông minh:
                <span className="font-semibold">OpenKit</span>
              </span>

              <span className="cursor-pointer hover:text-white font-normal flex gap-1">
                Trục liên thông dữ liệu:
                <span className="font-semibold">LabLink</span>
              </span>

              <span className="cursor-pointer hover:text-white font-normal">
                Tất cả sản phẩm
              </span>
            
            </div>
            <div className="flex justify-end items-center text-4xl rounded  gap-7">
                <div className="bg-white rounded-md">
                  <FaFacebookSquare className="text-[#1877f2]" />
                </div>
                <div className="bg-white rounded-md">
                  <AiFillTikTok className="text-black" />
                </div>
                <div>
                  <img
                    src={logoZalo}
                    alt="logo-Zalo"
                    className="w-9 h-9 object-contain object-center"
                  />
                </div>
                <div className="bg-white rounded-md px-1 py-1 ">
                  <SiShopee className="text-[#fd5621] text-3xl" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFooter;
