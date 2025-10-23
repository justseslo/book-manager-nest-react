import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

function AddBookPage() {
  const [status, setStatus] = useState<"to read" | "read" | "reading">(
    "to read"
  );
  return (
    <div className="w-full mt-10 flex shadow-2xl shadow-gray-500 border border-black/10 rounded-2xl">
      <div className="bg-gradient-to-br rounded-tl-2xl rounded-bl-2xl  from-violet-700  to-rose-400  min-w-lg "></div>
      <form
        action=""
        className="bg-white  flex-col w-full rounded-tr-2xl rounded-br-2xl px-5"
      >
        <h1 className="text-5xl bg-gradient-to-br mt-5  from-violet-700 to-rose-400 bg-clip-text text-transparent text-center ">
          Add New Book
        </h1>
        <div className="flex flex-col gap-5 mt-10 py-10">
          <div className="flex gap-3 justify-between ">
            <Label htmlFor="" className="text-slate-800 text-3xl">
              Title:
            </Label>
            <Input
              type="text"
              className="border-violet-600 border-2 rounded-md text-xl shadow-2xl w-3/4 py-6"
              placeholder="Enter title..."
              required
            />
          </div>
          <div className="flex gap-3 justify-between">
            <Label htmlFor="" className="text-slate-800 text-3xl">
              Author:
            </Label>
            <Input
              type="text"
              className="border-violet-600 border-2 rounded-md text-xl shadow-2xl w-3/4 py-6"
              placeholder="Enter author name..."
              required
            />
          </div>
          <div className="flex gap-3 justify-between">
            <Label htmlFor="" className="text-slate-800 text-3xl">
              Image Url:
            </Label>
            <Input
              type="text"
              className="border-violet-600 border-2 rounded-md text-xl shadow-2xl w-3/4 py-6"
              placeholder="Enter image url..."
              required
            />
          </div>
          <div className="flex gap-3 justify-between">
            <Label htmlFor="" className="text-slate-800 text-3xl">
              Status:
            </Label>
            <NativeSelect
              className="border-violet-600 border-2 rounded-md text-xl shadow-2xl"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value as "to read" | "read" | "reading");
              }}
            >
              <NativeSelectOption value={"to read"}>To Read</NativeSelectOption>
              <NativeSelectOption value={"reading"}>Reading</NativeSelectOption>
              <NativeSelectOption value={"read"}>Read</NativeSelectOption>
            </NativeSelect>
          </div>
          <div className="flex gap-3 justify-between">
            <Label htmlFor="" className="text-slate-800 text-3xl">
              Comment:
            </Label>
            <Textarea
              className="border-violet-600 border-2 rounded-md text-xl shadow-2xl w-3/4"
              placeholder={
                status === "to read"
                  ? "Your thoughts before reading(optional)"
                  : status === "reading"
                  ? "Your first comment(optional)"
                  : "Your thoughts after reading(optional)"
              }
            ></Textarea>
          </div>
          <div className="flex justify-center mt-10">
            <Button className="bg-violet-700 w-3/4 py-5 font-bold text-2xl hover:bg-violet-800 cursor-pointer">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBookPage;
