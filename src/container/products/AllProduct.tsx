import BannerPage from "@components/custom/BannerPage";
import SectionAllProduct from "@components/product/all-product/SectionAllProduct";
import { dataProduct } from "@services/data";
import { dataSolution } from "@services/data";
import { dataKit } from "@services/data";
import { IoIosSearch } from "react-icons/io";
const AllProduct = () => {
  return (
    <div>
      <BannerPage
        header={"Tất Cả Sản Phẩm"}
        homepage={"Trang chủ"}
        name={"Sản phẩm"}
      />
      <div className="px-24 py-16 lg:px-14 sm:px-10 xs:px-10">
        <div className=" flex justify-between">
          <span className="xs:hidden">Hiển thị 6 sản phẩm</span>
          <div className=" relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Tìm kiếm sản phẩm"
              className="px-4 py-2 placeholder:text-sm bg-[#eee] rounded xs:w-full"
            />
            <IoIosSearch className="absolute top-1/2 right-2 translate-y-[-50%] cursor-pointer"/>
          </div>
        </div>
        <SectionAllProduct
          title={"Các giải pháp/Dịch vụ"}
          data={dataSolution}
        />
        <SectionAllProduct title={"Các thiết bị/Kít"} data={dataKit} />
        <SectionAllProduct
          title={"Các khóa học thực hành"}
          data={dataProduct}
        />
      </div>
    </div>
  );
};

export default AllProduct;
