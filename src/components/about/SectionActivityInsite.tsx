import Slider from "react-slick";
import { settings } from "@utils/settingSlider";
import { dataActivityInsite } from "src/services/data";

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

const SectionActivityInsite = () => {
  return (
    <div className="px-24 py-16 flex flex-col">
      <div className="text-center flex flex-col">
        <span className="font-semibold  text-3xl">
          Hình ảnh thực tế tại công ty
        </span>
        <span className="font-light mb-16">
          Một số hình ảnh thực tế về OpenLab
        </span>
      </div>
      <Slider {...setting}>
        {dataActivityInsite.map((item, index) => {
          return (
            <div className="my-3" key={index}>
              <div className="bg-white px-4 py-4 mx-4 shadow-lg rounded-md  flex justify-around flex-co items-center w-[500px]">
                <img
                  src={item.image}
                  alt="image-activity-insite"
                  className="object-fill object-center w-full h-80 rounded"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SectionActivityInsite;
