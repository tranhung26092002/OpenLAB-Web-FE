import Arduino from "@components/devices/Arduino";
import Buzzer from "@components/devices/Buzzer";

import Esp from "@components/devices/ESP";
import Fan from "@components/devices/Fan";
import Keybroad from "@components/devices/Keybroad";
import LCD from "@components/devices/LCD";
import Led7 from "@components/devices/Led7";
import Light from "@components/devices/Light";
import Oled from "@components/devices/Oled";
import Relay from "@components/devices/Relay";
import RGB from "@components/devices/RGB";
import StepMotor from "@components/devices/StepMotor";
import STM32 from "@components/devices/STM32";
import Switch from "@components/devices/Switch";

const SchemaKitb = () => {
  return (
    <div className=" flex items-start justify-center  h-[554px] ">
      <div className=" flex items-start justify-center gap-5  h-full ">
        <div className=" flex flex-col items-center justify-center gap-8  h-full  ">
          <div className=" flex flex-col items-center justify-start gap-8  p-5 border-2 border-dashed border-gray-500 rounded h-full">
            <div className=" flex  flex-col items-center justify-center h-28 gap-1 ">
              <span className="font-semibold text-xl">OLED</span>
              <Oled />
            </div>
            <hr />
            <div className="flex items-center justify-center gap-4">
              <div className=" flex  flex-col items-center justify-center gap-4">
                <span className="font-semibold text-xl">Fan</span>
                <Fan />
              </div>

              {/* <div className="flex flex-col gap-5">
                <Switch />
                <Switch />
              </div> */}
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-8  h-full  ">
          <div className=" flex flex-col items-center justify-start gap-8  p-5 border-2 border-dashed border-gray-500 rounded h-full">
            <div className=" flex  flex-col items-center justify-center h-28 gap-1 ">
              <span className="font-semibold text-xl">LCD</span>
              <LCD />
            </div>
            <hr />
            <div className="flex items-center justify-center gap-4">
              <div className=" flex  flex-col items-center justify-center gap-4">
                <span className="font-semibold text-xl">Keybroad</span>
                <Keybroad />
              </div>

              <div className="flex flex-col gap-5">
                <Switch />
                <Switch />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-8  p-5 border-2 border-dashed border-gray-500 rounded h-full ">
          <div className="flex ">
            <div className="flex  flex-col items-center justify-center ">
              <span className="font-semibold text-xl">DHT11</span>
              <Led7 />
            </div>

            <div className="flex  flex-col items-center justify-center ">
              <span className="font-semibold text-xl">Buzzer</span>
              <Buzzer />
            </div>
            <div className="flex  flex-col items-center justify-center ">
              <span className="font-semibold text-xl">RGB</span>
              <RGB />
            </div>
          </div>
          <div className="flex justify-around items-start  w-full">
            <div className="flex flex-col items-center gap-4 w-28 justify-around ">
              <div className="h-28 flex items-center flex-col ">
                <span className="font-semibold text-xl">Light</span>
                <Light />
              </div>
              <div className="flex  flex-col items-center justify-center gap-4 ">
                <span className="font-semibold text-xl">Relay</span>
                <Relay />
              </div>
            </div>
            <div className="w-28  flex justify-center items-center">
              <div className="flex  flex-col items-center justify-center">
                <span className="font-semibold text-xl">StepMotor</span>
                <StepMotor />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center  gap-8  p-5 border-2 border-dashed border-gray-500 rounded h-full">
          <div className="flex  flex-col items-center justify-center ">
            <span className="font-semibold text-xl">Arduino</span>
            <Arduino />
          </div>
          <div className="flex  flex-col items-center justify-center ">
            <span className="font-semibold text-xl">STM32</span>
            <STM32 />
          </div>
          <div className="flex  flex-col items-center justify-center ">
            <span className="font-semibold text-xl">ESP</span>
            <Esp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemaKitb;
