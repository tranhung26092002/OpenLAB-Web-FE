type logoProps = {
  className: string | undefined;
};
const Logo = ({className}:logoProps) => {
  return (
    <div className="flex flex-col">
      <span
        className={` ${className}  font-semibold  text-[#e3334c] `}
        style={{
          textShadow:
            "rgb(220, 170, 25) 3px 0px 0px, rgba(0, 0, 0, 0) 4px -1px 10px, rgba(0, 0, 0, 0) 16px 1px 2px, rgba(115, 86, 86, 0) 22px 18px 30px",
        }}
      >
        OPEN LAB
      </span>
      <span className="text-[#e3334c]">AI/IOT as a service</span>
    </div>
  );
};

export default Logo;
