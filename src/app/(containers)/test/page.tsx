"use client";

// import dynamic from "next/dynamic";
import AccordionExtra from "~/components/products/courses/(private-course)/AccordionExtra";
import TitleLesson from "~/components/products/courses/(private-course)/TitleLesson";
import { useFetchApi } from "~/hooks/useFetchApi";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
// import Image from "next/image";
// import Video from "next-video";
// import awesomeVideo from "videos/about.mp4";
// import awesomePoster from "~/assets/image/about/activity_insite/75c7a1fee3c744991dd6.jpg";
// import { handleGetAllUsers } from "~/services/user/userService";
// const LazyAccordionExtra = dynamic(
//   () => import("~/components/products/courses/(private-course)/AccordionExtra")
// );

export default function TestPage() {
  const dataFetchApi = useFetchApi("users", {
    method: "GET",
  });
  const handleCheck = async () => {
    (await dataFetchApi)();
  };
  return (
    <div className="flex flex-col items-center">
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
        <button
          className={`px-3 py-2 bg-blue-500 rounded-sm text-white `}
          onClick={handleCheck}
        >
          Continue
        </button>
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
    </div>
  );
}
