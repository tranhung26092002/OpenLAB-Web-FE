import MainLayout from "~/components/main-layout";

//test
import {
  LazySectionAbout,
  LazySectionSolution,
  LazySectionProduct,
  LazySectionPartners,
  LazySectionContact,
  LazySectionBanner,LazySectionServices
} from "~/configs/LazySection";
//valid

export default function Home() {
  return (
    <div className="w-screen min-h-screen max-w-full ">
      <MainLayout authPage={false}>
        <div className="container-section-banner">
          <LazySectionBanner />
        </div>

        <div className="container-section-services">
          <LazySectionServices />
        </div>
        <div className="container-section-solution">
          <LazySectionSolution isButton={true} />
        </div>
        <div className="container-section-product">
          <LazySectionProduct />
        </div>
        <div className="container-section-about">
          <LazySectionAbout />
        </div>
        <div className="container-section-partners">
          <LazySectionPartners />
        </div>
        <div className="container-section-contact">
          <LazySectionContact />
        </div>
      </MainLayout>
    </div>
  );
}
