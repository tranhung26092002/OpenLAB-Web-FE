import ProductDescription from "@components/product/ProductDescription";

import { productType } from "@services/data";
type sectionAllProductProp = {
  title: string;
  data: productType[];
};

const SectionAllProduct = ({ title, data }: sectionAllProductProp) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-7 py-10 xs:py-6 flex-col ">
      <div className="text-3xl font-semibold xs:text-2xl">{title}</div>
      <div className="flex flex-wrap justify-center items-center py-10 px-10 xs:px-0 sm:px-0 sm:py-0 xs:py-0">
        {data.map((item, index) => {
          return (
            <div data-aos="fade-up" key={index} className="w-[30%] sm:w-[48%] xs:w-[95%] xs:mb-4 mb-6">
              <ProductDescription
                id={index}
                srcImg={item.image}
                typeApp={"App"}
                nameProduct={item.nameProduct}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionAllProduct;
