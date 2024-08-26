import DHTImage from "@assets/device-imge/DHT11.jpg";
import { FaCircle } from "react-icons/fa";

const DHT11Sensor = () => {
  return (
    <div className="container-dht11  relative ">
      <img
        src={DHTImage}
        alt="image-dht"
        className="object-contain object-center w-12 h-28"
      />
      <div className="dot absolute text-base bottom-6 left-1">
        <FaCircle className="text-xs" />
      </div>
    </div>
  );
};
export default DHT11Sensor;
