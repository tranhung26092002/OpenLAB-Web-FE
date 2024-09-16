import DHTImage from "~/assets/device-imge/DHT11.jpg";

const DHT11Sensor = () => {
  return (
    <div className="container-dht11 flex ">
      <img
        src={DHTImage}
        alt="image-dht"
        className="object-contain object-center w-12 h-28"
      />
    </div>
  );
};
export default DHT11Sensor;
