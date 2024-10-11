"use client";
import { StaticImageData } from "next/image";
import React, { Suspense, useRef } from "react";
import AccordionExtra from "~/components/products/courses/private-course/section/AccordionExtra";
import TitleLesson from "~/components/products/courses/private-course/section/TitleLesson";
import carTechImg from "~/assets/image/course/5g/KttKrAFGkfnR7WRV_OugaeZSszOB1pHPz.jpg";
import { settings } from "~/configs/settingSlider";
import schema5gimg from "~/assets/image/product/course/5g/schema-5g.png";
import Slider from "react-slick";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
type dataTest = {
  title: string;
  image: string | StaticImageData;
  description: string;
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
const dataSlide: dataTest[] = [
  {
    title: "Network Slicing",
    image: carTechImg,
    description:
      "5G use case can vary to meet different user demands and running applications. Lets take a look at why this is and how this is managed.",
  },
  {
    title: "Network Slicing",
    image: carTechImg,
    description:
      "5G use case can vary to meet different user demands and running applications. Lets take a look at why this is and how this is managed.",
  },
  {
    title: "Network Slicing",
    image: carTechImg,
    description:
      "5G use case can vary to meet different user demands and running applications. Lets take a look at why this is and how this is managed.",
  },
];
export default function OverviewCourse() {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="px-16 flex flex-col justify-center items-center w-full ">
      <TitleLesson
        title={"This is 5G"}
        complete={"9"}
        percent={"1"}
        author="Matthew Lace"
      />

      <div>
        <p className=" text-justify">
          Welcome to the 5G Fundamentals course! 5G plays a very important role
          in providing connectivity to the digital transformation ecosystem.
          Watch the video below to get familiar with 5G.
        </p>
      </div>
      <div className="w-[40%] flex justify-center flex-col">
        <AccordionExtra
          content={"AMPS"}
          description={
            "Advanced Mobile Phone System (AMPS) was an analog mobile phone system standard originally developed by Bell Labs and later modified in a cooperative effort between Bell Labs and Motorola."
          }
        />
        <AccordionExtra
          content={"AMPS"}
          description={
            "Advanced Mobile Phone System (AMPS) was an analog mobile phone system standard originally developed by Bell Labs and later modified in a cooperative effort between Bell Labs and Motorola."
          }
        />
        <AccordionExtra
          content={"AMPS"}
          description={
            "Advanced Mobile Phone System (AMPS) was an analog mobile phone system standard originally developed by Bell Labs and later modified in a cooperative effort between Bell Labs and Motorola."
          }
        />
        <AccordionExtra
          content={"AMPS"}
          description={
            "Advanced Mobile Phone System (AMPS) was an analog mobile phone system standard originally developed by Bell Labs and later modified in a cooperative effort between Bell Labs and Motorola."
          }
        />
      </div>
      <div className="w-full relative">
        <button
          className=" absolute top-1/2 z-30  px-2 py-2 rounded left-1"
          onClick={previous}
        >
          <FaAngleLeft className="text-2xl text-white" />
        </button>
        <Slider {...newSettings} ref={sliderRef}>
          {dataSlide.map((item, index) => {
            return (
              <div className="my-4" key={index}>
                <div className="w-full text-center">
                  <span>{item.title}</span>
                  <Image src={item.image} alt="image-description-course" className="rounded" />
                  <p className="text-justify">{item.description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        <button
          className="top-1/2 absolute right-2 z-30  px-2 py-2 rounded"
          onClick={next}
        >
          <FaAngleRight className="text-2xl text-white" />
        </button>
      </div>
      <div>
        <Image src={schema5gimg} alt={"schema-5g"} />
      </div>
      <div>
        <Tabs defaultValue="login" className="w-full ">
          <TabsList className=" w-full bg-[#eee] h-12">
            <TabsTrigger
              value="login"
              className="w-1/2  data-[state=active]:bg-white data-[state=active]:text-blue-600 py-2"
            >
              Network Energy Performance
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="w-1/2 data-[state=active]:bg-white data-[state=active]:text-blue-600 py-2"
            >
              Ultra-Lean Design
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className=" w-full">
            <Suspense>
              <div>
                <ul>
                  <li className="flex items-center gap-1">
                    <GoDotFill /> Network energy performance is crucial part of
                    the 5G network
                  </li>
                  <li className="flex items-center gap-1">
                    <GoDotFill />
                    Energy consumption is not related to network load
                  </li>
                  <li className="flex items-center gap-1">
                    <GoDotFill /> By reducing the networks energy consumption,
                    we can reduce costs while being more sustainable
                  </li>
                </ul>
              </div>
            </Suspense>
          </TabsContent>
          <TabsContent value="register" className=" w-full">
            <Suspense>
              <div>
                <ul>
                  <li className="flex items-center gap-1">
                    <GoDotFill />
                    Balance between the load and efficiency
                  </li>
                  <li className="flex items-center gap-1">
                    <GoDotFill /> Minimizes network transmissions that are not
                    directly related to user-data delivery
                  </li>
                  <li className="flex items-center gap-1">
                    <GoDotFill /> Future-proof design that is energy efficient
                    and minimizes interference
                  </li>
                </ul>
              </div>
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
