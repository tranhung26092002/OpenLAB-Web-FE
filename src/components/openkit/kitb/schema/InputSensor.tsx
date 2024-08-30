import Buzzer from "@components/devices/Buzzer";
import Led7 from "@components/devices/Led7";
import Light from "@components/devices/Light";
import Relay from "@components/devices/Relay";
import RGB from "@components/devices/RGB";
import StepMotor from "@components/devices/StepMotor";
import Switch from "react-switch";
import { SyntheticEvent, useState } from "react";
type event = MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>;
const InputSensor = () => {
  const [isOn, setOn] = useState(false);

  const handleChange = (checked: boolean, e: event, id: string) => {
    console.log("check, e, id", checked, e, id);
    setOn(!isOn);
  };
  return (
    <div className="flex flex-col items-center justify-around gap-4 p-4 border-2 border-dashed border-gray-500 rounded h-full ">
      <div className="flex w-full justify-between ">
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
      <div className="flex justify-around items-start w-full">
        <div className="flex flex-col items-center gap-4  justify-around ">
          <div className="h-28 flex items-center flex-col justify-between">
            <span className="font-semibold text-xl">Light</span>
            <Light />
          </div>
          <div className="flex  flex-col items-center justify-center gap-4 ">
            <span className="font-semibold text-xl">Relay</span>
            <Relay />
          </div>
          <Switch
            checked={isOn}
            onChange={(checked, e, id) => handleChange(checked, e, id)}
            checkedIcon={
              <p className="text-white  pr-1 pt-[2px] text-end font-medium">
                ON
              </p>
            }
            uncheckedIcon={
              <p className="text-white  pl-1 pt-[2px] text-start font-medium">
                OFF
              </p>
            }
            width={70}
          />
        </div>
        <div className=" flex justify-center items-center h-full">
          <div className="flex  flex-col items-center justify-between h-full">
            <span className="font-semibold text-xl">StepMotor</span>
            <StepMotor />
            <Switch
              checked={isOn}
              onChange={(checked, e, id) => handleChange(checked, e, id)}
              checkedIcon={
                <p className="text-white  pr-1 pt-[2px] text-end font-medium">
                  ON
                </p>
              }
              uncheckedIcon={
                <p className="text-white  pl-1 pt-[2px] text-start font-medium">
                  OFF
                </p>
              }
              width={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSensor;
