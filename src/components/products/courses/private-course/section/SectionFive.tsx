import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { dataTab, dataSlide } from "~/types/CustomType";
import { StaticImageData } from "next/image";
type SectionFiveProps = {
  dataTab?: dataTab[];
  title?: Array<string>;
  contentText?: Array<string>;
  dataSlides?: dataSlide[];
  dataImage?: string | StaticImageData;
};
export default function SectionFive({ title, dataTab }: SectionFiveProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-red-300">
      <span className="text-3xl font-semibold">{title ? title[0] : ""}</span>
      <div className="flex justify-center items-center w-full">
        {dataTab && dataTab?.length !== 0 ? (
          <Tabs defaultValue="0" className="w-[57%] bg-red-200 ">
            <TabsList className="w-full bg-[#eee] h-12 flex justify-center rounded">
              {dataTab.map((item, index) => {
                return (
                  <TabsTrigger
                    value={`${index}`}
                    key={index}
                    className="w-fit whitespace-nowrap px-4 h-full rounded data-[state=active]:bg-blue-700 data-[state=active]:text-white py-2"
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
                  className="w-full bg-red-500"
                  key={index}
                >
                  <div className="flex flex-col items-center py-8 gap-4 w-full  bg-green-500">
                    <p className="text-justify w-3/4  bg-yellow-500 block ">
                      {item.description}
                    </p>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
