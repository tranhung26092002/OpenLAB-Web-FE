import SectionBenefitProduct from "@components/product/detail-product/SectionBenefitProduct";
import {dataBenefitProducts} from '@services/data'
const IntroductionProduct = () => {
  return (
    <div>
      <div>
        <SectionBenefitProduct
          data={dataBenefitProducts}
          title="Lợi ích mang lại"
          description="Ứng dụng được cài đặt trên smartphone tích hợp đầy đủ các tính năng cần thiết cho việc học tập, giảng dạy, công tác"
        />
      </div>
    </div>
  );
};

export default IntroductionProduct;
