import Switch from "react-switch";
import { useState } from "react";

type SwitchCustomProps = {
  id: string | undefined;
};
const SwitchCustom = ({ id }: SwitchCustomProps) => {
  const [isOn, setOn] = useState(false);
  const handleChange = () => {
    setOn(!isOn);
  };
  return (
    <Switch
      checked={isOn}
      id={id}
      onChange={() => handleChange()}
      checkedIcon={
        <p className="text-white  pr-1 pt-[2px] text-end font-medium">ON</p>
      }
      uncheckedIcon={
        <p className="text-white  pl-1 pt-[2px] text-start font-medium">OFF</p>
      }
      width={70}
    />
  );
};

export default SwitchCustom;
