import MainLayout from "~/components/main-layout";
import React from "react";

import LayoutCarousel from "~/components/custom/embla-carousel/LayoutCarousel";
import { EmblaOptionsType } from "embla-carousel";
const optionCarousel: EmblaOptionsType = {
  axis: "y",
};
export type unitCourse = {
  title: string;
  subtitle?: string;
  subtitle2?: string;
};
const contentNav: unitCourse[] = [
  {
    title: "Demo kết quả đạt được",
  },
  {
    title: "Yêu cầu trong quá trình học",
  },
  {
    title: "Những khái niệm cơ bản",
  },
  {
    title: "Toán tử trong Javascript",
  },
  {
    title: "Khai báo trong Javascript",
  },
  
];
export default function CoursePage() {
  return (
    <MainLayout authPage={false}>
      <div className=" flex min-h-screen">
        <div className="flex items-center justify-center w-full">
          <LayoutCarousel
            slides={[1, 2, 3, 4, 5]}
            options={optionCarousel}
            contentNav={contentNav}
            //    className=" bg-red-500 "
          />
        </div>
      </div>
    </MainLayout>
  );
}
