import videoAbout from "@assets/video/about.mp4";
const SectionIntrol = ()=>{
  // linear-gradient(90deg, rgba(121,41,165,1) 0%, rgba(121,41,165,1) 46%, rgba(121,41,165,1) 100%);
  return (
    <div className="px-28 py-20 flex gap-16 bg-gradient-to-r from-[#080541] from-0% via-[#090979] via-58% to-[#06044a] to-100%  ">
      <div className="w-2/3  pl-20 pr-36 text-white">
        <h1 className="text-center text-3xl font-semibold leading-10">
          CÔNG TY CỔ PHẦN CÔNG NGHỆ OpenLAB
        </h1>
        <p className="text-justify my-4 indent-8">
          Được thành lập năm 2024, OpenLAB là một Start-up với mục tiêu trở
          thành đơn vị cung cấp các dịch vụ AI/IoT giá rẻ cho chuyển đổi số giáo
          dục hàng đầu tại Việt Nam, với mong muốn xóa khoảng cách trong giáo
          dục, nâng cao chất lượng thông qua cá nhân hóa quá trình đào tạo, đào
          tạo mọi lúc mọi nơi, phục vụ đa dạng nhu cầu đào tạo của mọi người
          trên môi trường số.
        </p>
        <p className="text-justify my-4 indent-8">
          OpenLAB đã và đang xây dựng, triển khai những giải pháp/sản phẩm toàn
          diện và thiết thực nhằm nâng cao chất lượng của công tác thí nghiệm
          thực hành trong các trường Đại học, bao gồm các thiết bị thực hành
          thông minh AI/IoT, nền tảng thực hành trực tuyến, các khóa thực hành
          chuyên sâu, và trợ giảng số AI hỗ trợ thực hành trực tuyến 24/7.
        </p>
      </div>
      <div className="w-1/3 flex flex-col">
        <video
          loop
          muted
          content="video"
          controls
          autoPlay
          src={videoAbout}
          className="rounded"
        />
        <span className="text-center font-semibold text-white py-8">
          Video giới thiệu công ty
        </span>
      </div>
    </div>
  );
};

export default SectionIntrol;
