import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import Tiptap from "../tiptap";
import Datepicker from "react-tailwindcss-datepicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import "@/app/style/style.css";

export default function addTextAnnounce() {
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [image, setImage] = useState(null);
  const [value, onChange] = useState("10:00");
  const [selected, setSelected] = useState(["linkout"]);
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
      <div className="font-NotoSansThai font-bold text-panel-text mt-6 mb-6">
        เพิ่มประกาศแบบข้อความ
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 text-panel-text w-1/4">
          ชื่อประกาศ
        </div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          defaultValue="เดือนธันวาคมนี้ PEA มีสิทธิพิเศษสำหรับผู้ติดตั้งมิเตอร์ใหม่"
        />
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
        <>
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
              defaultValue="https://eservice.pea.co.th/Announement/Message/12"
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="font-NotoSansThai mt-6 text-panel-text w-1/4">
              ข้อความบนปุ่มกด
            </div>
            <Input
              type="text"
              className="font-NotoSansThai mt-4 mr-8"
              variant="bordered"
              radius="sm"
              size="xs"
              defaultValue="ดูเพิ่มเติม"
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between w-full">
            <Tiptap />
          </div>
        </>
      )}

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
      <div className="flex w-full mt-6">
        <div className="font-NotoSansThai mt-2 text-panel-text w-1/5 -mr-1">
          เริ่มใช้งาน
        </div>
        <div className="flex w-full mr-4">
          <div
            id="datepicker"
            className="mr-2 ml-6 font-NotoSansThai rounded-md"
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
