// import logoHeader from "@assets/logo/logo_header.png";
import { FaAngleDown } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="body-header flex flex-col  shadow-xl sticky top-0 z-10">
      <div className="flex bg-blue-50 justify-around py-3 ">
        <div className="content-left w-[70%]  flex justify-end  items-center h-full gap-3">
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
            className="w-8/12  text-lg font-medium flex justify-around items-center "
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
            <Link to="/blog">
              <span className="cursor-pointer hover:text-[#1464cc] flex items-center gap-0.5"   data-tooltip-id="my-blog">
                Blog <FaAngleDown className="text-xs  icon-product" />
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
              <div className="option-blog text-base bg-white rounded py-1 px-0 font-normal text-black">
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
            <Link to="/contact">
              <span className="cursor-pointer hover:text-[#1464cc]">
                Liên hệ
              </span>
            </Link>
          </div>
        </div>
        <div className="content-right w-[25%]  flex items-center text-lg font-medium pl-5 justify-center gap-6">
          <div className=" flex items-center justify-start gap-6  ">
            <Link to={"/login"}>
              <button className="px-5 py-2 rounded text-white bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] shadow-2xl shadow-[#7A9598]">
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
