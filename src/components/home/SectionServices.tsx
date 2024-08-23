import Slider from "react-slick";
import { dataServices } from "src/services/data";
import { settings } from "@utils/settingSlider";

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
    <div className="body-service py-20 bg-[#f4f7fc] px-24  ">
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
                <div className="my-5 mx-1">
                  <div
                    key={index}
                    className=" flex flex-col relative justify-start gap-4 items-center rounded-xl  w-[270px] h-[250px] pt-9 shadow-xl cursor-pointer hover:scale-105"
                  >
                    <div className="w-[50px] h-[50px]">
                      <img
                        src={item.image}
                        alt="image-service"
                        className="object-contain rounded object-center"
                      />
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
