import Logo from "./custom/Logo";
import { MdPhone } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";
const SectionFooter = () => {
  return (
    <div className="body-section-footer bg-[#120f2d] px-20 py-14 border-t-2 border-[#48d6e9]">
      <div className="content-section-footer">
        <div className="flex text-white justify-around px-5 gap-8">
          <div className="w-[30%] pr-5">
            <Logo className="text-5xl" />
            <p className=" mt-12 text-sm font-light text-[#9eb7c0]">
              Nền tảng thực hành số và Dịch dụ AI/IoT giá rẻ cho chuyển đổi số
              giáo dục. Chúng tôi nỗ lực làm việc để hiểu khách hàng và mang đến
              các dịch vụ chất lượng, có giá trị thực tiễn cao!
            </p>
          </div>
          <div className="w-[36%]  flex flex-col  text-sm font-light text-[#9eb7c0] gap-3">
            <span className="text-lg font-semibold text-white mb-2">
              ĐỊA CHỈ
            </span>
            <span className="flex gap-1 cursor-pointer hover:text-white items-center">
              <MdPhone className="text-lg" />
              (+84) 85 660 6961
            </span>
            <span className="flex gap-1 cursor-pointer hover:text-white items-center">
              <GrMail className="text-lg" />
              openlabptit@gmail.com
            </span>
            <span className="flex gap-1 cursor-pointer hover:text-white items-center">
              <IoLocation className="text-lg" />
              Tầng 2, Tòa New Skyline Văn Quán, Hà Đông, HN
            </span>
            <div className="flex mt-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2925132859236!2d105.78486297438583!3d20.980908489422067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1724311113266!5m2!1svi!2s"
                width="300"
                height="160"
                style={{ borderWidth: "none", borderRadius: "6px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="w-[17%] text-sm flex flex-col font-light text-[#9eb7c0] gap-3">
            <span className="text-lg font-semibold text-white mb-2">
              Khám phá
            </span>
            <span className="cursor-pointer hover:text-white">Giới thiệu</span>
            <span className="cursor-pointer hover:text-white">Blog</span>
            <span className="cursor-pointer hover:text-white">Hỗ trợ</span>
            <span className="cursor-pointer hover:text-white">Liên hệ</span>
          </div>
          <div className="w-[17%] text-sm flex flex-col font-light text-[#9eb7c0] gap-3">
            <span className="text-lg font-semibold text-white mb-2">
              Sản phẩm
            </span>
            <span className="cursor-pointer hover:text-white">Đại học số</span>
            <span className="cursor-pointer hover:text-white">
              Super App Slink
            </span>
            <span className="cursor-pointer hover:text-white">
              Hệ thống Blockchain
            </span>
            <span className="cursor-pointer hover:text-white">
              Tất cả sản phẩm
            </span>
          </div>
        </div>
        <div className="pt-16 text-[#9eb7c0] text-sm flex">
          <span className="flex items-center gap-1 text-center">
            <LuCopyright />
            <span>2024 Bản quyền thuộc về</span>
            <span className="font-semibold text-white">Open LAB</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionFooter;
