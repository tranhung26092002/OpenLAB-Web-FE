import { Link } from "react-router-dom";

type contentBannerProps = {
  header: string;
  homepage: string;
  name: string;
  connectStatus?: string;
};
const BannerPage = ({
  header,
  homepage,
  name,
  connectStatus,
}: contentBannerProps) => {
  return (
    <div className="w-full text-white flex justify-center items-center bg-gradient-to-r from-[#090979] from-0% via-[#090979] via-[41%]  to-[#090979] to-100%">
      <div className="flex justify-center items-center flex-col  h-80 w-[80%]  bg-section_page bg-contain  bg-no-repeat bg-center  ">
        <h1 className="text-5xl font-semibold mb-4 xs:text-2xl">{header}</h1>
        <span className="flex gap-1 text-lg">
          <Link to={"/"}>
            <span className="font-semibold cursor-pointer">
              {homepage}
            </span>
          </Link>
          /{" "}
          <div className="flex gap-2 items-center">
            <span className="font-semibold" >{name}</span>
            <span className="font-medium text-red-600">{connectStatus}</span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default BannerPage;
