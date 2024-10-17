"use client";
import PrivateRouter from "~/components/private-route";

export default function CourseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PrivateRouter>
      {/* <NavContact
        contentLeft={
          <Link href={"/"} className="hover:opacity-80 cursor-pointer">
            <span className="flex gap-1 items-center ">OpenLAB</span>
          </Link>
        }
      /> */}
      <div className="flex items-start h-screen w-screen min-w-full">{children}</div>
    </PrivateRouter>
  );
}
