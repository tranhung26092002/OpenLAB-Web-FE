import BannerProduct from "@/components/product/BannerProduct";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import IntroductionProduct from "./IntroductionProduct";
const DetailAProduct = {
  nameProduct: "Ứng dụng kết nối người học",
  description:
    " Mô hình đại học số thu nhỏ giúp đẩy mạnh tương tác giữa nhà trường, giảng viên và sinh viên, giúp người dùng tra cứu thời khóa biểu, điểm thi, cập nhật tin tức một cách nhanh chóng",
};
const DetailProduct = () => {
  const { slug } = useParams();
  console.log(slug);

  return (
    <div>
      <div>
        <BannerProduct
          nameProduct={DetailAProduct.nameProduct}
          description={DetailAProduct.description}
        />
      </div>
      <div>
        <Tabs className=" flex flex-col justify-center py-16 px-10 bg-[#eee]">
          <TabList className="flex justify-end">
            <Tab>Giới thiệu</Tab>
            <Tab>Chi tiết & Báo giá</Tab>
          </TabList>

          <TabPanel>
            <IntroductionProduct />
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DetailProduct;
