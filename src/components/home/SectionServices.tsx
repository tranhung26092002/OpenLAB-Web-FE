import Slider from "react-slick";
import { settings } from "@utils/settingSlider";
import practiceService from "@assets/image/service-image/Practice_service.png";
import deviceProviderService from "@assets/image/service-image/KIT_provider_service.png";
import courseService from "@assets/image/service-image/Course_service.jpg";
import aiService from "@assets/image/service-image/Chatbot_service.png";
import { ReactNode } from "react";
import { FaCubes } from "react-icons/fa";
type itemServiceProps = {
  title: string;
  description: string;
  image?: string | ReactNode;
};

const dataServices: itemServiceProps[] = [
  {
    title: "Nền tảng thực hành số",
    description: "Cung cấp các dịch vụ thực hành trực truyến AI/IoT",
    image: practiceService,
  },
  {
    title: "Thiết bị thực hành thông minh",
    description: "Cung cấp các bộ KIT thực hành trực tuyến AI/IoT",
    image: deviceProviderService,
  },
  {
    title: "Khóa học thực hành trực tuyến",
    description:
      "Cung cấp các khóa học thực hành trực tuyến AI/IoT chuyên sâu, thực chiến dự án",
    image: courseService,
  },
  {
    title: "Trợ giảng số AI",
    description:
      "Cung cấp các dịch vụ Chatbot AI hỗ trợ thực hành trực tuyến 24/7",
    image: aiService,
  },
  {
    title: "Phần mềm CĐS Giáo dục",
    description:
      "Tư vấn giải pháp & phát triển phần mềm chuyển đổi số giáo dục theo yêu cầu",
    image: <FaCubes />,
  },
];

const setting = {
  ...settings,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
const SectionServices = () => {
  return (
    <div className="body-service py-20  px-16 ">
      <div className="content-service text-center">
        <span className="text-4xl font-semibold leading-10 mb-2 block">
          Các dịch vụ chính
        </span>
        <p className="text-base font-light ">
          Các dịch vụ chính OpenLAB đang tập trung phát triển và cung cấp cho
          khách hàng
        </p>
        <div data-aos="fade-up">
          <Slider {...setting}>
            {dataServices.map((item, index) => {
              return (
                <div className="my-5 mx-2 " key={index}>
                  <div className=" flex flex-col relative justify-start gap-4 items-center rounded-xl  w-[270px] h-[250px] pt-9 shadow-xl cursor-pointer hover:scale-105">
                    <div className="w-[50px] h-[50px]">
                      {typeof item.image === "string" ? (
                        <img
                          src={item.image}
                          alt="image-service"
                          className="object-contain rounded object-center"
                        />
                      ) : (
                        <FaCubes className="text-[#bc0707] text-5xl" />
                      )}
                    </div>
                    <span className="text-base font-semibold">
                      {item.title}
                    </span>
                    <p className="text-sm px-7 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SectionServices;
