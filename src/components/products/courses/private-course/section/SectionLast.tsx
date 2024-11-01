import React from "react";
type SectionLastProps = {
  dataVideo?: string;
};
export default function SectionLast({ dataVideo }: SectionLastProps) {
  return (
    <div className=" w-full flex justify-center items-center">
      <iframe
        width="560"
        height="315"
        src={dataVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

