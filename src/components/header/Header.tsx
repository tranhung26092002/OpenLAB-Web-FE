import LeftContentHeader from "~/components/header/LeftContentHeader";
import RightContentHeader from "~/components/header/RightContentHeader";

const Header = () => {
  return (
    <div className="body-header px-5 flex flex-col shadow-xl w-screen max-w-full bg-white z-30 xs:px-0 sm:px-0  ">
      <div className="flex justify-around py-3 sm:py-0 xs:py-0 lg:justify-between">
        <div className="w-[80%] flex items-center justify-center  sm:w-full xs:w-full lg:w-[75%]">
          <LeftContentHeader />
        </div>
        <div className="w-[20%] flex items-center justify-center  sm:hidden xs:hidden lg:w-[25%]">
          <RightContentHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
