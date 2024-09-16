import MainLayout from "~/components/main-layout";
import SectionBanner from "~/components/home/SectionBanner";
import SectionAbout from "~/components/home/SectionAbout";
import SectionContact from "~/components/home/SectionContact";
import SectionPartners from "~/components/home/SectionPartners";
import SectionProduct from "~/components/home/SectionProduct";
import SectionServices from "~/components/home/SectionServices";
import SectionSolution from "~/components/home/SectionSolution";
export default function Home() {
  return (
    <div className="w-screen min-h-screen max-w-full ">
      <MainLayout authPage={false}>
        <div className="container-section-banner">
          <SectionBanner />
        </div>

        <div className="container-section-services">
          <SectionServices />
        </div>
        <div className="container-section-solution">
          <SectionSolution isButton={true} />
        </div>
        <div className="container-section-product">
          <SectionProduct />
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
    </div>
  );
}
