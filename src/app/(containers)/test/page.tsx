"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import AccordionExtra from "~/components/products/courses/(private-course)/AccordionExtra";
import TitleLesson from "~/components/products/courses/(private-course)/TitleLesson";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
// import Image from "next/image";
// import Video from "next-video";
// import awesomeVideo from "videos/about.mp4";
// import awesomePoster from "~/assets/image/about/activity_insite/75c7a1fee3c744991dd6.jpg";
const LazyAccordionExtra = dynamic(
  () => import("~/components/products/courses/(private-course)/AccordionExtra")
);
export default function TestPage() {
  const [isContinue, setContinue] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
      })
      .catch((e) => {
        console.log("Error is: ", e);
      });
  }, []);
  return (
    <div className="flex flex-col items-center">
      <TitleLesson
        title={"This is 5G"}
        complete={"9"}
        percent={"1"}
        author="Matthew Lace"
      />
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9QeNLypIiZs?si=PER2fGEqtYYy95kO"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
      {/* <Video src={awesomeVideo} width={150} height={150}>
        <Image
          slot="poster"
          src={awesomePoster}
          placeholder="blur"
          alt="Some peeps doing something awesome"
        />
      </Video> */}
      <p>
        In this video, we will cover the evolution of 5G and how this technology
        has developed over the years from 1G to 5G.
      </p>
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
          className={`${
            isContinue === true
              ? "hidden"
              : "px-3 py-2 bg-blue-500 rounded-sm text-white"
          }`}
          onClick={() => setContinue(true)}
        >
          Continue
        </button>
        {isContinue && (
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
        )}
      </div>
    </div>
  );
}
