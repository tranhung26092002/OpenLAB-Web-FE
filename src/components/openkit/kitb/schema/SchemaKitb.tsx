import ControlBlock from "./ControlBlock";
import DisplayLcd from "./DisplayLcd";
import DisplayOled from "./DisplayOled";
import InputSensor from "./InputSensor";

type SchemaKitbProps = {
  temperature: string | number,
  light: string | number,
  gas: string | number,
  humidity: string | number,
  led?: string | number
}

const SchemaKitb = ({ temperature, light, gas, humidity, led }: SchemaKitbProps) => {
  return (
    <div className=" flex items-start justify-around py-16 w-full">
      <div className=" w-1/5 h-[537px] bg-white">
        <DisplayOled />
      </div>
      <div className=" w-1/5 h-[537px] bg-white ">
        <DisplayLcd
          temperature={temperature}
          humidity={humidity}
          gas={gas}
          light={light}
        />
      </div>
      <div className="w-1/4  h-[537px] bg-white">
        <InputSensor led={led}/>
      </div>
      <div className="w-1/4 h-[537px] bg-white">
        <ControlBlock />
      </div>
    </div>
  );
};

export default SchemaKitb;
