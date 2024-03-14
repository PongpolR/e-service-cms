import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import Tiptap from "../tiptap";
import Datepicker from "react-tailwindcss-datepicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import "@/app/style/style.css";

export default function addBannerAnnounce() {
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [image, setImage] = useState(null);
  const [value, onChange] = useState("10:00");
  const [dateStart, setDateStart] = useState({
    startDate: null,
    endDate: null,
  });
  const [dateEnd, setDateEnd] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateStartChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setDateStart(newValue);
  };

  const handleDateEndChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setDateEnd(newValue);
  };

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const removeImage = () => {
    setImage(null);
    setCreateObjectURL(null);
  };

  return (
    <div className="my-3">
      <div className="font-NotoSansThai font-bold text-panel-text mt-6 mb-6">
        เพิ่มประกาศแบบ Banner
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/4">
          ชื่อ Banner
        </div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          defaultValue="ติดโซลาร์รูฟกับ PEA"
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
          defaultValue="ติดโซลาร์รูฟกับ PEA พิเศษสำหรับผู้ที่ติดตั้งในปีนี้"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-6 text-panel-text w-1/4">URL</div>
        <Input
          type="text"
          className="font-NotoSansThai mt-4 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          defaultValue="/banner/image00125.png"
        />
      </div>
      <div className=" flex w-full">
        <div className="font-NotoSansThai mt-6 text-panel-text w-1/5">
          รูปภาพ
        </div>
        <label htmlFor={`addServiceGroup`} className="w-3/4 mt-6">
          <span className="border-0 p-2 cursor-pointer mr-8 -ml-2">
            <span className="pr-0 font-NotoSansThai">
              {createObjectURL === null ? (
                <span className="bg-main text-white rounded px-8 py-2">
                  เพิ่มรูปภาพ
                </span>
              ) : (
                <span>{image?.name}</span>
              )}
            </span>
          </span>
          <FontAwesomeIcon className="ml-2 text-pea-btn" icon={faPenToSquare} />
          <FontAwesomeIcon
            onClick={removeImage}
            className="ml-2 text-pea-btn cursor-pointer"
            icon={faTrashCan}
          />
          <span>
            <input
              onChange={uploadToClient}
              className="w-1"
              id={`addServiceGroup`}
              style={{ visibility: "hidden" }}
              type={"file"}
            />
          </span>
        </label>
      </div>

      {createObjectURL === null ? (
        ""
      ) : (
        <div className="w-full mt-4">
          <div className="flex">
            <div className=" ">
              <Image
                alt="logo upload2"
                className="pl-4 pr-12"
                radius="none"
                src={createObjectURL}
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex w-full mt-6">
        <div className="font-NotoSansThai mt-2 text-panel-text w-1/5 -mr-1">
          เริ่มใช้งาน
        </div>
        <div className="flex w-full mr-4">
          <div
            id="datepicker"
            className="mr-2 ml-6 border-1 font-NotoSansThai rounded-md"
          >
            <Datepicker
              asSingle={true}
              value={dateStart}
              useRange={false}
              onChange={handleDateStartChange}
              placeholder={"เลือกวันที่"}
              displayFormat={"DD/MM/YYYY"}
            />
          </div>
          <div className="-mt-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker className="timepicker" label="เลือกเวลา" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-6">
        <div className="font-NotoSansThai mt-2 text-panel-text w-1/5 -mr-1">
          สิ้นสุดการใช้งาน
        </div>
        <div className="flex w-full mr-4">
          <div
            id="datepicker"
            className="mr-2 ml-6 border-1 font-NotoSansThai rounded-md"
          >
            <Datepicker
              asSingle={true}
              value={dateEnd}
              useRange={false}
              onChange={handleDateEndChange}
              placeholder={"เลือกวันที่"}
              displayFormat={"DD/MM/YYYY"}
            />
          </div>
          <div className="-mt-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker className="timepicker" label="เลือกเวลา" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-6">
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
