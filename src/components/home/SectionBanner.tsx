import { FaArrowRight } from "react-icons/fa6";

const SectionBanner = () => {
  return (
    <div className="body flex justify-center flex-col items-center w-full bg-[#080541]">
      <div className=" flex justify-center flex-col items-center bg-banner_homepage h-[560px] w-[70%] bg-cover bg-no-repeat bg-center bg-[#1112c4]">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-3">
            <span
              data-aos="fade-right"
              className="text-4xl font-semibold text-center text-white"
            >
              Nền tảng thực hành số
            </span>
            <span
              data-aos="fade-right"
              className="text-4xl font-semibold text-center text-white mt-2"
            >
              Dịch dụ AI/IoT giá rẻ cho chuyển đổi số giáo dục
            </span>
          </div>

          <p
            data-aos="fade-left"
            data-aos-delay="400"
            className="text-lg font-semibold text-center text-white mt-8 mb-10"
          >
            Chúng tôi nỗ lực làm việc để hiểu khách hàng và mang đến các dịch vụ
            chất lượng, có giá trị thực tiễn cao!
          </p>
        </div>
        <div
          className="btn-container flex items-center mt-4"
          data-aos="zoom-in"
        >
          <button className="btn-content px-7 py-3 bg-[#AA3232] rounded-md flex gap-2 items-center text-white font-medium hover:bg-[#1513be] ">
            <span className=" text-xl text-white">
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
