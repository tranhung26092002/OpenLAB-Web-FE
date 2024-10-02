
import SectionStatiscal from "~/components/about/SectionStatiscal";
import MainLayout from "~/components/main-layout";
import {
  LazySectionAbout,
  LazySectionSolution,
  LazySectionServices, LazySectionFeedback,LazySectionIntrol,LazySectionActivityInsite,LazyBannerPage
} from "~/utils/LazySection";


const AboutPage = () => {
  return (
    <MainLayout >
      <div className="container-about-page">
        <LazyBannerPage
          header={"Giới Thiệu Công Ty"}
          homepage={"Trang chủ"}
          name={"Giới thiệu"}
        />
        <SectionStatiscal />
        <LazySectionIntrol />
        <LazySectionServices />
        <LazySectionSolution />
        <LazySectionActivityInsite />
        <LazySectionAbout />
        <LazySectionFeedback />
      </div>
    </MainLayout>
  );
};

export default AboutPage;
