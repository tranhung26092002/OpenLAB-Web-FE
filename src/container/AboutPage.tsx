import SectionActivityInsite from "@components/about/SectionActivityInsite";
import SectionFeedback from "src/components/about/SectionFeedback";
import SectionIntrol from "src/components/about/SectionIntrol";
import SectionStatiscal from "src/components/about/SectionStatiscal";

import BannerPage from "src/components/custom/BannerPage";
import SectionAbout from "src/components/home/SectionAbout";
import SectionServices from "src/components/home/SectionServices";
import SectionSolution from "src/components/home/SectionSolution";

const AboutPage = () => {
  return (
    <div className="container-about-page">
      <BannerPage
        header={"Giới thiệu công ty"}
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
