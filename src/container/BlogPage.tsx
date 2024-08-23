import BannerPage from "src/components/custom/BannerPage";
import { dataBlog } from "src/services/data";
import { FaRegUser } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
const BlogPage = () => {
  return (
    <div className="pb-24">
      <div>
        <BannerPage
          header={"Blog"}
          homepage={"Trang chủ"}
          name={"Tất cả bài viết"}
        />
      </div>
      <div className="px-24 pt-24 flex gap-7">
        <div className="w-2/3  flex justify-end items-center gap-6 flex-wrap">
          {dataBlog.map((item, index) => {
            return (
              <div
                key={index}
                className="shadow-xl w-[40%] px-6 py-6 rounded-md h-[500px]"
              >
                <div className="w-full h-36 border-2 border-green-700 rounded"></div>
                <div className="flex justify-between items-center my-5">
                  <span className="flex ga-2 items-center">
                    <FaRegUser /> {item.role}
                  </span>
                  <span className="flex ga-2 items-center">
                    <IoCalendar />
                    {item.date}
                  </span>
                </div>
                <div className="py-5">
                  <p className="text-xl font-medium">{item.title}</p>
                </div>
                <div>
                  <p className="font-light">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex flex-col gap-8 w-1/4 justify-start   items-start">
          <div className="px-7 py-7 bg-white rounded border-dotted border-black border-[1px] w-full justify-center flex">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className="px-4 py-2 bg-[#eee] focus:ring-2 focus:outline-none focus:outline-1 focus:border-none focus:ring-black focus:bg-white rounded w-[380px]"
            />
          </div>

          <div className="px-7 py-7 bg-white rounded border-dotted border-black border-[1px] ">
            <span className="text-xl font-medium">Mới nhất</span>

            <div className="pt-16">
              {dataBlog.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex  justify-between items-start gap-4 py-2"
                  >
                    <div className="w-1/4 h-20 border-2 border-green-700 rounded "></div>
                    <div className="w-3/4 ">
                      <p className="text-lg font-medium mb-2 ">{item.title}</p>
                      <span className="flex items-center gap-2 justify-end">
                        <IoCalendar />
                        {item.date}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="px-7 py-7 bg-white rounded border-dotted border-black border-[1px] w-full flex justify-end flex-col">
            <span className="text-xl font-medium">Danh mục</span>
            <div className="py-6 flex flex-col gap-2 items-end">
              <div className="py-2 bg-[#eee] px-4 rounded w-[360px] hover:transition-all hover:duration-200 hover:ease-in hover:w-[339px] cursor-pointer">
                Blockchain
              </div>
              <div className="py-2 bg-[#eee] px-4 rounded w-[360px] hover:transition-all hover:duration-200 hover:ease-in hover:w-[339px] cursor-pointer">
                E-University
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
