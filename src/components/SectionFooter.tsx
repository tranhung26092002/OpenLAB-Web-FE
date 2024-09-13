import Logo from "./custom/Logo";
import { MdPhone } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";
import { SiShopee } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import logoZalo from "@/assets/logo/contact/Icon_of_Zalo.svg";
const SectionFooter = () => {
  return (
    <div className="body-section-footer bg-gradient-to-r from-[#080541] from-0% via-[#090979] via-58% to-[#06044a] to-100% px-20 py-14 border-t-2 border-[#48d6e9] lg:px-10 xs:px-10">
      <div className="content-section-footer">
        <div className="flex text-white justify-around px-5 lg:px-0 sm:flex-col sm:gap-8 xs:flex-col xs:gap-6 xs:px-0">
          <div className="flex w-[62%] justify-between lg:w-[56%] sm:w-full xs:w-full xs:flex-col xs:gap-6">
            <div className="w-[49%] flex flex-col justify-between lg:w-[56%] lg:pr-2 xs:w-full">
              <div>
                <Logo color="white" />
                <div className="flex flex-col gap-8">
                  <p className=" mt-3 lg:text-sm text-base font-normal text-white flex flex-col">
                    <span className="uppercase font-semibold xs:text-sm xs:mb-3">
                      Công ty cổ phần công nghệ OpenLab
                    </span>
                    <span className="text-sm text-justify">
                      Đơn vị phát triển những giải pháp toàn diện nhằm nâng cao
                      chất lượng của công tác thí nghiệm thực hành trong các
                      trường Đại học
                    </span>
                  </p>
                </div>
              </div>

              <span className="flex items-center gap-1 text-center text-sm font-normal text-white sm:hidden xs:hidden">
                <LuCopyright />
                <span className="text-sm font-normal text-white">
                  2024 Bản quyền thuộc về
                </span>
                <span className=" text-base font-semibold text-white">
                  Open LAB
                </span>
              </span>
            </div>
            <div className="w-[48%]  flex flex-col gap-3  text-base font-normal text-white lg:w-[40%] xs:w-full">
              <span className="text-lg font-semibold text-white mb-2 lg:text-sm xs:mb-0">
                ĐỊA CHỈ
              </span>
              <span className="flex gap-1 cursor-pointer hover:text-white items-center lg:text-sm">
                <MdPhone className="text-lg lg:text-sm" />
                (+84) 86 574 6698
              </span>

              <span className="flex gap-1 cursor-pointer hover:text-white items-center lg:text-sm">
                <GrMail className="text-lg lg:text-sm" />
                openlab.user@gmail.com
              </span>
              <span className="flex gap-1 cursor-pointer hover:text-white items-center lg:text-sm">
                <IoLocation className="text-lg lg:text-sm" />
                68B-6 Ao Sen, Hà Đông, HN
              </span>
              <div className="flex mt-7 lg:hidden xs:hidden">
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
          </div>
          <div className="flex w-[38%] justify-between lg:w-[42%] sm:w-full xs:w-full  xs:flex-col xs:justify-between xs:gap-6">
            <div className="w-[24%]  flex flex-col text-base font-normal text-white gap-3 lg:text-sm xs:w-full xs:flex-col">
              <span className="text-lg font-semibold text-white mb-2 lg:text-sm xs:mb-0">
                Khám phá
              </span>
              <div className="xs:flex-row w-full gap-2 flex flex-col">
                <div className="flex flex-col xs:w-1/2 gap-2 w-full">
                  <span className="cursor-pointer hover:text-white">
                    Giới thiệu
                  </span>
                  <span className="cursor-pointer hover:text-white">Blog</span>
                  <span className="cursor-pointer hover:text-white">
                    Hỗ trợ
                  </span>
                </div>
                <div className="flex flex-col xs:w-1/2 gap-2 w-full">
                  <span className="cursor-pointer hover:text-white">
                    Liên hệ
                  </span>
                  <span className="cursor-pointer hover:text-white">
                    Báo giá
                  </span>
                  <span className="cursor-pointer hover:text-white">
                    Khóa học
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[73%] flex flex-col justify-between lg:text-sm text-base font-medium text-white xs:w-full xs:gap-6 ">
              <div className="gap-3 flex flex-col">
                <span className="text-lg font-semibold text-white mb-2 lg:text-sm xs:mb-0">
                  Dịch vụ
                </span>
                <span className="cursor-pointer hover:text-white font-normal flex gap-1">
                  Nền tảng thực hành số
                </span>
                <span className="cursor-pointer hover:text-white font-normal flex gap-1">
                  Phần mềm CĐS Giáo dục
                </span>
                <span className="cursor-pointer hover:text-white font-normal flex gap-1">
                  Trợ giảng số AI
                </span>
                <span className="cursor-pointer hover:text-white font-normal flex gap-1">
                  Thiết bị thực hành thông minh
                </span>
                <span className="cursor-pointer hover:text-white font-normal flex gap-1">
                  Khóa học thực hành trực tuyến
                </span>
              </div>
              <div className="flex justify-end items-center text-4xl rounded sm:hidden gap-7 lg:pr-8 lg:mt-6 xs:px-8 xs xs:justify-around">
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

          <div className=" flex justify-between lg:hidden xl:hidden 2xl:hidden xs:justify-center">
            <span className="flex items-center gap-1 text-center text-sm font-normal text-white ">
              <LuCopyright />
              <span className="text-sm font-normal text-white">
                2024 Bản quyền thuộc về
              </span>
              <span className=" text-base font-semibold text-white">
                Open LAB
              </span>
            </span>
            <div className="flex justify-end items-center text-4xl rounded  gap-7 lg:pr-8 xs:hidden ">
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
