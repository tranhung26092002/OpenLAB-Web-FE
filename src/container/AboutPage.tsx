import SectionActivityInsite from "@/components/about/SectionActivityInsite";
import SectionFeedback from "@/components/about/SectionFeedback";
import SectionIntrol from "@/components/about/SectionIntrol";
import SectionStatiscal from "@/components/about/SectionStatiscal";

import BannerPage from "@/components/custom/BannerPage";
import SectionAbout from "@/components/home/SectionAbout";
import SectionServices from "@/components/home/SectionServices";
import SectionSolution from "@/components/home/SectionSolution";

const AboutPage = () => {
  return (
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
  );
};

export default AboutPage;
