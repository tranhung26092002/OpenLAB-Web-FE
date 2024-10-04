"use client";
import { FaArrowRight } from "react-icons/fa6";
import imagebg from "~/assets/background/nonbg-01.png";
const SectionBanner = () => {
  return (
    <div className="body flex justify-center flex-col items-center w-full bg-gradient-to-r from-[#090979] from-0% via-[#054c5c] via-[41%]  to-[#090979] to-100% ">
      <div
        className=" flex justify-center flex-col items-center  h-[560px] xs:h-[400px] sm:h-[490px]  sm:w-full xs:w-full bg-cover xs:bg-contain bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${imagebg.src})` }}
      >
        <div className="flex flex-col xs:px-6 justify-center ">
          <div className="flex flex-col gap-3 xs:gap-0 ">
            <span
              data-aos="fade-right"
              className="text-4xl font-semibold text-center text-white sm:text-3xl xs:text-2xl  "
            >
              Nền tảng thực hành số
            </span>
            <span
              data-aos="fade-right"
              className="text-4xl font-semibold text-center text-white mt-2 sm:text-3xl xs:text-2xl  xs:mt-0 xs:px-5"
            >
              Dịch vụ AI/IoT giá rẻ cho chuyển đổi số giáo dục
            </span>
          </div>

          <p
            data-aos="fade-left"
            data-aos-delay="400"
            className="text-lg font-semibold text-center text-white mt-8 mb-10 xs:text-sm  "
          >
            Chúng tôi nỗ lực làm việc để hiểu khách hàng và mang đến các dịch vụ
            chất lượng, có giá trị thực tiễn cao!
          </p>
        </div>
        <div
          className="btn-container flex items-center mt-4"
          data-aos="zoom-in"
        >
          <button className="btn-content px-7 py-3 bg-[#AA3232] rounded-md flex gap-2 items-center text-white font-medium hover:bg-[#1513be]">
            <span className=" text-xl text-white  xs:text-lg">
              Các giải pháp tiên phong
            </span>
            <div className="icon-btn-services">
              <FaArrowRight className=" text-xl text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
