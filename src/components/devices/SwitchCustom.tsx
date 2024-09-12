import Switch from "react-switch";
import { useState } from "react";

type SwitchCustomProps = {
  id: string;
  onSwitchChange: (id: string, state: boolean) => void; // Thay đổi để bao gồm `id`
};

const SwitchCustom = ({ id, onSwitchChange }: SwitchCustomProps) => {
  const [isOn, setOn] = useState(false);

  const handleChange = (newState: boolean) => {
    setOn(newState);
    onSwitchChange(id, newState); // Truyền `id` và `state`
  };

  return (
    <Switch
      checked={isOn}
      id={id}
      onChange={handleChange}
      checkedIcon={<p className="text-white pr-1 pt-[2px] text-end font-medium">ON</p>}
      uncheckedIcon={<p className="text-white pl-1 pt-[2px] text-start font-medium">OFF</p>}
      width={70}
    />
  );
};

export default SwitchCustom;
