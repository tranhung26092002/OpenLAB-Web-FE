import ControlBlock from "./ControlBlock";
import DisplayLcd from "./DisplayLcd";
import DisplayOled from "./DisplayOled";
import InputSensor from "./InputSensor";

const SchemaKitb = () => {
  return (
    <div className=" flex items-start justify-around py-16 w-full">
      <div className=" w-1/5 h-[537px] bg-white">
        <DisplayOled />
      </div>
      <div className=" w-1/5 h-[537px] bg-white ">
        <DisplayLcd />
      </div>
      <div className="w-1/4  h-[537px] bg-white">
        <InputSensor />
      </div>
      <div className="w-1/4 h-[537px] bg-white">
        <ControlBlock />
      </div>
    </div>
  );
};

export default SchemaKitb;
