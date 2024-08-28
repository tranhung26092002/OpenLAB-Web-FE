import Slider from "react-slick";
import { settings } from "@utils/settingSlider";
import { dataPartners } from "src/services/data";
const setting = {
  ...settings,
  dots: false,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const SectionPartners = () => {
  return (
    <div
      className="body-section-partners px-44 pb-10 pt-12 "
      data-aos="fade-up"
    >
      <div className="content-section-partners flex flex-col text-center">
        <span className="text-3xl font-semibold">Đối tác</span>
        <p className="mb-16">Các đơn vị đang hợp tác cùng chúng tôi</p>

        <div className="shadow-lg rounded-lg">
          <Slider {...setting}>
            {dataPartners.map((item, index) => {
              return (
                <div className="my-4" key={index}>
                  <div >
                    <div className="flex justify-center items-center">
                      <img
                        src={item.image}
                        alt="partners-image"
                        className="object-contain object-center w-28 h-28 border-2 border-[#8AD9E4] rounded-lg px-3 py-3 hover:scale-105 cursor-pointer"
                      />
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

export default SectionPartners;
