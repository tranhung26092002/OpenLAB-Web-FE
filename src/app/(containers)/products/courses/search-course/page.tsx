import React from "react";
import imageSale from "~/assets/image/product/sales.jpg";
import {
  courseInforCloud,
  courseInforDataAnalyst,
  courseInforDronevsUav,
} from "~/services/data";
import BannerPage from "~/components/custom/BannerPage";
import CourseInfor from "~/components/products/courses/CourseInfor";
import Image from "next/image";
import MainLayout from "~/components/main-layout";
export default function SearchCourse() {
  return (
    <MainLayout authPage={false}>
      <div>
        <BannerPage
          header={"Tìm kiếm khóa học"}
          homepage={"Trang chủ"}
          name={"Tìm kiếm khóa học"}
        />
        <div className="flex px-16 gap-4 py-10 bg-[#eee]">
          <div className=" bg-orange-400 w-1/3 flex justify-center gap-5 py-10 rounded-2xl ">
            <div className=" w-1/2 flex flex-col ">
              <label htmlFor="search-course " className="text-white">
                Nhập thông tin để tìm kiếm khóa học
              </label>
              <input
                type="text"
                className="px-4 py-3 rounded"
                id="search-course"
                placeholder="ID-KIT/ID-Khóa học"
              />
            </div>
            <div className="flex items-start  justify-center pt-[24px]">
              <button className="px-5 py-3 bg-red-600 rounded-sm hover:opacity-85 text-white">
                <span>Tìm kiếm</span>
              </button>
            </div>
          </div>
          <div className="w-2/3">
            <Image
              src={imageSale}
              alt="image-Sale"
              className="object-cover object-center w-full h-56 rounded-2xl"
            />
          </div>
        </div>
        <div className="">
          <span className="text-3xl font-semibold xs:text-2xl uppercase w-full text-center  block pt-10">
            Khóa học
          </span>
          <div className="px-14">
            <div className="px-10 flex flex-col py-10 xl:px-1 ">
              {/* <div className="  flex flex-col">
          <span className="text-xl font-semibold py-10 text-blue-600">
            THỰC HÀNH HỆ THỐNG IoT
          </span>
          <div className="flex   items-center w-full flex-wrap xl:justify-around">
            {courseInforLTN.map((item, index) => {
              return (
                <div className="flex  flex-wrap justify-center items-center w-[24%] mt-2">
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                    key={index}
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
                <div className="flex mt-2  justify-center items-center w-[24%]">
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                    key={index}
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
                <div className="flex justify-center items-center w-[24%] ">
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div> */}

              <div className="  flex flex-col ">
                <span className="text-xl font-semibold pb-10 uppercase text-blue-600">
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
                          isActive={true}
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
                          isActive={true}
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
                          isActive={true}
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
        </div>
      </div>
    </MainLayout>
  );
}
