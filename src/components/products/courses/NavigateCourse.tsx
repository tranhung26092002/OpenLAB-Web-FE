'use client'
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
const NavigateCourse = () => {
  const [isOpenNaviCourse, setOpenNaviCourse] = useState(true);
  return (
    <div
      className={`flex  min-h-screen transition-all duration-500 ease-in bg-yellow-400 `}
    >
      <div className={`transition-all duration-500 ease-in ${isOpenNaviCourse === true?'block':'hidden'}`}>
        <div className="flex items-center justify-around">
          <span className="">Nội dung bài học</span>
        </div>
        <div>Bài 1: Demo kết quả đạt được</div>
        <div>Bài 2: Yêu cầu trong quá trình học</div>
        <div>Bài 3: Những khái niệm cơ bản</div>
        <div>Bài 4: Toán tử trong Javascript</div>
      </div>
      <div className="px-1 flex justify-center">
        <MdMenuOpen
          className="text-3xl cursor-pointer"
          onClick={() => setOpenNaviCourse(!isOpenNaviCourse)}
        />
      </div>
    </div>
  );
};

export default NavigateCourse;
