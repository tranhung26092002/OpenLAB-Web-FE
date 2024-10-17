"use client";
import Slider from "react-slick";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import React, { Suspense, useRef } from "react";
import { dataTab, dataSlide } from "~/types/CustomType";
import { settings } from "~/configs/settingSlider";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";
type SectionFourProps = {
  dataTab?: dataTab[];
  title?: Array<string>;
  contentText?: Array<string>;
  dataSlides?: dataSlide[];
  dataImage?: string | StaticImageData;
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
export default function SectionFour({
  title,
  dataTab,
  dataImage,
  dataSlides,
  contentText,
}: SectionFourProps) {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  console.log(title);

  return (
    <div className="flex flex-col w-full items-center">
      <div className=" flex justify-around">
        <div className="w-1/2">
          <ul>
            {contentText?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          {dataImage ? (
            <Image
              src={dataImage as StaticImageData}
              alt="dataImage"
              width={500}
              height={100}
              className="w-full h-48 object-center object-fill border-[#8AD9E4] border-2 rounded "
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-3xl font-semibold">{title ? title[0] : ""}</span>
        <div className="flex justify-center items-center">
          {dataTab && dataTab?.length !== 0 ? (
            <Tabs
              defaultValue="0"
              className="w-[70%] flex flex-col items-center "
            >
              <TabsList className=" w-fit  bg-[#eee] h-12 flex justify-center rounded">
                {dataTab.map((item, index) => {
                  return (
                    <TabsTrigger
                      value={`${index}`}
                      key={index}
                      className="w-fit whitespace-nowrap  px-4 h-full rounded data-[state=active]:bg-blue-700 data-[state=active]:text-white py-2"
                    >
                      {item.title}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              {dataTab.map((item, index) => {
                return (
                  <TabsContent
                    value={`${index}`}
                    className="w-full "
                    key={index}
                  >
                    <Suspense>
                      <div className=" flex flex-col items-center py-8 gap-4">
                        {dataImage ? (
                          <Image
                            src={dataImage as StaticImageData}
                            alt="dataImage"
                            width={500}
                            height={100}
                            className="w-3/4 h-80 object-center object-fill border-[#8AD9E4] border-2 rounded "
                          />
                        ) : (
                          <></>
                        )}
                        <p className="text-justify w-3/4 h-32 ">
                          {item.description}
                        </p>
                      </div>
                    </Suspense>
                  </TabsContent>
                );
              })}
            </Tabs>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex flex-col w-[70%] items-center  ">
        <span className="text-3xl font-semibold">{title ? title[1] : ""}</span>
        <div className="w-full relative ">
          <Slider {...newSettings} ref={sliderRef}>
            {dataSlides?.map((item, index) => {
              return (
                <div className="my-4" key={index}>
                  <div className="w-full text-center flex flex-col items-center gap-8 ">
                    <div className="w-full relative">
                      <button
                        className=" absolute top-1/2 z-30  px-2 py-2 rounded left-1"
                        onClick={previous}
                      >
                        <FaAngleLeft className="text-2xl text-white" />
                      </button>
                      <Image
                        src={item.image}
                        alt="image-description-course"
                        className="rounded w-full h-96 object-cover"
                        width={1000}
                        height={100}
                      />
                      <button
                        className="top-1/2 absolute right-2 z-30  px-2 py-2 rounded"
                        onClick={next}
                      >
                        <FaAngleRight className="text-2xl text-white" />
                      </button>
                    </div>
                    <p
                      className="text-justify"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
