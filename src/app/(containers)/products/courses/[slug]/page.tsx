'use client'
import { StaticImageData } from "next/image";
import React from "react";
import AccordionExtra from "~/components/products/courses/private-course/section/AccordionExtra";
import TitleLesson from "~/components/products/courses/private-course/section/TitleLesson";
import carTechImg from "~/assets/image/course/5g/KttKrAFGkfnR7WRV_OugaeZSszOB1pHPz.jpg";
import { settings } from "~/configs/settingSlider";
import Slider from "react-slick";
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
    image: carTechImg.src,
    description:
      "5G use case can vary to meet different user demands and running applications. Lets take a look at why this is and how this is managed.",
  },
  {
    title: "Network Slicing",
    image: carTechImg.src,
    description:
      "5G use case can vary to meet different user demands and running applications. Lets take a look at why this is and how this is managed.",
  },
  {
    title: "Network Slicing",
    image: carTechImg.src,
    description:
      "5G use case can vary to meet different user demands and running applications. Lets take a look at why this is and how this is managed.",
  },
];
export default function OverviewCourse() {
  return (
    <div className="px-16 flex flex-col justify-center items-center">
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
      <div className="w-[35%] flex justify-center flex-col">
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
      <div>
        <Slider {...newSettings}>
          {dataSlide.map((item, index) => {
            return <div className="my-3" key={index}>

            </div>;
          })}
        </Slider>
      </div>
    </div>
  );
}
