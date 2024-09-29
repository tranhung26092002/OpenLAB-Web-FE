"use client";
import { MdMenuOpen } from "react-icons/md";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useState } from "react";
import SlideView from "~/components/custom/embla-carousel/SlideView";
import Link from "next/link";
import { unitCourse } from "~/app/(containers)/products/courses/[slug]/page";
import {
  DotButton,
  useDotButton,
} from "~/components/custom/embla-carousel/DotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "~/components/custom/embla-carousel/ArrowButton";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  contentNav: unitCourse[];
};

export default function LayoutCarousel({
  slides,
  options,
  contentNav,
}: PropType) {

  
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const [isOpenNaviCourse, setOpenNaviCourse] = useState(false);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla w-screen h-screen  flex relative gap-3">
      <div
        className={`embla__dots flex flex-col z-10  justify-start bg-[#eee] w-[30%] transition-all shrink duration-200 ease-in items-start h-screen xs:w-[80%] ${
          isOpenNaviCourse === true ? "xs:absolute translate-x-0 " : "absolute translate-x-[-86%] "
        }`}
      >
        <div className="px-2 flex justify-end w-full">
          <MdMenuOpen
            className="text-3xl cursor-pointer"
            onClick={() => setOpenNaviCourse(!isOpenNaviCourse)}
          />
        </div>
        {contentNav.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot justify-start pl-2 py-1 w-full".concat(
              index === selectedIndex
                ? " embla__dot--selected  rounded-none".concat(
                    isOpenNaviCourse === false ? " bg-[#eee]" : " bg-white"
                  )
                : " "
            )}
          >
            <span>{`Bài ${index + 1}: ${_.title} `}</span>
          </DotButton>
        ))}
        <Link href="/kitb">
          <div className="py-5 px-2">Dashboard</div>
        </Link>
      </div>

      <div className="flex flex-col w-full h-full bg-blue-500 grow transition-all  duration-200 ease-in">
        {selectedIndex === 0 ? (
          <></>
        ) : (
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="w-full h-10 bg-yellow-500 flex justify-center items-center"
          >
            <span>Lesson {`${selectedIndex}`}</span>
          </PrevButton>
        )}

        <SlideView
          emblaRef={emblaRef}
          slides={slides}
          complete={scrollSnaps.length}
        />

        {selectedIndex + 1 === scrollSnaps.length ? (
          <></>
        ) : (
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="w-full h-10 bg-yellow-500 flex justify-center items-center"
          >
            <span>Lesson {`${selectedIndex + 2}`}</span>
          </NextButton>
        )}
      </div>
    </div>
  );
}
