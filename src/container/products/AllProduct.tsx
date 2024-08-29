import BannerPage from "@components/custom/BannerPage";
import ProductDescription from "@components/product/ProductDescription";
import { dataProduct } from "@services/data";
const AllProduct = () => {
  return (
    <div>
      <BannerPage
        header={"Tất cả sản phẩm"}
        homepage={"Trang chủ"}
        name={"Sản phẩm"}
      />
      <div className="px-24 py-16 ">
        <div className=" flex justify-between">
          <span>Hiển thị {dataProduct.length} sản phẩm</span>
          <input
            type="search"
            name=""
            id=""
            placeholder="Tìm kiếm sản phẩm"
            className="px-4 py-2 placeholder:text-sm bg-[#eee] rounded"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-7 py-10">
          {dataProduct.map((item, index) => {
            return (
              <div data-aos="fade-up">
                <ProductDescription
                  id={index}
                  key={index}
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
    </div>
  );
};

export default AllProduct;
