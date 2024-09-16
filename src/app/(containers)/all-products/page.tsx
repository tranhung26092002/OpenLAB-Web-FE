import { dataSolution } from "~/services/data";
import { dataKit } from "~/services/data";
import BannerPage from "~/components/custom/BannerPage";
import SectionAllProduct from "~/components/products/all-products/SectionAllProduct";
import { IoIosSearch } from "react-icons/io";
import SectionAllCourse from "~/components/products/all-products/SectionAllCourse";
import MainLayout from "~/components/main-layout";
export default function page() {
  return (
    <MainLayout authPage={false}>
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
              <IoIosSearch className="absolute top-1/2 right-2 translate-y-[-50%] cursor-pointer" />
            </div>
          </div>
          <SectionAllProduct
            title={"giải pháp/Dịch vụ"}
            data={dataSolution}
            type="APP"
          />
          <SectionAllProduct title={"Thiết bị/Kít"} data={dataKit} type="KIT" />

          <SectionAllCourse />
        </div>
      </div>
    </MainLayout>
  );
}
