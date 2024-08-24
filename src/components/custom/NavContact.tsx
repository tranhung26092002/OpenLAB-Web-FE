import { GrMail } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
const NavContact = () => {
  return (
    <div className="flex justify-between items-center px-14 py-3">
      <div className="flex">
        <span className="flex gap-1 items-center">
          <GrMail />
          openlabptit@gmail.com
        </span>
      </div>
      <div className="flex  gap-2 items-center">
        <FaFacebook className="cursor-pointer" />
        <AiFillGoogleCircle className="cursor-pointer" />
        <IoLogoGithub className="cursor-pointer" />
        <FaInstagramSquare className="cursor-pointer" />
      </div>
    </div>
  );
};

export default NavContact;
