import SectionFeedback from "src/components/about/SectionFeedback";
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

      <div className="px-24 pt-24 ">
        <h1 className="text-center text-3xl font-semibold leading-10">
          CÔNG TY CỔ PHẦN CÔNG NGHỆ OpenLAB
        </h1>
        <p className="text-justify my-4">
          Được thành lập năm 2024, OpenLAB là một Start-up với mục tiêu trở
          thành đơn vị cung cấp các dịch vụ AI/IoT giá rẻ cho chuyển đổi số giáo
          dục hàng đầu tại Việt Nam, với mong muốn xóa khoảng cách trong giáo
          dục, nâng cao chất lượng thông qua cá nhân hóa quá trình đào tạo, đào
          tạo mọi lúc mọi nơi, phục vụ đa dạng nhu cầu đào tạo của mọi người
          trên môi trường số.
        </p>
        <p className="text-justify my-4">
          OpenLAB đã và đang xây dựng, triển khai những giải pháp/sản phẩm toàn
          diện và thiết thực nhằm nâng cao chất lượng của công tác thí nghiệm
          thực hành trong các trường Đại học, bao gồm các thiết bị thực hành
          thông minh AI/IoT, nền tảng thực hành trực tuyến, các khóa thực hành
          chuyên sâu, và trợ giảng số AI hỗ trợ thực hành trực tuyến 24/7.
        </p>
      </div>

      <SectionServices />
      <SectionSolution />
      <SectionAbout />
      <SectionStatiscal />
      <SectionFeedback />
    </div>
  );
};

export default AboutPage;
