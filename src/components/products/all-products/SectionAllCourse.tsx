import {
  courseInfor5G,
  courseInforAI,
  courseInforCloud,
  courseInforDataAnalyst,
  courseInforDronevsUav,
  courseInforLTN,
} from "~/services/data";
import CourseInfor from "~/components/products/courses/CourseInfor";
export default function SectionAllCourse() {
  return (
    <div className="">
      <span className="text-3xl font-semibold xs:text-2xl uppercase w-full text-center  block">
        Khóa học
      </span>
      <div className="px-16 flex flex-col py-10 xl:px-1">
        <div className="  flex flex-col">
          <span className="text-xl font-semibold py-10 text-blue-600">
            THỰC HÀNH HỆ THỐNG IoT
          </span>
          <div className="flex   items-center w-full flex-wrap xl:justify-around">
            {courseInforLTN.map((item, index) => {
              return (
                <div
                  className="flex  flex-wrap justify-center items-center w-[24%] mt-2"
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col">
          <span className="text-xl font-semibold py-10 uppercase text-blue-600">
            Thực hành AI/ML
          </span>
          <div className="flex items-center w-full flex-wrap xl:justify-around">
            {courseInforAI.map((item, index) => {
              return (
                <div
                  className="flex mt-2  justify-center items-center w-[24%]"
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="  flex flex-col">
          <span className="text-xl font-semibold py-10 uppercase text-blue-600">
            Thực hành mạng di động 5G
          </span>
          <div className="flex  justify-around items-center w-full flex-wrap xl:justify-around">
            {courseInfor5G.map((item, index) => {
              return (
                <div
                  className="flex justify-center items-center w-[24%] "
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="  flex flex-col">
          <span className="text-xl font-semibold py-10 uppercase text-blue-600">
            Thực hành điện toán đám mây
          </span>
          <div className="flex   items-center w-full flex-wrap xl:justify-around">
            {courseInforCloud.map((item, index) => {
              return (
                <div
                  className="flex  flex-wrap justify-center items-center w-[24%] mt-2"
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col">
          <span className="text-xl font-semibold py-10 uppercase text-blue-600">
            Thực hành phân tích dữ liệu
          </span>
          <div className="flex   items-center w-full flex-wrap xl:justify-around">
            {courseInforDataAnalyst.map((item, index) => {
              return (
                <div
                  className="flex  flex-wrap justify-center items-center w-[24%] mt-2"
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col">
          <span className="text-xl font-semibold py-10 uppercase text-blue-600">
            Thực hành Drone/UAV
          </span>
          <div className="flex   items-center w-full flex-wrap xl:justify-around">
            {courseInforDronevsUav.map((item, index) => {
              return (
                <div
                  className="flex  flex-wrap justify-center items-center w-[24%] mt-2"
                  key={index}
                >
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
