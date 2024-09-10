import BannerPage from "@components/custom/BannerPage";
import MqttConnect from "@components/openkit/kitb/MqttConnect";
import Dashboard from "@components/openkit/kitb/Dashboard";
import { useState } from "react";
import SchemaKitb from "@components/openkit/kitb/schema/SchemaKitb";
const OpenKitBPage = () => {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [gas, setGas] = useState(0);
  const [light, setLight] = useState(0);
  const [connectStatus, setConnectStatus] = useState<boolean>(false);
  const [led, setLed] = useState(0);
  return (
    <div>
      <div className=" flex justify-center flex-col">
          name={"Connect Status:"}
        />
        <SchemaKitb temperature={temperature} light={light} gas={gas} humidity={humidity} led={led}/>
        <MqttConnect
          setTemperature={setTemperature}
          setHumidity={setHumidity}
          setGas={setGas}
          setLight={setLight}
          setConnectStatus={setConnectStatus}
          setLed={setLed}
          connectStatus={connectStatus}
        />
        <Dashboard
          temperature={temperature}
          humidity={humidity}
          gas={gas}
          light={light}

        />
      </div>
    </div>
  );
};

export default OpenKitBPage;
