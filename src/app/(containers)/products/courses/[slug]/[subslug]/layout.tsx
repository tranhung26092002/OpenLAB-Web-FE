"use client";
import React, { useState } from "react";

import Link from "next/link";
import PrivateRouter from "~/components/private-route";
import { MdMenuOpen } from "react-icons/md";
import Image from "next/image";
import schema5gimg from "~/assets/image/product/course/5g/schema-5g.png";
export default function CourseLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { slug: string } }>) {
  const { slug } = params;
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <PrivateRouter>
        <div className="flex  h-fit min-h-screen">
          <div className=" w-[20%] px-4 py-4">
            <nav className="flex flex-col">
              <div>
                <Image src={schema5gimg} alt="Image-5G" className="border-2 border-red-500" />
              </div>
              <ul>
                <li>
                  <Link href={`/products/courses/${slug}/lesson1`}>
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link href={`/products/courses/${slug}/lesson2`}>
                    Cấu tạo
                  </Link>
                </li>
                <li>
                  <Link href={`/products/courses/${slug}/lesson3`}>
                    Nguyên lí hoạt động
                  </Link>
                </li>
                <li>
                  <Link href={`/products/courses/${slug}/lesson4`}>
                    thực hành
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={isOpenMenu ? "w-full  bg-white max-w-full " : "w-[80%]"}
          >
            <div>
              <button
                onClick={() => setOpenMenu(!isOpenMenu)}
                className="px-2 py-2"
              >
                <MdMenuOpen className="text-2xl" />
              </button>
              {children}
            </div>
          </div>
        </div>
    </PrivateRouter>
  );
}
