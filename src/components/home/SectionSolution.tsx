import { IoCheckmarkCircle } from "react-icons/io5";
import imageSolution1 from "@assets/image/solution/solution1.jpg";
import imageSolution2 from "@assets/image/solution/solution2.jpg";
import imageSolution3 from "@assets/image/solution/solution3.jpg";
import imageSolution4 from "@assets/image/solution/solution4.jpg";
type sectionSolutionProp = {
  isButton?: boolean;
};

const SectionSolution = ({ isButton }: sectionSolutionProp) => {
  return (
    <div className="body-section-solution py-16 px-28 bg-[#f4f7fc]">
      <div className="content-section-solution text-center flex justify-between gap-8 items-center">
        <div className="content-left w-1/2 text-start " data-aos="fade-right">
          <span className="text-4xl font-medium leading-10">
            Các giải pháp tiên phong
          </span>
          <p className="mt-2 font-normal text-base mb-8 pr-9">
            Các gói giải pháp được lựa chọn riêng theo từng nhu cầu, quy mô.
            Tiêu chuẩn khẳng định vị thế tiên phong của OpenLAB
          </p>
          <ul>
            <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg">
              <IoCheckmarkCircle className="text-blue-600" />
              Giải pháp Lab thông minh:
              <span className="font-semibold">OpenLab</span>
            </li>
            <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg">
              <IoCheckmarkCircle className="text-blue-600" />
              Giải pháp Trợ giảng số AI:
              <span className="font-semibold">OpenChat</span>
            </li>
            <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg">
              <IoCheckmarkCircle className="text-blue-600" />
              Trục liên thông dữ liệu:
              <span className="font-semibold">LabLink</span>
            </li>
            <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg">
              <IoCheckmarkCircle className="text-blue-600" />
              Giải pháp Thực hành từ xa:
              <span className="font-semibold">E-Lab</span>
            </li>
            <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg">
              <IoCheckmarkCircle className="text-blue-600" />
              Giải pháp Quản lý thiết bị số:
              <span className="font-semibold">E-Chip</span>
            </li>
            <li className="flex items-center gap-2 font-medium leading-5 mb-5 text-lg">
              <IoCheckmarkCircle className="text-blue-600" />
              Giải pháp thi online:
              <span className="font-semibold">E-Exam</span>
            </li>
          </ul>
          <button
            className={
              isButton
                ? "px-5 py-3 rounded text-white bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] shadow-2xl shadow-[#7A9598]"
                : "hidden"
            }
          >
            Giới Thiệu Công Ty
          </button>
        </div>
        <div
          className="content-right w-1/2  flex gap-7 justify-center items-center "
          data-aos="fade-up"
        >
          <div className="cover-image-left flex flex-col gap-7 mt-14">
            <img
              className="object-cover hover:scale-105 cursor-pointer shadow-2xl w-[210px] h-[210px] border-[#8AD9E4] border-2 rounded object-center px-3 py-3 bg-white"
              src={imageSolution1}
            />
            <img
              className="object-contain shadow-2xl w-[210px] h-[210px] hover:scale-105 cursor-pointer border-[#8AD9E4] border-2 rounded object-center px-3 py-3 bg-white"
              src={imageSolution2}
            />
          </div>
          <div className="cover-image-right  flex flex-col gap-7">
            <img
              className="object-contain w-[210px] shadow-2xl hover:scale-105 cursor-pointer h-[210px] border-[#8AD9E4] border-2 rounded object-center px-3 py-3 bg-white"
              src={imageSolution3}
            />
            <img
              className="object-contain hover:scale-105 cursor-pointer shadow-2xl w-[210px] h-[210px] border-[#8AD9E4] border-2 rounded object-center px-3 py-3 bg-white"
              src={imageSolution4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSolution;
