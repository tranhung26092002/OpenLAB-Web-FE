import React from "react";
import imageSchemaEsp8266 from "~/assets/image/product/course/ltiot/aa3ae50e028ebbd0e29f.jpg";
import { Tooltip } from "react-tooltip";
import { FaPlus } from "react-icons/fa6";
export default function SchemaEsp8266() {
  return (
    <div
      style={{ backgroundImage: `url(${imageSchemaEsp8266.src})` }}
      className="w-[750px] h-[450px]  bg-center bg-contain bg-no-repeat relative"
    >
      <div
        className="absolute text-2xl text-blue-500 bottom-[22%] left-[20%] hover:border-2 hover:border-blue-600"
        data-tooltip-id="my-tooltip1"
      >
      <FaPlus />
      </div>
      <Tooltip
        id="my-tooltip1"
        clickable
        openOnClick
        place="right"
        variant="light"
        className="px-0 py-0"
      >
        <div className="w-96 bg-red-300">
          <span>Are you absolutely sure1?</span>
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>
      </Tooltip>
      <div
        className="absolute text-2xl text-blue-500 top-[14%] left-[52%] shadow-xl rounded-full"
        data-tooltip-id="my-tooltip2"
      >
       <FaPlus />
      </div>
      <Tooltip
        id="my-tooltip2"
        clickable
        openOnClick
        place="bottom"
        variant="light"
      >
        <div>
          <span>Are you absolutely sure2?</span>
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>
      </Tooltip>

      <div
        className="absolute text-2xl text-blue-500 top-[35%] right-[5%]"
        data-tooltip-id="my-tooltip3"
      >
       <FaPlus />
      </div>
      <Tooltip
        id="my-tooltip3"
        clickable
        openOnClick
        place="right"
        variant="light"
      >
        <div>
          <span>Are you absolutely sure3?</span>
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>
      </Tooltip>
    </div>
  );
}
