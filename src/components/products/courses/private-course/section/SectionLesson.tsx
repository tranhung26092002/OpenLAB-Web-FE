import { ContentLesson, indexItemProps } from "~/types/CustomType";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import AccordionExtra from "~/components/products/courses/private-course/section/AccordionExtra";
import { IoMdCheckmark } from "react-icons/io";
import { settings } from "~/configs/settingSlider";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Suspense, useRef } from "react";
type SectionLessonProps = ContentLesson & {
  header?: indexItemProps;
};

const newSettings = {
  ...settings,
  autoplay: false,
  //autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function SectionLesson({
  dataImage,
  dataList2,
  dataList,
  dataMerge,
  header,
  dataPlus,
  dataSlides,
  dataTab,
  dataVideo,
  contentText,
  codeSample,
}: SectionLessonProps) {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="flex flex-col justify-center items-center w-full px-16 xs:px-0">
      {/* header */}
      {header ? (
        <div className="mb-8 flex flex-col gap-6 xs:gap-4 w-full xs:my-4 ">
          <hr className="w-full  border-2 border-red-600 mb-2" />
          <span className="text-2xl font-semibold xs:text-xl ">
            {header?.nameItem}
          </span>
        </div>
      ) : null}

      {/* contentText & dataImage & dataPlus*/}
      {contentText || dataImage || dataPlus ? (
        <div
          className={
            contentText || dataPlus
              ? "flex items-center justify-around xs:flex-col-reverse w-full  xs:gap-4 mb-4"
              : "flex items-center justify-center  w-full  mb-8"
          }
        >
          {contentText || dataPlus ? (
            <div
              className={
                dataImage
                  ? `flex flex-col w-[45%] xs:w-full`
                  : ` xs:w-full flex flex-col w-[55%]`
              }
            >
              {contentText ? (
                <ul className=" ">
                  {contentText.length !== 0
                    ? contentText.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center gap-2 py-4 xs:py-2"
                          >
                            <div className="w-10 h-10 xs:w-8 xs:h-8 rounded-full bg-blue-600 flex justify-center items-center text-white">
                              {index + 1}
                            </div>
                            <span className="w-[90%] text-justify">{item}</span>
                          </li>
                        );
                      })
                    : null}
                </ul>
              ) : null}

              {dataPlus ? (
                <div className="flex flex-col gap-1">
                  <span>{dataPlus.header}</span>
                  {dataPlus?.data?.map((item, index) => {
                    return (
                      <div key={index}>
                        <AccordionExtra
                          content={item.title}
                          description={item.description}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          ) : null}

          {dataImage ? (
            <div
              className={
                contentText || dataPlus
                  ? "w-[55%]  flex flex-col items-center justify-center  xs:w-full"
                  : " w-full  flex flex-col items-center justify-center"
              }
            >
              {dataImage.url && (
                <Image
                  src={dataImage.url as StaticImageData}
                  alt="dataImage"
                  width={500}
                  height={300}
                  className={
                    "h-80 xs:h-72 object-center object-contain w-[80%] xs:w-full"
                  }
                />
              )}
              <span className="flex justify-center items-center w-full">
                {dataImage.title}
              </span>
            </div>
          ) : null}
        </div>
      ) : null}

      {/* dataList & dataList2 */}
      {dataList || dataList2 ? (
        <div className="flex flex-col items-center justify-center mb-8">
          {dataList ? (
            <div className="mb-8 flex flex-col gap-6  w-full ">
              {/* <hr className="w-full  border-2 border-red-600 mb-2" /> */}
              <span className="text-2xl font-semibold xs:text-xl">
                {dataList.header}
              </span>
            </div>
          ) : null}
          {dataList || dataList2 ? (
            <div className=" flex justify-around w-full xs:flex-col">
              {dataList ? (
                <ul>
                  {dataList.data?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center gap-3 py-4 xs:py-2 xs:gap-1 text-justify"
                      >
                        <div className="w-10 h-10 xs:w-8 xs:h-8 rounded-full bg-blue-600 flex justify-center items-center text-white">
                          <IoMdCheckmark />
                        </div>
                        <span className="xs:w-[90%]">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
              {dataList2 ? (
                <ul>
                  {dataList2?.data?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center xs:gap-1 gap-3 xs:py-2 py-4"
                      >
                        <div className="w-10 h-10 xs:w-8 xs:h-8  rounded-full bg-blue-600 flex justify-center items-center text-white">
                          <IoMdCheckmark />
                        </div>
                        <span className="xs:w-[90%]">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      {/* dataMerge */}
      {dataMerge ? (
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="mb-8 flex flex-col gap-6  w-full ">
            {/* <hr className="w-full  border-2 border-red-600 mb-2" /> */}
            <span className="text-2xl font-semibold xs:text-xl ">
              {dataMerge?.header}
            </span>
          </div>
          <div className=" flex justify-around w-full xs:flex-col">
            <div className="w-[45%]  xs:w-full">
              {dataMerge.data?.map((item, index) => {
                return (
                  <div key={index}>
                    <span className="block text-justify">{item.label}</span>
                    <div>
                      {item?.description?.map((item, index) => {
                        return (
                          <div key={index}>
                            <AccordionExtra
                              content={item.title}
                              description={item.description}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-[45%]  xs:w-full">
              {dataMerge.image ? (
                <Image
                  src={dataMerge.image}
                  alt="data-merge"
                  width={500}
                  height={500}
                  className="w-full h-52 xs:h-44 object-center object-contain"
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {/* dataTab */}
      {dataTab ? (
        <div className="flex justify-center flex-col items-center w-full ">
          {dataTab.header ? (
            <span className="flex xs:hidden justify-center items-center w-full text-xl font-semibold mb-8 xs:mb-4">
              {dataTab.header}
            </span>
          ) : null}

          {dataTab && dataTab?.data?.length <= 2 ? (
            <Tabs
              defaultValue="0"
              className="w-full flex flex-col items-center justify-center"
            >
              <TabsList className="w-fit bg-[#eee] h-fit flex justify-center rounded">
                {dataTab?.data?.map((item, index) => {
                  return (
                    <TabsTrigger
                      value={`${index}`}
                      key={index}
                      className=" whitespace-nowrap h-full rounded data-[state=active]:bg-blue-700 data-[state=active]:text-white p-4"
                    >
                      {item.title}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              {dataTab?.data?.map((item, index) => {
                return (
                  <TabsContent
                    value={`${index}`}
                    className="w-full "
                    key={index}
                  >
                    <Suspense>
                      <div className="flex justify-around items-center py-8 gap-4 w-full xs:flex-col">
                        <p className="text-justify w-[30%] block  xs:w-full">
                          {item.description}
                        </p>

                        {item.image ? (
                          <div className="w-[45%] items-center flex justify-center  xs:w-full">
                            <Image
                              src={item.image}
                              alt="data-image-123"
                              width={900}
                              height={500}
                              className="h-80 object-center object-contain w-[60%] xs:h-52 "
                            />
                          </div>
                        ) : null}
                      </div>
                    </Suspense>
                  </TabsContent>
                );
              })}
            </Tabs>
          ) : null}

          {dataTab && dataTab?.data?.length > 2 ? (
            <div className="w-full">
              {dataTab.data.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <AccordionExtra
                      content={item.title}
                      description={item.description}
                    />
                    {item.image ? (
                      <div className="w-[45%] items-center flex justify-center xs:w-full">
                        <Image
                          src={item.image}
                          alt="data-image-123"
                          width={900}
                          height={500}
                          className="h-80 object-center object-contain w-[60%] xs:h-52 "
                        />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      ) : null}

      {/* dataSlides */}
      {dataSlides ? (
        <div className="flex flex-col w-full items-center px-14 xs:px-0 ">
          {dataSlides.title ? (
            <span className="text-xl font-semibold"> {dataSlides.title} </span>
          ) : null}

          <div className="w-full flex justify-between items-center xs:flex-col  ">
            <button
              className=" px-5 py-5 rounded-full bg-black w-fit h-fit xs:hidden "
              onClick={previous}
            >
              <FaAngleLeft className="text-2xl text-white" />
            </button>
            <div className="w-[80%]  xs:w-full">
              <Slider {...newSettings} ref={sliderRef}>
                {dataSlides?.data?.map((item, index) => {
                  return (
                    <div className="my-4" key={index}>
                      <div className="w-full text-center flex flex-col items-center gap-8 xs:gap-2">
                        <span className=" bg-blue-600 text-white px-3 py-2 rounded text-lg font-semibold">
                          Step {index + 1}
                        </span>
                        <div className="w-full flex items-center gap-8">
                          {item.image && (
                            <Image
                              src={item.image}
                              alt="image-description-course"
                              className="rounded w-full h-[400px] xs:h-[200px] object-contain object-center"
                              width={1000}
                              height={1000}
                            />
                          )}
                        </div>
                        <p
                          className="text-justify px-10 xs:px-0"
                          dangerouslySetInnerHTML={{
                            __html: item.description as string,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="hidden xs:flex justify-around items-center xs:w-full ">
              <button
                className=" px-5 py-5 rounded-full bg-black w-fit h-fit  xs:p-2"
                onClick={previous}
              >
                <FaAngleLeft className="text-2xl text-white" />
              </button>
              <button
                className=" px-5 py-5 rounded-full bg-black w-fit h-fit xs:p-2 "
                onClick={next}
              >
                <FaAngleRight className="text-2xl text-white" />
              </button>
            </div>
            <button
              className=" xs:hidden px-5 py-5 rounded-full bg-black w-fit h-fit  "
              onClick={next}
            >
              <FaAngleRight className="text-2xl text-white" />
            </button>
          </div>
        </div>
      ) : null}

      {/* codeSample */}
      {codeSample ? (
        <div className="w-full flex px-10 xs:px-0 ">
          <p dangerouslySetInnerHTML={{ __html: codeSample }}></p>
        </div>
      ) : null}

      {/* dataVideo */}
      {dataVideo ? (
        <div className=" w-full flex justify-center items-center  my-10 xs:my-4 flex-col">
          <iframe
            width="560"
            className="rounded xs:w-full xs:h-[200px]"
            height="315"
            src={dataVideo.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {dataVideo.title ? (
            <span className=" text-xl w-full font-semibold xs:text-base text-center my-4">
              {dataVideo.title}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
