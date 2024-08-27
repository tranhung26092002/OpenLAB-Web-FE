import Buzzer from "@components/devices/Buzzer";
import Led7 from "@components/devices/Led7";
import Light from "@components/devices/Light";
import Relay from "@components/devices/Relay";
import RGB from "@components/devices/RGB";
import StepMotor from "@components/devices/StepMotor";
const InputSensor = () => {
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
          <div className="h-28 flex items-center flex-col ">
            <span className="font-semibold text-xl">Light</span>
            <Light />
          </div>
          <div className="flex  flex-col items-center justify-center gap-4 ">
            <span className="font-semibold text-xl">Relay</span>
            <Relay />
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <div className="flex  flex-col items-center justify-center">
            <span className="font-semibold text-xl">StepMotor</span>
            <StepMotor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSensor;
