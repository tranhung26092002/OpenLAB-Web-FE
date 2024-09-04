import { MouseEventHandler } from "react";
import { FaAngleUp } from "react-icons/fa6";
type topBtnProps = {
    showButton: boolean,
    onClick:MouseEventHandler<HTMLButtonElement> | undefined
}
const GoToTopButton = ({showButton,onClick}:topBtnProps) => {
  return (
    <div
      className="container-btn-right flex flex-col fixed right-0 bottom-11 w-[49px] rounded-tl-sm rounded-bl-sm 
  overflow-hidden bg-[#080541] items-end hover:duration-300 delay-150 hover:transition-all hover:w-36 "
    >
      <button
        className={
          showButton === true
            ? "flex justify-end items-center pr-3 gap-4  w-36 h-12 hover:transition hover:bg-[#ddc320] hover:text-white"
            : "hidden"
        }
        onClick={onClick}
      >
        <div>Đầu trang</div>
        <FaAngleUp  className="text-[25px] font-light opacity-85 text-white" />
      </button>
    </div>
  );
};

export default GoToTopButton;
