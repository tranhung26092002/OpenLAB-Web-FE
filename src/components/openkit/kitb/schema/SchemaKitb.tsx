import ControlBlock from "./ControlBlock";
import DisplayLcd from "./DisplayLcd";
import DisplayOled from "./DisplayOled";
import InputSensor from "./InputSensor";

const SchemaKitb = () => {
  return (
    <div className=" flex items-start justify-around px-16 py-16">
      <div className=" w-1/5 ">
        <DisplayOled />
      </div>
      <div className=" w-1/5 ">
        <DisplayLcd />
      </div>
      <div className="w-1/4 ">
        <InputSensor />
      </div>
      <div className="w-1/4 ">
        <ControlBlock />
      </div>
    </div>
  );
};

export default SchemaKitb;
