import BannerPage from "src/components/custom/BannerPage";
import {
  dataCoursePrices,
  dataDevicesPrices,
  dataSolutionPrices,
} from "src/services/data";

const PricesPage = () => {
  return (
    <div>
      <div>
        <BannerPage
          header={"Báo giá"}
          homepage={"Trang chủ"}
          name={"Báo giá Hệ thống Đại học số"}
        />
      </div>
      <div className="px-28 flex flex-col justify-center  items-center py-24">
        <h1 className="text-4xl font-semibold text-center">Bảng báo giá</h1>
        <div className="bg-[#eee] rounded-lg w-[272px] flex justify-center items-center py-2 mt-16 ">
          <input
            type="button"
            value="On Premise"
            className="py-3 px-4 cursor-pointer focus:bg-white rounded-lg"
          />
          <input
            type="button"
            value="Cloud Based"
            className="py-3 px-4 cursor-pointer focus:bg-white rounded-lg"
          />
        </div>
        <div className="flex justify-end mt-16 w-full pr-28 gap-10">
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium">Giá thuê/năm</span>
            <button className="py-3 px-20 bg-[#f14D5D] rounded-md text-white">
              Liên hệ
            </button>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium">Tùy chỉnh</span>
            <button className="py-3 px-20 bg-[#f14D5D] rounded-md text-white">
              Liên hệ
            </button>
          </div>
        </div>
        <div className="w-full">
          <ul className="px-36  flex flex-col  justify-between">
            <li className="bg-red-50 py-3 ">
              <div className=" flex flex-col  items-center">
                <span className="text-lg font-semibold">
                  Giải pháp/Phần mềm
                </span>
                <span className="font-light">Chi phí thiết lập hệ thống </span>
              </div>
            </li>
            {dataSolutionPrices.map((item, index) => {
              return (
                <li
                  key={index}
                  className="py-3 border-b-2 border-blue-200 w-full pr-12"
                >
                  <div className="flex gap-48 justify-between  w-full">
                    <span className="w-[356px]">{item.solution}</span>
                    <div className=" flex items-center gap-44">
                      <span>{item.price}</span>
                      <span>Liên hệ</span>
                    </div>
                  </div>
                </li>
              );
            })}
            <li className="bg-red-50 py-3 text-lg font-semibold text-center">
              <span>Phần cứng/Kít thực hành thông minh</span>
            </li>
            {dataDevicesPrices.map((item, index) => {
              return (
                <li
                  key={index}
                  className="py-3 border-b-2 border-blue-200 w-full pr-12"
                >
                  <div className="flex gap-48 justify-between  w-full">
                    <span className="w-[356px]">{item.solution}</span>
                    <div className=" flex items-center gap-44">
                      <span>{item.price}</span>
                      <span>Liên hệ</span>
                    </div>
                  </div>
                </li>
              );
            })}
            <li className="bg-red-50 py-3 text-lg font-semibold  text-center">
              <span>Khoá học thực hành</span>
            </li>
            {dataCoursePrices.map((item, index) => {
              return (
                <li
                  key={index}
                  className="py-3 border-b-2 border-blue-200 w-full pr-12 "
                >
                  <div className="flex gap-48 justify-between  w-full">
                    <span>{item.solution}</span>
                    <div className=" flex items-center gap-44">
                      <span>{item.price}</span>
                      <span>Liên hệ</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricesPage;
