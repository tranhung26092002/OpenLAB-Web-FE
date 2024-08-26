import Fan from "@components/devices/Fan";
import Oled from "@components/devices/Oled";
const DisplayOled = () => {
  return (
    <div className=" flex flex-col items-center justify-start gap-2 p-4 border-2 border-dashed border-gray-500 rounded h-full">
      <div className=" flex  flex-col items-center justify-center h-28 gap-1 ">
        <span className="font-semibold text-xl">OLED</span>
        <Oled />
      </div>
      <hr />
      <div className="flex items-center justify-center">
        <div className=" flex  flex-col items-center justify-center gap-2">
          <span className="font-semibold text-xl">Fan</span>
          <Fan />
        </div>
      </div>
    </div>
  );
};

export default DisplayOled;
