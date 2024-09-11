const SectionStatiscal = () => {
  return (
    <div className="px-20 bg-[#eee] sm:px-14 xs:px-5">
      <div
        className=" flex justify-around rounded-xl items-center py-6 px-10 xs:px-0 "  
      >
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl font-semibold sm:text-4xl xs:text-2xl">18</span>
          <span className="">Sản phẩm</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl font-semibold sm:text-4xl xs:text-2xl">9</span>
          <span className="">Đối tác</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl font-semibold sm:text-4xl xs:text-2xl">1268+</span>
          <span className="">Khách hàng</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl font-semibold sm:text-4xl xs:text-2xl">100%</span>
          <span className="">Hài lòng</span>
        </div>
      </div>
    </div>
  );
};

export default SectionStatiscal;
