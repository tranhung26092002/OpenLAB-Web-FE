import Slider from "react-slick";
import { settings } from "@utils/settingSlider";
import { dataFeedback } from "src/services/data";
import { LuQuote } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
const setting = {
  ...settings,
  dots: false,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 519,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:true
      },
    },
  ],
};

const SectionFeedback = () => {
  return (
    <div className="px-20 bg-white py-32 sm:px-10 lg:px-10 xs:px-10">
      <div className="flex flex-col text-center">
        <span className="text-3xl font-semibold sm:text-2xl">Thông tin phản ánh</span>
        <span className="font-light mb-16 sm:mb-8 xs:mb-10">Các khách hàng, đối tác nói gì khi làm việc với chúng tôi</span>
        <div>
          <Slider {...setting}>
            {dataFeedback.map((item, index) => {
              return (
                <div className="my-3" key={index}>
                  <div  className="bg-[#eee] px-7 py-10 sm:py-4 xs:py-4 xs:px-3 w-[95%] mx-1 shadow-lg rounded-md h-72 xs:h-64 sm:px-4 flex justify-around flex-col">
                    <LuQuote className="text-3xl text-red-300 mb-5 sm:text-x xs:text-xl lg:text-2xl"/>
                    <p className="text-start pr-3 xs:pr-0 mb-2 xs:text-sm">{item.feedback}</p>
                    <div className=" flex items-center gap-3">
                      <div className="rounded-full bg-[#eee] px-3 py-3">
                        <FaUser />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="font-semibold sm:text:sm xs:text-sm ">{item.name}</span>
                        <span className="text-xs font-light">{item.location}</span>
                      </div>
                    </div>
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

export default SectionFeedback;
