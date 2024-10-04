import LeftContentHeader from "~/components/header/LeftContentHeader";
import RightContentHeader from "~/components/header/RightContentHeader";

const Header = () => {
  return (
    <div className="body-header flex flex-col shadow-xl sticky top-0 z-10 bg-white ">
      <div className="flex bg-blue-50 justify-around py-3 sm:py-0 xs:py-0">
        <LeftContentHeader />
        <RightContentHeader />
      </div>
    </div>
  );
};

export default Header;
