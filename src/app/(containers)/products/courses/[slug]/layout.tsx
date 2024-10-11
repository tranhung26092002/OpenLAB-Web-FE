"use client";
import React, { useState } from "react";
import MainLayout from "~/components/main-layout";
import Link from "next/link";
import PrivateRouter from "~/components/private-route";
import { MdMenuOpen } from "react-icons/md";

export default function CourseLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { slug: string } }>) {
  console.log(params.slug);
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <PrivateRouter>
      <MainLayout>
        <div className="flex  h-fit min-h-screen">
          <div className="bg-red-500 w-[20%] px-4 py-4">
            <nav>
              <ul>
                <li>
                  <Link href={""}>Giới thiệu</Link>
                </li>
                <li>
                  <Link href={""}>Cấu tạo</Link>
                </li>
                <li>
                  <Link href={""}>Thực hành</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={isOpenMenu ? "w-full  bg-white max-w-full " : "w-[80%]"}>
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
      </MainLayout>
    </PrivateRouter>
  );
}
