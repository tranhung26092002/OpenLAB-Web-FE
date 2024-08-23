type contentBannerProps = {
  header: string;
  homepage: string;
  name: string;
};
const BannerPage = ({ header, homepage, name }: contentBannerProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-900 from-0% via-cyan-800 via-58% to-sky-800 to-100% w-full  py-24 text-white">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold mb-4">{header}</h1>
        <span className="flex gap-1 text-lg">
          <span className="text-red-500 font-semibold cursor-pointer">{homepage}</span> / <span>{name}</span>
        </span>
      </div>
    </div>
  );
};

export default BannerPage;
