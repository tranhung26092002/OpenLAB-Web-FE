import Keybroad from "@components/devices/Keybroad";
import LCD from "@components/devices/LCD";
import Switch from "@components/devices/Switch";
const DisplayLcd = () => {
  return (
    <div className=" flex flex-col items-center justify-around gap-2  p-4 border-2 border-dashed border-gray-500 rounded h-full">
      <div className=" flex  flex-col items-center justify-center gap-1 ">
        <span className="font-semibold text-xl">LCD</span>
        <LCD />
      </div>
      <hr />
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <div className="flex justify-around  w-full">
          <div>
            <span className="font-semibold text-xl">SW1</span>
            <Switch />
          </div>
          <div>
            <span className="font-semibold text-xl">SW2</span>
            <Switch />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-2">
          <span className="font-semibold text-xl">Keybroad</span>
          <Keybroad />
        </div>
      </div>
    </div>
  );
};

export default DisplayLcd;
