import ProductDescription from "@components/product/ProductDescription";
import Slider from "react-slick";
import { settings } from "@utils/settingSlider";
import { dataProduct } from "@services/data";

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
              <div className="my-5 mx-1 " key={index}>
                <ProductDescription
                  srcImg={item.image}
                  typeApp={"App"}
                  nameProduct={item.nameProduct}
                  description={item.description}
                />
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
