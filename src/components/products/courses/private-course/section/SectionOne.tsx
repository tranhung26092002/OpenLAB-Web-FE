import React from "react";
import { dataPlusProps } from "~/types/CustomType";
import Image, { StaticImageData } from "next/image";
import AccordionExtra from "~/components/products/courses/private-course/section/AccordionExtra";
type SectionOneProps = {
  title?: Array<string>;
  dataPlus?: dataPlusProps[];
  contentText?: Array<string>;
  dataImage?: string | StaticImageData;
};
export default function SectionOne({
  title,
  dataImage,
  dataPlus,
  contentText,
}: SectionOneProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <span>{title ? title[0] : ""}</span>
      <div className="flex items-center justify-around w-full">
        <div className="flex flex-col w-1/2 ">
          <span>{contentText ? contentText[0] : ""}</span>
          <div className="flex flex-col gap-1">
            {dataPlus?.map((item, index) => {
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
        <div className="">
          <Image
            src={dataImage as StaticImageData}
            alt="dataImage"
            width={500}
            height={100}
            className="w-full h-48 object-center object-fill border-[#8AD9E4] border-2 rounded "
          />
        </div>
      </div>
    </div>
  );
}
