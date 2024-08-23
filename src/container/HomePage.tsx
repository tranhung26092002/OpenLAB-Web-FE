import SectionBanner from "src/components/home/SectionBanner";
import SectionServices from "src/components/home/SectionServices";
import SectionSolution from "src/components/home/SectionSolution";
import SectionProduct from "src/components/home/SectionProduct";
import SectionAbout from "src/components/home/SectionAbout";
import SectionPartners from "src/components/home/SectionPartners";
import SectionContact from "src/components/home/SectionContact";

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
