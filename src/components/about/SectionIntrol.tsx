
const SectionIntrol = () => {
  return (
    <div
      className="px-28 lg:px-16 py-20 flex gap-10 sm:gap-10 bg-gradient-to-r from-[#090979] from-0% via-[#054c5c] via-[50%]  to-[#090979] to-100%   
    sm:flex-col  xs:flex-col xs:px-5 xs:py-14"
    >
      <div className="w-[58%] sm:w-full xs:w-full pr-20 text-white lg:px-0 sm:px-0 xs:px-0 xl:pr-28">
        <h1 className="text-center text-3xl font-semibold leading-10 xs:text-2xl xl:text-2xl">
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
      <div className="w-[40%] flex flex-col lg:justify-center sm:justify-center sm:items-center xs:justify-center xs:items-center sm:w-full xs:w-full">
        <video muted controls className="rounded sm:w-[70%] xs:w-[94%]">
          <source src="/videos/about.mp4" type="video/mp4" />
        </video>
        <span className="text-center font-semibold text-white py-8">
          Video giới thiệu công ty
        </span>
      </div>
    </div>
  );
};

export default SectionIntrol;
