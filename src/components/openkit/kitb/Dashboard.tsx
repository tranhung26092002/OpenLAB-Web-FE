import { useEffect, useState } from "react";
import DashboardChart from "./DashboardChart";
import SchemaKitb from "./schema/SchemaKitb";
import ParameterDashboard from "./ParameterDashboard";
import DHT11Sensor from "@components/devices/DHT11";
import { FaThermometerHalf } from "react-icons/fa";
import { IoSnowSharp } from "react-icons/io5";
type DashboardProps = {
  temperature: number;
  humidity: number;
  gas: number;
  light: number;
  timestamps: string[];
};

const Dashboard = ({
  temperature,
  light,
  gas,
  humidity,
  timestamps,
}: DashboardProps) => {
  console.log(temperature, light, gas, humidity, timestamps);
  const [temperatureHistory, setTemperatureHistory] = useState<number[]>([]);
  const [humidityHistory, setHumidityHistory] = useState<number[]>([]);
  const [gasHistory, setGasHistory] = useState<number[]>([]);
  const [lightHistory, setLightHistory] = useState<number[]>([]);

  useEffect(() => {
    setTemperatureHistory((prev) => [...prev, temperature]);
    setHumidityHistory((prev) => [...prev, humidity]);
    setGasHistory((prev) => [...prev, gas]);
    setLightHistory((prev) => [...prev, light]);
  }, [temperature, light, gas, humidity]);

  return (
    <div className="flex flex-col w-full px-16 items-center py-10 gap-10">
      <h1 className="text-center font-semibold  text-2xl">Dashboard</h1>
      <SchemaKitb />
      <div className="flex items-center justify-between  w-full ">
        <div className="w-[23%] flex items-center justify-center flex-col shadow-xl bg-white px-6 py-6 rounded">
          <div className="w-full">
            <ParameterDashboard
              device={<DHT11Sensor />}
              id='dht4'
              nameDevice={"DHT11"}
              value1={"27*C"}
              value2={"70%"}
              icon1={<FaThermometerHalf />}
              icon2={<IoSnowSharp />}
            />
          </div>

          <DashboardChart
            dataX={timestamps}
            dataY={temperatureHistory}
            value={temperature}
          />
        </div>
        <div className="w-[23%] flex items-center justify-center flex-col shadow-xl bg-white px-6 py-6 rounded">
          <div className="w-full">
            <ParameterDashboard
              device={<DHT11Sensor />}
              id="dht3"
              nameDevice={"DHT11"}
              value1={"27*C"}
              value2={"70%"}
              icon1={<FaThermometerHalf />}
              icon2={<IoSnowSharp />}
            />
          </div>

          <DashboardChart
            dataX={timestamps}
            dataY={humidityHistory}
            value={humidity}
          />
        </div>
        <div className="w-[23%] flex items-center justify-center flex-col shadow-xl bg-white px-6 py-6 rounded">
          <div className="w-full">
            <ParameterDashboard
              device={<DHT11Sensor />}
              id='dht1'
              nameDevice={"DHT11"}
              value1={"27*C"}
              value2={"70%"}
              icon1={<FaThermometerHalf />}
              icon2={<IoSnowSharp />}
            />
          </div>

          <DashboardChart
            dataX={timestamps}
            dataY={gasHistory}
            value={gas}
          />
        </div>
        <div className="w-[23%] flex items-center justify-center flex-col shadow-xl bg-white px-6 py-6 rounded">
          <div className="w-full">
            <ParameterDashboard
              device={<DHT11Sensor />}
              id="dht2"
              nameDevice={"DHT11"}
              value1={"27*C"}
              value2={"70%"}
              icon1={<FaThermometerHalf />}
              icon2={<IoSnowSharp />}
            />
          </div>

          <DashboardChart
            dataX={timestamps}
            dataY={lightHistory}
            value={light}
          />
        </div>
      </div>
      {/* <div className="flex items-center justify-between  w-full ">
        <div className="w-[23%] flex items-center justify-center ">
          <DashboardChart />
        </div>
        <div className="w-[23%] flex items-center justify-center ">
          <DashboardChart />
        </div>
        <div className="w-[23%] flex items-center justify-center">
          <DashboardChart />
        </div>
        <div className="w-[23%] flex items-center justify-center">
          <DashboardChart />
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
