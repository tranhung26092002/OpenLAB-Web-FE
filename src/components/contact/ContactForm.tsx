import { GrMail } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { IoIosPaperPlane } from "react-icons/io";
const ContactForm = () => {
  return (
    <div className="px-24 flex gap-6 pb-24">
      <div className="px-8 shadow-lg w-1/3 rounded-md flex gap-5 py-6 flex-col">
        <h1 className="text-2xl font-semibold">Liên hệ OpenLAB</h1>
        <p>
          Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần. Chúng tôi sẽ phản
          hồi trong thời gian sớm nhất!
        </p>

        <span className="flex gap-3 cursor-pointer hover:text-white items-center">
          <GrMail className="text-lg" />
          openlabptit@gmail.com
        </span>
        <hr />
        <span className="flex gap-3 cursor-pointer hover:text-white items-center">
          <MdPhone className="text-lg" />
          (+84) 85 660 6961
        </span>
        <hr />
        <span className="flex gap-3 cursor-pointer hover:text-white items-center">
          <IoLocation className="text-xl" />
          Tầng 2, Tòa New Skyline Văn Quán, Hà Đông, HN
        </span>
      </div>
      <div className="flex flex-col gap-3 w-2/3 ">
        <div className="flex justify-start gap-5">
          <input type="text" className="bg-[#eee] h-14 w-1/3 rounded pl-4 focus:ring focus:outline-none focus:border-none focus:ring-[#f5d5d8] focus:bg-white" placeholder="Tên của bạn" />
          <input
            type="email"
            className="bg-[#eee] h-14 w-1/3 rounded pl-4 focus:ring focus:outline-none focus:border-none focus:ring-[#f5d5d8] focus:bg-white"
            name=""
            id="" placeholder="Địa chỉ email"
          />
          <input type="text" className="bg-[#eee] h-14 w-1/3 rounded pl-4 focus:ring focus:outline-none focus:border-none focus:ring-[#f5d5d8] focus:bg-white" placeholder="Số điện thoại" />
        </div>
        <div>
          <input type="text" className="bg-[#eee] w-full rounded h-14 pl-4 focus:ring focus:outline-none focus:border-none focus:ring-[#f5d5d8] focus:bg-white" placeholder="Chủ đề" />
        </div>
        <div>
          <textarea
            name=""
            id=""
            className="bg-[#eee] w-full h-56 rounded pl-4 py-4 focus:ring focus:outline-none focus:border-none focus:ring-[#f5d5d8] focus:bg-white" placeholder="Tin nhắn của bạn"
          ></textarea>
        </div>
        <button className="w-full rounded h-14 bg-[#f14D5D] text-white flex justify-center items-center gap-2 hover:transition-colors hover:duration-200 hover:ease-in hover:bg-[#120f2d]">
        <IoIosPaperPlane /> Gửi đi
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
