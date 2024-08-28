// import logoHeader from "@assets/logo/logo_header.png";
import { FaAngleDown } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import './Header.scss'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="body-header flex flex-col  shadow-xl sticky top-0 z-10">
      <div className="flex bg-blue-50 justify-around py-3 ">
        <div className="content-left w-[65%]  flex justify-end  items-center h-full gap-3">
          <div className="logo flex flex-col justify-center items-center w-4/12 h-[75px] ">
            <Link to={"/"} className="cursor-pointer flex flex-col">
              <span
                className="text-5xl font-semibold text-center text-[#D32F2F] text-shadow-lg"
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
            className="w-8/12  text-lg font-medium flex justify-between items-center "
            data-aos="zoom-in"
          >
            <Link to="/">
              <span className="cursor-pointer hover:text-[#1464cc] flex justify-between items-center">
                Trang chủ
              </span>
            </Link>

            <Link to="/about">
              <span className="cursor-pointer hover:text-[#1464cc]">
                Giới thiệu
              </span>
            </Link>

            <span
              data-tooltip-id="my-product"
              className="flex items-center gap-0.5 cursor-pointer title-product hover:text-[#1464cc]"
            >
              Sản phẩm <FaAngleDown className="text-xs  icon-product" />
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
                  Khóa học
                </div>
                <hr />
                <div className="courses hover:bg-[#1464cc] hover:text-white rounded-sm cursor-pointer px-2 py-0.5">
                  Thiết bị phần cứng
                </div>
                <hr />
                <Link to={"/product/prices"}>
                  <div className="courses cursor-pointer pl-2 hover:bg-[#1464cc] hover:text-white rounded-sm py-0.5">
                    Báo giá
                  </div>
                </Link>
              </div>
            </Tooltip>
            <Link to="/blog">
              <span className="cursor-pointer hover:text-[#1464cc]">Blog</span>
            </Link>

            <Link to="/contact">
              <span className="cursor-pointer hover:text-[#1464cc]">
                Liên hệ
              </span>
            </Link>
          </div>
        </div>
        <div className="content-right w-[30%]  flex items-center text-lg font-medium pl-5 justify-end gap-6">
          <div className=" flex items-center justify-end gap-6  ">
            <Link to={"/login"}>
              <button className="text-sm bg-[#1464cc] mx-auto py-2 px-6 hover:border-2 border-2 border-transparent hover:border-white text-white hover:opacity-70 rounded-md">
                Đăng nhập
              </button>
            </Link>

            <button className="text-sm py-2 px-6 rounded-md hover:border-2 border-2 border-transparent hover:border-white hover:opacity-80 text-white bg-[#6FA471]">
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
