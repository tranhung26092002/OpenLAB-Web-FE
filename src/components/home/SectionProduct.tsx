import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaSignal } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import { settings } from "@utils/settingSlider";
import { dataProduct } from "src/services/data";



const SectionProduct = () => {
  return (
    <div className="body-product py-20 px-44 flex flex-col" data-aos="fade-up">
      <div className="content-top text-center">
        <span className="text-4xl font-semibold leading-10 mb-2 block">
          Sản phẩm phổ biến
        </span>
        <p className="mt-2 font-normal text-sm mb-8 ">
          Các sản phẩm tiêu biểu của chúng tôi
        </p>
      </div>
      <div className="content-product">
        <Slider {...settings}>
          {dataProduct.map((item, index) => {
            return (
              <div className="my-5 mx-1 ">
                <div
                  key={index}
                  className=" flex flex-col relative cursor-pointer w-[310px] h-[614px] rounded-xl px-6 shadow-md  py-6 item-center hover:shadow-2xl"
                >
                  <div className="mb-5 flex justify-center">
                    <img
                      src={item.image}
                      alt="image-product-section"
                      className="w-64 h-48 object-center object-contain border-[#8AD9E4] border-2 rounded"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-3 ">
                    <div className="bg-[#081140] px-2 py-1 text-white rounded-md ">
                      App
                    </div>
                    <div className="flex items-center gap-2">
                      <FaSignal className="text-red-500" />
                      <span className="text-xs font-normal">Có sẵn</span>
                    </div>
                  </div>
                  <div className="text-center h-[200px] ">
                    <span className="text-[#081140] text-lg font-semibold ">
                      {item.nameProduct}
                    </span>
                    <p className="text-sm flex gap-[2px]">
                      <BiSolidQuoteAltLeft className="text-5xl font-semibold" />
                      <span className="mt-3"> {item.description}</span>
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-end items-center mt-4">
                    <button className="rounded-full px-4 py-2 bg-white font-medium border-2 border-black flex gap-2 items-center hover:transition-colors hover:bg-black hover:text-white transition ease-in-out delay-100 ">
                      Xem chi tiết <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="mt-8 text-center">
        Bạn muốn tìm hiểu thêm về chúng tôi, về các dự án chúng tôi đang nghiên
        cứu?{" "}
        <span className="font-semibold cursor-pointer">Tất cả sản phẩm</span>
      </div>
    </div>
  );
};

export default SectionProduct;
