import React from "react";
import MainLayout from "~/components/main-layout";
import Link from "next/link";
import PrivateRouter from "~/components/private-route";
export default function CourseLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { slug: string } }>) {
  console.log(params.slug);
  
  return (
    <PrivateRouter>
      <MainLayout>
        <div>
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
        <div>{children}</div>
      </MainLayout>
    </PrivateRouter>
  );
}
