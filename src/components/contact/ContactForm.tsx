import { GrMail } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { IoIosPaperPlane } from "react-icons/io";
const ContactForm = () => {
  return (
    <div className="px-28 flex gap-6 pb-24 xs:px-4 xs:flex-col lg:px-10 sm:px-16 sm:flex-col">
      <div
        className="px-8 shadow-lg w-1/3 sm:w-full rounded-md flex gap-5 py-6 flex-col xs:w-full lg:px-4 xs:px-4"
        data-aos="fade-right"
      >
        <h1 className="text-3xl font-semibold">Liên hệ OpenLAB</h1>
        <p>
          Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần. Chúng tôi sẽ phản
          hồi trong thời gian sớm nhất!
        </p>

        <span className="flex gap-3 cursor-pointer hover:text-[#1464cc] items-center">
          <GrMail className="text-lg" />
          openlab.user@gmail.com
        </span>
        <hr />
        <span className="flex gap-3 cursor-pointer hover:text-[#1464cc] items-center">
          <MdPhone className="text-lg" />
          (+84) 86 574 6698
        </span>
        <hr />
        <span className="flex gap-3 cursor-pointer hover:text-[#1464cc] items-center">
          <IoLocation className="text-xl" />
          68B-6 Ao Sen, Hà Đông, HN
        </span>
        <hr />
      </div>
      <div className="flex flex-col gap-3 w-2/3 sm:w-full pl-8 sm:pl-3  lg:pl-0 xs:w-full xs:pl-0" data-aos="fade-left">
        <div className="flex justify-start gap-5 xs:flex-col xs:w-full">
          <input
            type="text"
            className="bg-[#eee] h-14 w-1/3 rounded pl-4 focus:ring focus:outline-none focus:border-none focus:ring-[#f5d5d8] focus:bg-white xs:w-full"
            placeholder="Tên của bạn"
          />
          <input
            type="email"
            className="bg-[#eee] h-14 w-1/3 rounded pl-4 focus:ring focus:outline-none focus:border-none focus:ring-[#f5d5d8] focus:bg-white xs:w-full"
            name=""
            id=""
            placeholder="Địa chỉ email"
          />
          <input
            type="text"
            className="bg-[#eee] h-14 w-1/3 rounded pl-4 focus:ring focus:outline-none focus:border-none focus:ring-[#f5d5d8] focus:bg-white xs:w-full"
            placeholder="Số điện thoại"
          />
        </div>
        <div>
          <input
            type="text"
            className="bg-[#eee] w-full rounded h-14 pl-4 focus:ring focus:outline-none focus:border-none focus:ring-[#f5d5d8] focus:bg-white"
            placeholder="Chủ đề"
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            className="bg-[#eee] w-full h-56 rounded pl-4 py-4 focus:ring focus:outline-none focus:border-none focus:ring-[#f5d5d8] focus:bg-white"
            placeholder="Tin nhắn của bạn"
          ></textarea>
        </div>
        <button className="w-full rounded py-3 bg-[#f83145] text-white flex justify-center items-center gap-2 hover:transition-colors hover:duration-200 hover:ease-in hover:bg-[#120f2d]">
          <IoIosPaperPlane /> Gửi đi
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
