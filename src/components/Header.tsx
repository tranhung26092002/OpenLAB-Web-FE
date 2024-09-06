// import logoHeader from "@assets/logo/logo_header.png";
import { FaAngleDown } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
 import "./Header.scss";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="body-header flex flex-col  shadow-xl sticky top-0 z-10">
      <div className="flex bg-blue-50 justify-around py-3 sm:py-0 xs:py-0">
        <div
          className="content-left w-[70%]  flex justify-end  items-center h-full gap-3
        sm:w-full sm:justify-between relative  sm:px-14 xs:w-full xs:justify-between  xs:px-5
        "
        >
          <div
            className="logo flex flex-col justify-center items-center w-4/12 h-[75px]
          sm:w-[35%] sm:items-start xs:w-2/3 xs:items-start"
          >
            <Link to={"/"} className="cursor-pointer flex flex-col">
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
            <FiMenu className="text-3xl text-white" />
          </div>
          <div
            className={`w-8/12 sm:flex-col xs:flex-col  xs:inline-flex flex text-lg font-medium justify-around items-center sm:justify-start sm:items-start xs:justify-start xs:items-start
              sm:bg-[#080544] xs:bg-[#080544] sm:text-white xs:text-white  sm:absolute xs:absolute sm:duration-200 xs:duration-200 sm:h-screen 
              xs:h-screen xs:right-0 xs:top-0 sm:right-0 sm:top-0 sm:transition-all xs:transition-all sm:ease-in xs:ease-in  ${
                isOpenMenu
                  ? "sm:w-1/3 sm:z-20 xs:w-1/3 xs:z-20 "
                  : "sm:w-0 sm:opacity-100 sm:z-0 xs:w-0 xs:opacity-100 xs:z-0 "
              }`}
            //  data-aos="zoom-out"
          >
            <div
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className=" px-4 pt-2 cursor-pointer hidden sm:flex sm:justify-end  xs:flex xs:justify-end w-full"
            >
              <HiXMark />
            </div>
            <Link to="/" className=" sm:w-full xs:w-full ">
              <span
                className="cursor-pointer hover:text-[#1464cc]  block  
              sm:px-3 sm:py-1 sm:border-b-[1px] xs:px-3 xs:py-1 xs:border-b-[1px] "
              >
                Trang chủ
              </span>
            </Link>

            <Link to="/about" className=" sm:w-full xs:w-full">
              <span
                className="cursor-pointer hover:text-[#1464cc] flex 
              sm:px-3 sm:py-1 sm:border-b-[1px] xs:px-3 xs:py-1 xs:border-b-[1px]"
              >
                Giới thiệu
              </span>
            </Link>

            <span
              data-tooltip-id="my-product"
              className="flex items-center gap-0.5 cursor-pointer title-product hover:text-[#1464cc] 
              sm:pl-3  sm:border-b-[1px] sm:justify-between xs:pl-3  xs:border-b-[1px] xs:justify-between sm:w-full xs:w-full"
            >
              <span className=" sm:py-1">Sản phẩm</span>
              <div className="sm:px-4 sm:py-2 sm:border-l-[1px] xs:px-3 xs:py-2 xs:border-l-[1px] ">
                <FaAngleDown className="text-xs  icon-product " />
              </div>
            </span>

            <Tooltip
              id="my-product"
              clickable
              variant="light"
              place="bottom-end"
              delayHide={100}
              events={["click"]}
            >
              <div className="option-product text-base bg-white rounded py-1 px-0 font-normal text-black">
                <div className="courses hover:bg-[#1464cc] hover:text-white rounded-sm cursor-pointer pl-2 py-0.5">
                  Giải pháp/Dịch vụ
                </div>
                <hr />
                <div className="courses hover:bg-[#1464cc] hover:text-white rounded-sm cursor-pointer px-2 py-0.5">
                  Thiết bị/Kít
                </div>
                <hr />
                <Link to={"/product/prices"}>
                  <div className="courses cursor-pointer px-2 hover:bg-[#1464cc] hover:text-white rounded-sm py-0.5">
                    Khoá học thực hành
                  </div>
                </Link>
                <hr />
                <Link to={"/product/prices"}>
                  <div className="courses cursor-pointer pl-2 hover:bg-[#1464cc] hover:text-white rounded-sm py-0.5">
                    Báo giá
                  </div>
                </Link>
                <hr />
                <Link to={"/product"}>
                  <div className="courses cursor-pointer pl-2 hover:bg-[#1464cc] hover:text-white rounded-sm py-0.5">
                    Tất cả sản phẩm
                  </div>
                </Link>
              </div>
            </Tooltip>
            <Link to="/blog" className=" sm:w-full xs:w-full">
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
            <Tooltip
       
              id="my-blog"
              clickable
              variant="light"
              place="bottom-end"
              delayHide={100}
              events={["click"]}
            >
              <div className="option-blog text-base  py-1 px-0 font-normal text-black opacity-100">
                <div className="courses hover:bg-[#1464cc] hover:text-white rounded-sm cursor-pointer pl-2 py-0.5">
                  Công nghệ IoT
                </div>
                <hr />
                <div className="courses hover:bg-[#1464cc] hover:text-white rounded-sm cursor-pointer px-2 py-0.5">
                  Công nghệ AI
                </div>
                <hr />
                <Link to={"/product/prices"}>
                  <div className="courses cursor-pointer px-2 hover:bg-[#1464cc] hover:text-white rounded-sm py-0.5">
                    Công nghệ 5G
                  </div>
                </Link>
                <hr />
                <Link to={"/product/prices"}>
                  <div className="courses cursor-pointer pl-2 hover:bg-[#1464cc] hover:text-white rounded-sm py-0.5">
                    Công nghệ Big Data
                  </div>
                </Link>
                <hr />
                <Link to={"/product"}>
                  <div className="courses cursor-pointer px-2 hover:bg-[#1464cc] hover:text-white rounded-sm py-0.5">
                    Công nghệ Blockchain
                  </div>
                </Link>
              </div>
            </Tooltip>
            <Link to="/contact" className=" sm:w-full xs:w-full ">
              <span className="cursor-pointer hover:text-[#1464cc] flex sm:pl-3 xs:pl-3">
                Liên hệ
              </span>
            </Link>
          </div>
        </div>
        <div
          className="content-right w-[25%] flex items-center text-lg font-medium pl-5 justify-center gap-6 sm:hidden xs:hidden
      "
        >
          <div className=" flex items-center justify-start gap-6  ">
            <Link to={"/login"}>
              <button
                className="px-5 py-2 rounded text-white bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] shadow-2xl shadow-[#7A9598]
            
              "
              >
                Đăng ký khoá học
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
