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
  ],
};

const SectionFeedback = () => {
  return (
    <div className="px-20 bg-white py-32">
      <div className="flex flex-col text-center">
        <span className="text-3xl font-semibold">Thông tin phản ánh</span>
        <span className="font-light mb-16">Các khách hàng, đối tác nói gì khi làm việc với chúng tôi</span>
        <div>
          <Slider {...setting}>
            {dataFeedback.map((item, index) => {
              return (
                <div className="my-3">
                  <div key={index} className="bg-[#eee] px-7 py-10 mx-4 shadow-lg rounded-md h-72 flex justify-around flex-col">
                    <LuQuote className="text-3xl text-red-300 mb-5"/>
                    <p className="text-start pr-3 mb-2">{item.feedback}</p>
                    <div className=" flex items-center gap-3">
                      <div className="rounded-full bg-[#eee] px-3 py-3">
                        <FaUser />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">{item.name}</span>
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
