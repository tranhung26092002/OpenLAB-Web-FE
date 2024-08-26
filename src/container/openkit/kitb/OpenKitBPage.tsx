import BannerPage from "@components/custom/BannerPage";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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
  const [timestamps, setTimestamps] = useState<string[]>([]);
  return (
    <div>
      <div className=" flex justify-center flex-col">
        <BannerPage
          header={"OpenKit B"}
          homepage={"Home Page"}
          name={"Connect Status:"}
          connectStatus={connectStatus ? "Connected" : "Disconnected"}
        />
        <SchemaKitb />
        <Tabs className="bg-[#eee] flex flex-col justify-center py-16 ">
          <TabList>
            <Tab>MQTT Connect</Tab>
            <Tab>Dashboard</Tab>
          </TabList>

          <TabPanel>
            <MqttConnect
              setTemperature={setTemperature}
              setHumidity={setHumidity}
              setGas={setGas}
              setLight={setLight}
              setConnectStatus={setConnectStatus}
              setTimestamps={setTimestamps}
              connectStatus={connectStatus}
            />
          </TabPanel>
          <TabPanel className="w-full flex justify-center items-center">
            <Dashboard
              temperature={temperature}
              humidity={humidity}
              gas={gas}
              light={light}
              timestamps={timestamps}
            />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OpenKitBPage;
