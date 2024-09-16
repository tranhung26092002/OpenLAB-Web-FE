import SectionActivityInsite from "~/components/about/SectionActivityInsite";
import SectionFeedback from "~/components/about/SectionFeedback";
import SectionIntrol from "~/components/about/SectionIntrol";
import SectionStatiscal from "~/components/about/SectionStatiscal";

import BannerPage from "~/components/custom/BannerPage";
import SectionAbout from "~/components/home/SectionAbout";
import SectionServices from "~/components/home/SectionServices";
import SectionSolution from "~/components/home/SectionSolution";
import MainLayout from "~/components/main-layout";

const AboutPage = () => {
  return (
    <MainLayout authPage={false}>
      <div className="container-about-page">
        <BannerPage
          header={"Giới Thiệu Công Ty"}
          homepage={"Trang chủ"}
          name={"Giới thiệu"}
        />
        <SectionStatiscal />
        <SectionIntrol />

        <SectionServices />
        <SectionSolution />

        <SectionActivityInsite />
        <SectionAbout />

        <SectionFeedback />
      </div>
    </MainLayout>
  );
};

export default AboutPage;
