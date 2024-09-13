import BannerPage from "@/components/custom/BannerPage";
import MqttConnect from "@/components/openkit/kitb/MqttConnect";
import Dashboard from "@/components/openkit/kitb/Dashboard";
import { useState } from "react";
import SchemaKitb from "@/components/openkit/kitb/schema/SchemaKitb";
import mqtt from "mqtt";

const OpenKitBPage = () => {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [gas, setGas] = useState(0);
  const [light, setLight] = useState(0);
  const [connectStatus, setConnectStatus] = useState<boolean>(false);
  const [led, setLed] = useState(0);
  const [mqttClient, setMqttClient] = useState<mqtt.MqttClient | null>(null);
  const [mqttTopic, setMqttTopic] = useState("");

  const handleSwitchChange = (id: string, state: boolean) => {
    const message = JSON.stringify({ [id]: state ? 1 : 0 });
    if (mqttClient) {
      mqttClient.publish(`${mqttTopic}/client`, message, { qos: 0, retain: false }, (error: unknown) => {
        console.log(mqttTopic)
        if (error) {
          console.error("Publish error:", error);
        } else {
          console.log("Message published:", message);
        }
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center flex-col">
        <BannerPage
          header={"OpenKit B"}
          homepage={"Home Page"}
          name={"Connect Status:"}
          connectStatus={connectStatus ? "Connected" : "Disconnected"}
        />
        <SchemaKitb
          temperature={temperature}
          light={light}
          gas={gas}
          humidity={humidity}
          led={led}
          onSwitchChange={handleSwitchChange} // Truyền hàm xử lý
        />
        <MqttConnect
          setTemperature={setTemperature}
          setHumidity={setHumidity}
          setGas={setGas}
          setLight={setLight}
          setConnectStatus={setConnectStatus}
          setLed={setLed}
          connectStatus={connectStatus}
          setMqttClient={setMqttClient} // Thêm để thiết lập client MQTT
          setMqttTopic={setMqttTopic}
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
