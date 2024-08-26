import { BsFan } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi";
import stepmotoImage from "@assets/device-imge/step-motor.png";
const StepMotor = () => {
  return (
    <div className=" flex flex-col items-center gap-5">
      <div className="fan flex flex-col cursor-pointer  w-fit h-28 items-center justify-center">
        <div className="relay-container flex flex-col justify-center items-center">
          <div className="content-relay flex flex-col justify-center items-center">
            <div className="relay-top flex justify-center items-center ">
              <div className="relay-left">
                <HiPlusCircle />
              </div>
              <div className="relay-center h-20 text-center w-20 rounded-full pt-3  border-4 border-solid border-black flex justify-center items-center">
                <BsFan className="animate-spin text-4xl mt-[-12px]" />
              </div>
              <div className="relay-right">
                <HiPlusCircle />
              </div>
            </div>
            <div className="relay-buttom w-12 h-6 bg-blue-700 rounded"></div>
          </div>
        </div>
      </div>
      <img
        src={stepmotoImage}
        className="w-28 h-28 object-contain object-center"
      />
    </div>
  );
};
export default StepMotor;
