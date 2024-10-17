"use client";
import schema5gimg from "~/assets/image/product/course/5g/schema-5g.png";
// import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { MdMenuOpen } from "react-icons/md";
import { useSWRPrivate } from "~/hooks/useSWRCustom";
import { useSearchParams } from "next/navigation";
import { indexItemProps, ContentLesson } from "~/types/CustomType";
// import TitleLesson from "~/components/products/courses/private-course/section/TitleLesson";
import { useState } from "react";
import SectionOne from "~/components/products/courses/private-course/section/SectionOne";
import SectionTwo from "~/components/products/courses/private-course/section/SectionTwo";
import SectionFour from "~/components/products/courses/private-course/section/SectionFour";
import SectionFive from "~/components/products/courses/private-course/section/SectionFive";
import SectionLast from "~/components/products/courses/private-course/section/SectionLast";
import { BsCameraVideo } from "react-icons/bs";
import SectionThree from "~/components/products/courses/private-course/section/SectionThree";
export default function CourseView() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [isOpenMenu, setOpenMenu] = useState(false);
  const { isLoading, error, data } = useSWRPrivate(`lessons?id=${id}`);
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading course data.</div>;
  const indexItem: indexItemProps[] = data?.payload?.indexItem || [];
  const nameLesson = data?.payload?.name;
  const contentCourse: ContentLesson[] = data?.payload?.content || [];

  return (
    <div
      className={`flex w-full relative ${isOpenMenu ? "justify-end pr-4" : ""}`}
    >
      <div
        className={`w-[19%] h-screen  overflow-y-auto transition-opacity ease-out duration-200 ${
          isOpenMenu
            ? "opacity-100 fixed top-0 left-0 "
            : " opacity-0 pointer-events-none absolute top-0 left-0"
        }`}
      >
        <nav className="flex flex-col">
          <div className="mb-5  relative">
            <Image
              src={schema5gimg}
              alt="Image-5G"
              className="border-2 border-red-500 opacity-60 bg-green-500"
            />
            <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] uppercase font-semibold text-xl ">
              {nameLesson}
            </span>
          </div>
          <ul>
            {indexItem.map((item, index) => {
              return (
                <li
                  key={index}
                  className="py-4 hover:bg-[#eee] rounded-sm pl-4 "
                >
                  <Link
                    href={`#${index}`}
                    className="flex items-center gap-1 font-normal text-sm"
                  >
                    <BsCameraVideo />
                    {item.nameItem}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div
        className={` flex flex-col justify-center transition-all ease-out duration-200 items-center   ${
          isOpenMenu ? "w-[81%] px-4 " : "w-full px-24 z-10"
        }`}
      >
        <div className=" flex w-full ">
          <button
            onClick={() => setOpenMenu(!isOpenMenu)}
            className="px-2 py-2 hover:bg-[#eee] rounded"
          >
            <MdMenuOpen className="text-2xl" />
          </button>
        </div>

        {/* <TitleLesson
          title={nameLesson}
          complete={"9"}
          percent={"1"}
          author="Matthew Lace"
        /> */}
        <div className="w-full">
          {contentCourse && contentCourse.length !== 0 ? (
            contentCourse.map((item, index) => {
              switch (index) {
                case 0:
                  return (
                    <div id={`${index}`}>
                      <SectionOne
                        header={indexItem[0]}
                        title={item.title}
                        dataImage={item.dataImage}
                        dataPlus={item.dataPlus}
                        contentText={item.contentText}
                      />
                    </div>
                  );
                case 1:
                  return (
                    <div id={`${index}`}>
                      <SectionTwo
                        title={item.title}
                        header={indexItem[1]}
                        dataImage={item.dataImage}
                        contentText={item.contentText}
                      />
                    </div>
                  );
                case 2:
                  return (
                    <div id={`${index}`}>
                      <SectionThree
                        dataImage={item.dataImage}
                        header={indexItem[2]}
                        title={item.title}
                        dataList={item.dataList}
                        dataList2={item.dataList2}
                        dataMerge={item.dataMerge}
                      />
                    </div>
                  );
                case 3:
                  return (
                    <div id={`${index}`}>
                      <SectionFour
                        title={item.title}
                        dataImage={item.dataImage}
                        contentText={item.contentText}
                        dataTab={item.dataTab}
                        dataSlides={item.dataSlides}
                        header={indexItem[3]}
                      />
                    </div>
                  );
                case 4:
                  return (
                    <div id={`${index}`}>
                      <SectionFive
                        title={item.title}
                        dataImage={item.dataImage}
                        contentText={item.contentText}
                        dataTab={item.dataTab}
                        dataSlides={item.dataSlides}
                      />
                    </div>
                  );
                case 5:
                  return (
                    <div id={`${index}`}>
                      <SectionLast dataVideo={item.dataVideo} />
                    </div>
                  );
                default:
                  return null;
              }
            })
          ) : (
            <></>
          )}
        </div>

        {/* <div>
          <Image src={schema5gimg} alt={"schema-5g"} />
        </div> */}
      </div>
    </div>
  );
}
