import { ReactNode, SyntheticEvent, useState } from "react";
import Switch from "react-switch";
type ParameterDashboardProps = {
  device: ReactNode;
  nameDevice: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  value1: string;
  value2?: string;
  id: string;
};
type event = MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>;

const ParameterDashboard = ({
  device,
  nameDevice,
  id,
  icon1,
  icon2,
  value1,
  value2,
}: ParameterDashboardProps) => {
  const [isOn, setOn] = useState(false);

  const handleChange = (checked: boolean, e: event, id: string) => {
    console.log("check, e, id", checked, e, id);
    setOn(!isOn);
  };
  return (
    <div className="flex gap-2">
      <div>{device}</div>
      <div className="flex flex-col items-start">
        <span className="font-semibold">{nameDevice}</span>
        <div className="flex items-center gap-1">
          <span>{icon1}</span>
          <span>{value1}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>{icon2}</span>
          <span>{value2}</span>
        </div>
        <Switch
          checked={isOn}
          onChange={(checked, e, id) => handleChange(checked, e, id)}
          checkedIcon={
            <p className="text-white  pr-1 pt-[2px] text-end font-medium">ON</p>
          }
          uncheckedIcon={
            <p className="text-white  pl-1 pt-[2px] text-start font-medium">
              OFF
            </p>
          }
          width={70}
          id={id}
        />
      </div>
    </div>
  );
};

export default ParameterDashboard;
