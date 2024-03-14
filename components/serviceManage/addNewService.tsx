import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faSearch,
  faPenToSquare,
  faTrashCan,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import Tiptap from "../tiptap";

export default function addNewService() {
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState(["linkout"]);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
      // console.log(image?.name);
    }
  };

  const toggleSelect = (str: any) => {
    if (str === "linkout") {
      // console.log(selected[0]);
      setSelected(selected.slice(1));
    } else if (str === "richtext") {
      // console.log(selected[0]);
      setSelected(selected.slice(1));
    }
    // console.log(selected);
  };

  return (
    <div className="my-3">
      <FontAwesomeIcon
        className="text-xs"
        icon={faBoxArchive}
        style={{ fontSize: "20px" }}
      />
      <span className="font-NotoSansThai text-main font-bold text-xl ml-3 mb-6">
        งานบริหาร
      </span>
      <div className="font-NotoSansThai font-bold text-panel-text mt-6 mb-6">
        เพิ่มงานบริหาร
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/4">
          ชื่อบริการ
        </div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          defaultValue="บริการขอใช้ไฟฟ้าใหม่"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/4">
          คำอธิบาย
        </div>
        <Textarea
          className="font-NotoSansThai mt-2 mr-8"
          id="textarea"
          variant="bordered"
          radius="sm"
          size="xs"
          maxRows={2}
          defaultValue="บริการขอใช้ไฟฟ้าใหม่ ออนไลน์"
        />
      </div>
      <div className=" flex w-full mt-4">
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/5">
          Icon หรือรูปภาพ
        </div>
        <div className="flex">
          <div className=" mr-4"></div>
          <div className=" grid place-content-center ">
            {createObjectURL === null ? (
              <div className="border-1 rounded font-NotoSansThai text-gray-400 px-2 pb-4">
                แสดงรูปตัวอย่าง
              </div>
            ) : (
              <Image
                height={100}
                width={100}
                alt="logo upload2"
                className="object-cover rounded-xl"
                src={createObjectURL}
              />
            )}
          </div>
        </div>
        <label htmlFor={`addServiceGroup`} className="w-3/4 ml-4 ">
          <span className="border-1 p-2 rounded cursor-pointer mr-4">
            <span className="pr-16 font-NotoSansThai">
              {createObjectURL === null ? "Select file..." : image?.name}
            </span>
          </span>
          <span>
            <Button className="bg-pea-btn text-white rounded px-6 mr-4">
              Upload
            </Button>
            <input
              onChange={uploadToClient}
              id={`addServiceGroup`}
              style={{ visibility: "hidden" }}
              type={"file"}
            />
          </span>
        </label>
      </div>
      <div className="flex w-full">
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/5">
          Content Type
        </div>
        <div className="mt-4 font-NotoSansThai">
          <CheckboxGroup
            color="secondary"
            value={selected}
            onValueChange={setSelected}
          >
            <span>
              <Checkbox
                value="linkout"
                radius="full"
                onClick={(e) => toggleSelect("linkout")}
              >
                Linkout
              </Checkbox>
              <Checkbox
                className="ml-2"
                value="rich-text-editor"
                radius="full"
                onClick={(e) => toggleSelect("richtext")}
              >
                Rich Text Editor
              </Checkbox>
            </span>
          </CheckboxGroup>
        </div>
      </div>
      {selected[0] === "linkout" ? (
        <div className="flex justify-between w-full">
          <div className="font-NotoSansThai mt-6 text-panel-text w-1/4">
            URL
          </div>
          <Input
            type="text"
            className="font-NotoSansThai mt-4 mr-8"
            variant="bordered"
            radius="sm"
            size="xs"
            defaultValue="https://eservice.pea.co.th/payment/Menu/"
          />
        </div>
      ) : (
        <>
          <div className="flex justify-between w-full">
            <Tiptap />
          </div>
          <div className="flex justify-between w-full">
            <div className="font-NotoSansThai mt-4 text-panel-text w-1/4">
              URL ปุ่มขอรับบริการ
            </div>
            <Input
              type="text"
              className="font-NotoSansThai mt-2 mr-8"
              variant="bordered"
              radius="sm"
              size="xs"
              defaultValue="https://eservice.pea.co.th/payment/Menu/"
            />
          </div>
        </>
      )}
      <div className="flex w-full mt-4">
        <div className="font-NotoSansThai mt-2 text-panel-text w-1/5 -mr-1">
          Open Mode
        </div>

        <select
          className="font-NotoSansThai px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-1/3 rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium mr-6"
          name="languages"
          id="lang"
        >
          <option value="newtab">New Tab</option>
        </select>
      </div>
      <div className="flex w-full mt-4">
        <div className="font-NotoSansThai mt-2 text-panel-text w-1/5 -mr-1">
          หมวดหมู่
        </div>

        <select
          className="font-NotoSansThai px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-1/3 rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium mr-6"
          name="languages"
          id="lang"
        >
          <option value="other">บริการอื่นๆ</option>
        </select>
      </div>
      <div className="flex w-full mt-4">
        <div className="font-NotoSansThai mt-2 text-panel-text w-1/5 -mr-1">
          การใช้งาน
        </div>

        <select
          className="font-NotoSansThai px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-1/3 rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium mr-6"
          name="languages"
          id="lang"
        >
          <option value="on">เปิดใช้งาน</option>
          <option value="off">ปิดใช้งาน</option>
        </select>
      </div>
      <div className="flex justify-between w-3/4">
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/2">
          อัพเดทวันที่
        </div>
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/2">
          25/11/2566
        </div>
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/2">
          อัพเดทโดย
        </div>
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/2">
          จารุวัฒน์ ศิริพงษ์ชัย
        </div>
      </div>
      <div className="flex justify-between w-3/4">
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/2">
          สร้างวันที่
        </div>
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/2">
          24/11/2566
        </div>
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/2">
          สร้างโดย
        </div>
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/2">
          จารุวัฒน์ ศิริพงษ์ชัย
        </div>
      </div>
    </div>
  );
}
