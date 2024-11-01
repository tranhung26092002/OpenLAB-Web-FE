import React from "react";
import imageSchemaEsp8266 from "~/assets/image/product/course/ltiot/aa3ae50e028ebbd0e29f.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { FiPlusCircle } from "react-icons/fi";
export default function SchemaEsp8266() {
  return (
    <div
      style={{ backgroundImage: `url(${imageSchemaEsp8266.src})` }}
      className="w-[700px] h-[350px] border-2 border-red-500 bg-center bg-contain bg-no-repeat relative"
    >
      <Dialog>
        <DialogTrigger>
          <div className="absolute text-2xl text-blue-500 bottom-[22%] left-[20%]">
            <FiPlusCircle />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger>
          <div className="absolute text-2xl text-blue-500 top-[14%] left-[52%]">
            <FiPlusCircle />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger>
          <div className="absolute text-2xl text-blue-500 top-[35%] right-[5%]">
            <FiPlusCircle />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
