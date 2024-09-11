import SectionBanner from "@components/home/SectionBanner";
import SectionServices from "@components/home/SectionServices";
import SectionSolution from "@components/home/SectionSolution";
import SectionProduct from "@components/home/SectionProduct";
import SectionAbout from "@components/home/SectionAbout";
import SectionPartners from "@components/home/SectionPartners";
import SectionContact from "@components/home/SectionContact";

const HomePage = () => {
  return (
    <section className="container-homepage flex flex-col relative">
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
    </section>
  );
};

export default HomePage;
