import React from "react";
// import PrivateRouter from '~/components/private-route'
import { FaAngleDown } from "react-icons/fa6";
import imageCourse from "~/assets/image/product/course/ai-ml/0e4ce4245298f5c6ac89.jpg";
import { GoDotFill } from "react-icons/go";
import { BsCameraVideo } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import Link from "next/link";
const data: string[] = [
  "Define 5G and explain its history and evolution",
  "Understand the key 5G requirements and standards",
  "Describe the fundamentals of 5G RAN and CORE",
  "Explore 5G use cases",
  "Evaluate the 5G impact on health and environment",
];
const lessons = [
  "This is 5G",
  "Evolution to 5G",
  "5G Demonstrated",
  "5G Requirements",
  "5G Use Cases",
  "5G System",
  "Network Energy Performance",
  "5G Standardization Forums",
  "Health and Safety",
];
export default function BenerfitCourse({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log("check params: dfsdfsdfsdfsd");
  return (
    <div className=" w-screen max-w-full flex flex-col ">
      <div
        className=" bg-no-repeat bg-cover bg-center px-20 py-10 h-96"
        style={{ backgroundImage: `url(${imageCourse.src})` }}
      >
        <div className="flex  items-center justify-center ">
          <div className="w-fit flex flex-col  justify-center gap-7">
            <div className="flex gap-3  items-center ">
              <div className="border-2 border-white bg-blue-400 px-2 py-2 rounded-full text-white">
                ML
              </div>
              <span className="text-base text-white">Matthew Lace</span>
            </div>
            <div>
              <span className="text-3xl font-semibold text-white">
                5G Fundamentals
              </span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <button className="px-6 py-2 rounded-full bg-white text-sm font-semibold hover:opacity-80">
                START COURSE
              </button>
              <button className="px-6 hover:opacity-80 py-2 text-sm text-white font-semibold rounded-full bg-transparent flex gap-1 items-center justify-center">
                DETAILS
                <FaAngleDown />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 flex justify-center items-center flex-col">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <span className="font-semibold text-base">Description</span>
            <p>This course aims at introducing the basics of 5G technology.</p>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base">
              By the end of this course, you will be able to
            </span>
            <ul>
              {data.map((item, index) => {
                return (
                  <li key={index} className="flex gap-1 items-center">
                    <GoDotFill />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul>
              {lessons.map((item, index) => {
                return (
                  <Link href={`/products/courses/${slug}/${index}`} key={index}>
                    <li className=" flex justify-between items-center hover:bg-gray-300 py-4 px-2">
                      <div className="flex items-center gap-2">
                        <BsCameraVideo />
                        <span className="font-medium text-sm">{item}</span>
                      </div>
                      <FaRegCircle className="text-gray-400 font-semibold" />
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
