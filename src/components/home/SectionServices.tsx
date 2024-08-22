import { dataServices } from "src/services/data";

const SectionServices = () => {
  return (
    <div className="body-service py-20 bg-[#f4f7fc]">
      <div className="content-service text-center"
         data-aos="fade-up" 
      >
        <span className="text-4xl font-semibold leading-10 mb-2 block">
          Các dịch vụ chính
        </span>
        <p className="text-base font-light ">
          Các dịch vụ chính OpenLAB đang tập trung phát triển và cung cấp cho
          khách hàng
        </p>
        <div className="services flex px-24 pt-16  justify-around" >
          {dataServices.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col justify-start gap-4 items-center rounded-xl  w-[270px] h-[250px] pt-9 shadow-xl cursor-pointer hover:scale-105"
              >
                <div className="w-[50px] h-[50px]">
                  <img
                    src={item.image}
                    alt="image-service"
                    className="object-contain rounded object-center"
                  />
                </div>
                <span className="text-base font-semibold">{item.title}</span>
                <p className="text-sm px-7 font-normal">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionServices;
