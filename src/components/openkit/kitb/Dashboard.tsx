import { useEffect, useState } from "react";
import DashboardChart from "./DashboardChart";

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
      <div className="flex items-center justify-between  w-full ">
        <div className="w-[23%] flex items-center justify-center ">
          <DashboardChart dataX={timestamps} dataY={temperatureHistory} value={temperature}/>
        </div>
        <div className="w-[23%] flex items-center justify-center ">
          <DashboardChart dataX={timestamps} dataY={humidityHistory} value={humidity} />
        </div>
        <div className="w-[23%] flex items-center justify-center">
          <DashboardChart dataX={timestamps} dataY={lightHistory} value={light} />
        </div>
        <div className="w-[23%] flex items-center justify-center">
          <DashboardChart dataX={timestamps} dataY={gasHistory} value={gas} />
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
