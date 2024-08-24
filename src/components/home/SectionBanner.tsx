import { FaArrowRight } from "react-icons/fa6";
import "./SectionBanner.scss";

const SectionBanner = () => {
  return (
    <div className="body flex justify-center flex-col items-center bg-gradient-to-r from-blue-900 from-0% via-cyan-800 via-58% to-sky-800 to-100% w-full h-[550px] bg-cover bg-no-repeat bg-center py-[70px]">
      <div className="flex flex-col justify-center">
        {/* <span
          data-aos="zoom-out"
          className="text-7xl font-semibold text-center text-[#e3334c] text-shadow-lg mb-[62px]"
          style={{
            textShadow:
              "rgb(220, 170, 25) 6px 0px 0px, rgba(0, 0, 0, 0.15) 16px 2px 10px, rgba(0, 0, 0, 0) 16px 1px 2px, rgba(115, 86, 86, 0) 22px 18px 30px",
          }}
        >
          OPEN LAB
        </span> */}

        <div className="flex flex-col gap-3">
          <span
            data-aos="fade-right"
            className="text-4xl font-semibold text-center text-white"
          >
            Nền tảng thực hành số và
          </span>
          <span
            data-aos="fade-right" 
            className="text-4xl font-semibold text-center text-white"
          >
            Dịch dụ AI/IoT giá rẻ cho chuyển đổi số giáo dục
          </span>
        </div>

        <p  data-aos="fade-left" data-aos-delay="400"className="text-lg font-semibold text-center text-white mt-4 mb-14">
          Chúng tôi nỗ lực làm việc để hiểu khách hàng và mang đến các dịch vụ
          chất lượng, có giá trị thực tiễn cao!
        </p>
      </div>
      <div className="btn-container flex items-center"
        data-aos="zoom-in" 
      
      >
        <button className="btn-content px-7 py-3 bg-[#AA3232] rounded-md flex gap-2 items-center text-white font-medium hover:bg-[#1513be] ">
          <span>Các giải pháp tiên phong</span>
          <div className="icon-btn-services">
            <FaArrowRight className=" text-lg text-white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SectionBanner;
