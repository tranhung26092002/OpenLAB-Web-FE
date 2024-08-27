import servoImage from "@assets/device-imge/Servo.jpg";

const Servo = () => {
  return (
    <div>
      <img
        src={servoImage}
        alt="servo-Image"
        className="object-contain object-right-top w-44"
      />
    </div>
  );
};

export default Servo;
