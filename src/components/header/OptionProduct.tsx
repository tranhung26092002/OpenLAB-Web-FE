import React from "react";
import Link from 'next/link'
export default function OptionProduct() {
  return (
    <div className="option-product text-base  rounded shadow-xl px-5 py-5 font-normal text-black flex xs:gap-0 gap-4 flex-col xs:px-2 xs:py-2">
      <div className="flex gap-4 xs:flex-col xs:gap-1">
        <div className="courses  rounded-sm cursor-pointer pl-2 py-0.5 flex flex-col gap-4 xs:gap-0">
          <span className=" hover:text-[#1464cc] font-semibold">
            Giải pháp/Dịch vụ
          </span>
          <div className=" flex flex-col gap-4 xs:hidden">
            <span className=" hover:text-[#1464cc]">
              Giải pháp Lab thông minh: OpenLab
            </span>
            <span className=" hover:text-[#1464cc]">
              Giải pháp Trợ giảng số AI: OpenChat
            </span>
            <span className=" hover:text-[#1464cc]">
              Trục liên thông dữ liệu: LabLink
            </span>
            <span className=" hover:text-[#1464cc]">
              Giải pháp Thực hành từ xa: E-Lab
            </span>
            <span className=" hover:text-[#1464cc]">
              Giải pháp Quản lý thiết bị số: E-Chip
            </span>
            <span className=" hover:text-[#1464cc]">
              Giải pháp thi online: E-Exam
            </span>
          </div>
        </div>
        <hr />
        <div className="courses  rounded-sm cursor-pointer px-2 py-0.5 flex flex-col gap-4">
          <span className=" hover:text-[#1464cc] font-semibold">
            Thiết bị/Kít
          </span>
          <div className=" flex flex-col gap-4 xs:hidden">
            <span className=" hover:text-[#1464cc]">
              Kít thực hành IoT mở rộng
            </span>
            <span className=" hover:text-[#1464cc]">
              Kít thực hành thông minh IoT
            </span>
            <span className=" hover:text-[#1464cc]">
              Kít thực hành lập trình nhúng C
            </span>
            <span className=" hover:text-[#1464cc]">
              Kít thực hành mạng cảm biến thông minh
            </span>
            <span className=" hover:text-[#1464cc]">
              Thiết bị điều khiển trung tâm phòng lab
            </span>
          </div>
        </div>
        <hr />
        <Link href={"/product/prices"}>
          <div className="courses cursor-pointer px-2  rounded-sm py-0.5 gap-4 flex flex-col">
            <span className=" hover:text-[#1464cc] font-semibold">
              Khoá học thực hành
            </span>
            <div className=" flex flex-col gap-4 xs:hidden">
              <span className=" hover:text-[#1464cc]">
                Thực hành hệ thống IoT
              </span>
              <span className=" hover:text-[#1464cc]">
                Thực hành mạng di động 5G
              </span>
              <span className=" hover:text-[#1464cc]">
                Thực hành ChatBot AI
              </span>
              <span className=" hover:text-[#1464cc]">
                Thực hành phân tích dữ liệu
              </span>
              <span className=" hover:text-[#1464cc]">
                Thực hành điện toán đám mây
              </span>
              <span className=" hover:text-[#1464cc]">Thực hành ROBOTICS</span>
            </div>
          </div>
        </Link>
        <hr />
        <Link href={"/product/prices"}>
          <div className="courses cursor-pointer pl-2   rounded-sm py-0.5 gap-4 flex flex-col">
            <span className="font-semibold hover:text-[#1464cc]">Báo giá</span>
            <div className=" flex flex-col gap-4 xs:hidden">
              <span className="hover:text-[#1464cc]">Giải pháp/Phần mềm</span>
              <span className="hover:text-[#1464cc]">
                Phần cứng/Kít thực hành thông minh
              </span>
              <span className="hover:text-[#1464cc]">Khoá học thực hành</span>
              <span className="hover:text-[#1464cc]">
                Báo giá tất cả sản phẩm
              </span>
            </div>
          </div>
        </Link>
        <hr />
      </div>
      <div className="bg-gradient-to-r from-blue-900 from-0% via-cyan-800 via-58% to-sky-800 to-100% flex justify-center rounded-md  xs:hidden ">
        <Link
          href={"/all-products"}
          className="w-full flex justify-center hover:bg-[#1513be] py-3 rounded-md hover:transition-colors duration-200 ease-out "
        >
          <div className="courses cursor-pointer  rounded-sm  text-white text-xl ">
            Tất cả sản phẩm
          </div>
        </Link>
      </div>

      <Link
        href={"/all-products"}
        className="w-full xs:flex pl-2 py-3 rounded-md hover:transition-colors duration-200 ease-out hidden xs:hover:text-[#1464cc]"
      >
        <div className="courses cursor-pointer  rounded-sm font-semibold">
          Tất cả sản phẩm
        </div>
      </Link>
    </div>
  );
}
