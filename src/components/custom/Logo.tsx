type logoProps = {
  className: string | undefined;
};
const Logo = ({ className }: logoProps) => {
  return (
    <div className="flex flex-col ">
      <span
        className={` ${className}  font-semibold text-white text-5xl text-shadow-lg`}
        style={{
          textShadow:
            "rgb(106 109 129) 3px 0px 0px, rgba(0, 0, 0, 0) 4px -1px 10px, rgba(0, 0, 0, 0) 16px 1px 2px, rgba(115, 86, 86, 0) 22px 18px 30px",
        }}
      >
        OpenLAB
      </span>
      <span className="text-white font-medium mx-10">
        AI/IoT as a service
      </span>
    </div>
  );
};

export default Logo;
