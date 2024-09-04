const SectionStatiscal = () => {
  return (
    <div className="px-20 bg-[#eee]">
      <div
        className=" flex justify-around rounded-xl items-center py-6 px-10 "  
      >
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl font-semibold">18</span>
          <span className="font-light">Sản phẩm</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl font-semibold">9</span>
          <span className="font-light">Đối tác</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl font-semibold">1268+</span>
          <span className="font-light">Khách hàng</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl font-semibold">100%</span>
          <span className="font-light">Hài lòng</span>
        </div>
      </div>
    </div>
  );
};

export default SectionStatiscal;
