import React from "react";
import TitleLesson from "~/components/products/courses/(private-course)/TitleLesson";
type SlideViewProps = {
  emblaRef: React.LegacyRef<HTMLDivElement> | undefined;
  slides: number[];
  complete: string | number;
};
export default function SlideView({
  emblaRef,
  slides,
  complete,
}: SlideViewProps) {
  return (
    <div className="embla__viewport " ref={emblaRef}>
      <div className="embla__container h-screen">
        {slides.map((item, index) => {
          return (
            <div
              className="embla__slide bg-orange-500 flex flex-col h-full"
              key={index}
            >
              <TitleLesson
                title={"This is 5G"}
                complete={complete}
                percent={index + 1}
                author="Matthew Lace"
              />
              <div className="bg-red-500 text-center">centercontent</div>
              <div className="bg-green-500 text-center">bottomcontent</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
