import BannerPage from "@components/custom/BannerPage";
import SectionAllProduct from "@components/product/all-product/SectionAllProduct";
import { dataProduct } from "@services/data";
import { dataSolution } from "@services/data";
import { dataKit } from "@services/data";

const AllProduct = () => {
  return (
    <div>
      <BannerPage
        header={"Tất cả sản phẩm"}
        homepage={"Trang chủ"}
        name={"Sản phẩm"}
      />
      <div className="px-24 py-16 lg:px-14 sm:px-14 xs:px-10">
        <div className=" flex justify-between">
          <span>Hiển thị 6 sản phẩm</span>
          <input
            type="search"
            name=""
            id=""
            placeholder="Tìm kiếm sản phẩm"
            className="px-4 py-2 placeholder:text-sm bg-[#eee] rounded"
          />
        </div>
        <SectionAllProduct
          title={"Các giải pháp/Dịch vụ"}
          data={dataSolution}
        />
        <SectionAllProduct title={"Các thiết bị/Kít"} data={dataKit} />
        <SectionAllProduct title={"Các khóa học thực hành"} data={dataProduct} />
      </div>
    </div>
  );
};

export default AllProduct;
