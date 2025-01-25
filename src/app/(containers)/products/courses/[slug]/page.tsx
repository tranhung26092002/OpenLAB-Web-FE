"use client";
import schema5gimg from "~/assets/image/product/course/5g/schema-5g.png";
import Link from "next/link";
import Image from "next/image";
import { MdMenuOpen } from "react-icons/md";
import { useSWRPrivate } from "~/hooks/useSWRCustom";
import { useSearchParams } from "next/navigation";
import { use } from "react";
import { ContentLesson, indexItemProps } from "~/types/CustomType";
import { useState } from "react";
import { BsCameraVideo } from "react-icons/bs";
import MainLayout from "~/components/main-layout";
import TooltipAvatar from "~/components/custom/TooltipAvatar";
import SectionLesson from "~/components/products/courses/private-course/section/SectionLesson";

type ArrLessons = {
  _id: string;
  name: string;
};
export default function CourseView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const param = use(params);
  const slug = param.slug;
  const [isOpenMenu, setOpenMenu] = useState(true);
  const [isContinue, setContinue] = useState(false);
  const {
    isLoading: isLoadingLesson,
    error: errorLesson,
    data: dataLesson,
  } = useSWRPrivate(`lessons?id=${id}`);
  const {
    isLoading: isLoadingCourse,
    error: errorCourse,
    data: dataCourse,
  } = useSWRPrivate(`courses/${slug}?isActive=${true}`);
  // const fetcher = useFetchApi(`lessons?id=${id}`);
  if (isLoadingLesson || isLoadingCourse) return <div>Loading...</div>;
  if (errorLesson || errorCourse) return <div>Error loading course data.</div>;
  const indexItem: indexItemProps[] = dataLesson?.payload?.indexItem || [];
  const nameLesson = dataLesson?.payload?.name;
  const contentCourse: ContentLesson[] = dataLesson?.payload?.content || [];
  const arrayLessons: ArrLessons[] = dataCourse?.payload.lessons;
  console.log(arrayLessons);

  // const handleContinue = () => {
  //   setContinue(true);
  //   console.log("check value scroll y outside if:", window.scrollY);
  //   if (window.scrollY > 0 && isContinue === true) {
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //     console.log("Vị trí cuộn sau khi cuộn lại:", window.scrollY);
  //   }
  // };

  return (
    <MainLayout authPage={true}>
      <div className={`flex w-full  ${isOpenMenu ? "justify-end " : ""}`}>
        <div
          className={`w-[21%] h-screen z-20 bg-white overflow-y-auto transition-opacity ease-out duration-200 ${
            isOpenMenu
              ? "opacity-100 fixed top-0 left-0 xs:w-[85%]  "
              : "opacity-0 pointer-events-none absolute left-0"
          }`}
        >
          <nav className="flex flex-col">
            <div className="mb-5 flex flex-col gap-5 ">
              <Image src={schema5gimg} alt="Image-5G" className="border-2" />
              <span className="uppercase font-semibold text-xl ">
                {nameLesson}
              </span>
            </div>

            <ul>
              <li className="py-2 hover:bg-[#eee] cursor-pointer rounded-sm pl-3 font-normal text-sm flex items-center gap-1 ">
                <BsCameraVideo /> Mục lục
              </li>
              {indexItem.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="py-2 hover:bg-[#eee] rounded-sm pl-3 "
                  >
                    <Link
                      href={`#${index}`}
                      className="flex items-center gap-1 font-normal text-sm "
                    >
                      <BsCameraVideo />
                      {item.nameItem}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="mb-4">
              {arrayLessons
                ?.filter((item) => item._id !== id)
                .map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/products/courses/khoa-hoc-thuc-hanh-esp8266?id=${item._id}`}
                    >
                      <li className="uppercase font-semibold text-sm py-2 hover:bg-[#eee] rounded-sm pl-3 xs:px-3">
                        {item.name}
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </nav>
        </div>

        <div
          className={` flex flex-col  justify-center transition-all ease-out duration-200 items-center  ${
            isOpenMenu ? "w-[79%] xs:w-full  " : "w-full z-10"
          }`}
        >
          <div className=" flex w-full xs:p-3 px-5 py-3 bg-[#eee] justify-between items-center xs:flex-row-reverse">
            <button
              onClick={() => setOpenMenu(!isOpenMenu)}
              className="px-2 py-2 hover:bg-blue-500 rounded"
            >
              <MdMenuOpen className="text-2xl " />
            </button>
            <Link
              href={"/"}
              className="uppercase px-4 font-semibold hover:text-blue-400"
            >
              Home
            </Link>
            <div>
              <TooltipAvatar />
            </div>
          </div>

          <div
            className={
              isOpenMenu
                ? "w-full px-0 flex flex-col items-center justify-center"
                : "w-full px-24 flex flex-col items-center justify-center xs:px-5"
            }
          >
            {contentCourse && contentCourse.length !== 0 ? (
              <div className="w-full flex flex-col items-center justify-center">
                {isContinue === false && (
                  <div className="px-16 xs:px-0 pt-8 w-full xs:space-y-5">
                    <span className="font-semibold block uppercase text-2xl w-full text-center xs:text-lg">
                      {nameLesson}
                    </span>
                    <ul>
                      {indexItem.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="py-4 hover:bg-[#eee] rounded-sm pl-3 xs:py-2 xs:px-0"
                          >
                            <Link
                              href={`#${index}`}
                              className="flex items-center gap-1 text-base font-semibold "
                            >
                              <BsCameraVideo /> {item.nameItem}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    {/* <hr className="w-full border-2 border-red-600 mt-2" /> */}
                  </div>
                )}

                {contentCourse.map((item, index) => {
                  if (index < 3) {
                    return isContinue === false ? (
                      <div className="w-full" key={index} id={`${index}`}>
                        <SectionLesson
                          header={indexItem[index]}
                          dataImage={item.dataImage}
                          contentText={item.contentText}
                          dataVideo={item.dataVideo}
                          dataTab={item.dataTab}
                          dataSlides={item.dataSlides}
                          dataList2={item.dataList2}
                          dataMerge={item.dataMerge}
                          dataList={item.dataList}
                          codeSample={item.codeSample}
                          dataPlus={item.dataPlus}
                        />
                      </div>
                    ) : null;
                  }
                  if (index === 3) {
                    return isContinue === false ? (
                      <div className="w-full" key={index} id={`${index}`}>
                        <SectionLesson
                          header={indexItem[index]}
                          dataImage={item.dataImage}
                          contentText={item.contentText}
                          dataVideo={item.dataVideo}
                          dataTab={item.dataTab}
                          dataSlides={item.dataSlides}
                          dataList2={item.dataList2}
                          dataMerge={item.dataMerge}
                          dataList={item.dataList}
                          codeSample={item.codeSample}
                          dataPlus={item.dataPlus}
                        />
                        <div className="py-10 w-full flex justify-center items-center ">
                          <Link
                            href={`#${index + 1}`}
                            className="bg-blue-500 xs:w-2/3  w-1/3 xs:px-14 py-4 rounded text-white text-lg flex justify-center items-center"
                            onClick={() => setContinue(true)}
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    ) : null;
                  }
                  if (index === 4) {
                    return isContinue === true ? (
                      <div className="w-full" key={index} id={`${index}`}>
                        <div className=" w-full flex justify-center items-center">
                          <button
                            className="bg-blue-500 xs:w-2/3  w-1/3 xs:px-14 rounded py-4 text-white text-lg flex justify-center items-center mb-10 xs:mb-4"
                            onClick={() => setContinue(false)}
                          >
                            Back
                          </button>
                        </div>
                        <SectionLesson
                          header={indexItem[index]}
                          dataImage={item.dataImage}
                          contentText={item.contentText}
                          dataVideo={item.dataVideo}
                          dataTab={item.dataTab}
                          dataSlides={item.dataSlides}
                          dataList2={item.dataList2}
                          dataMerge={item.dataMerge}
                          dataList={item.dataList}
                          codeSample={item.codeSample}
                          dataPlus={item.dataPlus}
                        />
                      </div>
                    ) : null;
                  } else {
                    return isContinue === true ? (
                      <div className="w-full" key={index} id={`${index}`}>
                        <SectionLesson
                          header={indexItem[index]}
                          dataImage={item.dataImage}
                          contentText={item.contentText}
                          dataVideo={item.dataVideo}
                          dataTab={item.dataTab}
                          dataSlides={item.dataSlides}
                          dataList2={item.dataList2}
                          dataMerge={item.dataMerge}
                          dataList={item.dataList}
                          codeSample={item.codeSample}
                          dataPlus={item.dataPlus}
                        />
                      </div>
                    ) : null;
                  }
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
