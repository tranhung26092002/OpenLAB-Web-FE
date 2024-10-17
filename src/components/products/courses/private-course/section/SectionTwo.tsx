import Image, { StaticImageData } from "next/image";
import React from "react";
type SectionTwoProps = {
  title?: Array<string>;
  contentText?: Array<string>;
  dataImage?: string | StaticImageData;
};
export default function SectionTwo({
  title,
  dataImage,
  contentText,
}: SectionTwoProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <span>{title ? title[0] : ""}</span>
      <div className="flex items-center justify-around">
        <div className="w-1/2">{contentText ? contentText[0] : ""}</div>
        <div>
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
