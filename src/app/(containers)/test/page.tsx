"use client";
// import dynamic from "next/dynamic";
import AccordionExtra from "~/components/products/courses/private-course/section/AccordionExtra";
import TitleLesson from "~/components/products/courses/private-course/section/TitleLesson";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
// import Image from "next/image";
// import Video from "next-video";
// import awesomeVideo from "videos/about.mp4";
// import awesomePoster from "~/assets/image/about/activity_insite/75c7a1fee3c744991dd6.jpg";
// import { handleGetAllUsers } from "~/services/user/userService";
// const LazyAccordionExtra = dynamic(
//   () => import("~/components/products/courses/(private-course)/AccordionExtra")
// );
import CourseOne from "~/components/products/courses/private-course/content/5g/CourseOne";
export default function TestPage() {
  return (
    <div className="flex flex-col items-center w-screen max-w-full min-h-screen">
      <TitleLesson
        title={"This is 5G"}
        complete={"9"}
        percent={"1"}
        author="Matthew Lace"
      />

      <div className="w-1/4 fl">
        <AccordionExtra
          content={"AMPS"}
          description={
            "Advanced Mobile Phone System (AMPS) was an analog mobile phone system standard originally developed by Bell Labs and later modified in a cooperative effort between Bell Labs and Motorola."
          }
        />
        <AccordionExtra
          content={"AMPS"}
          description={
            "Advanced Mobile Phone System (AMPS) was an analog mobile phone system standard originally developed by Bell Labs and later modified in a cooperative effort between Bell Labs and Motorola."
          }
        />
        <AccordionExtra
          content={"AMPS"}
          description={
            "Advanced Mobile Phone System (AMPS) was an analog mobile phone system standard originally developed by Bell Labs and later modified in a cooperative effort between Bell Labs and Motorola."
          }
        />
        <AccordionExtra
          content={"AMPS"}
          description={
            "Advanced Mobile Phone System (AMPS) was an analog mobile phone system standard originally developed by Bell Labs and later modified in a cooperative effort between Bell Labs and Motorola."
          }
        />
        <audio src="/audio/Test 01.mp3" controls></audio>

        {/* {isContinue && (
          <>
            <LazyAccordionExtra
              content={"AMPS"}
              description={
                "Advanced Mobile Phone System (AMPS) was an analog mobile phone system standard originally developed by Bell Labs and later modified in a cooperative effort between Bell Labs and Motorola."
              }
            />
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
          </>
        )} */}
      </div>
      <CourseOne />
    </div>
  );
}
