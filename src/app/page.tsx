import SectionAbout from "~/components/home/SectionAbout";
import SectionBanner from "~/components/home/SectionBanner";
import SectionContact from "~/components/home/SectionContact";
import SectionPartners from "~/components/home/SectionPartners";
import SectionProduct from "~/components/home/SectionProduct";
import SectionServices from "~/components/home/SectionServices";
import SectionSolution from "~/components/home/SectionSolution";
import MainLayout from "~/components/main-layout";
import { dataProduct } from "~/services/data";
export default function Home() {
  return (
    <MainLayout>
      <div className="container-section-banner">
        <SectionBanner />
      </div>
      <div className="container-section-services">
        <SectionServices />
      </div>
      <div className="container-section-solution">
        <SectionSolution />
      </div>
      <div className="container-section-product">
        <SectionProduct
          dataSlice={dataProduct}
          title="Sản phẩm phổ biến"
          subtitle="Các sản phẩm tiêu biểu của chúng tôi"
        />
      </div>
      <div className="container-section-about">
        <SectionAbout />
      </div>
      <div className="container-section-partners">
        <SectionPartners />
      </div>
      <div className="container-section-contact">
        <SectionContact />
      </div>
    </MainLayout>
  );
}
