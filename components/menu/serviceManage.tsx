import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faSearch,
  faPenToSquare,
  faTrashCan,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup } from "@nextui-org/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import AddNewService from "../serviceManage/addNewService";

export default function serviceManage() {
  const columns = [
    {
      key: "key",
      label: "ลำดับที่",
    },
    {
      key: "name",
      label: "ชื่อบริการ",
    },
    {
      key: "category",
      label: "หมวดหมู่",
    },
    {
      key: "status",
      label: "สถานะการใช้งาน",
    },
    {
      key: "manage",
      label: "จัดการ",
    },
  ];
  const rows = [
    {
      key: "1",
      name: "บริการขอใช้ไฟฟ้าใหม่",
      category: "ลูกค้าอยู่บ้านอาศัย",
      status: "เปิดใช้งาน",
    },
    {
      key: "2",
      name: "บริการรับชำระค่าไฟฟ้า",
      category: "ลูกค้าอยู่บ้านอาศัย",
      status: "เปิดใช้งาน",
    },
    {
      key: "3",
      name: "PEA e-Bill",
      category: "ลูกค้าอยู่บ้านอาศัย",
      status: "เปิดใช้งาน",
    },
    {
      key: "4",
      name: "บริการลงทะเบียนขอผ่อนชำระค่าไฟฟ้า",
      category: "ลูกค้าอยู่บ้านอาศัย",
      status: "เปิดใช้งาน",
    },
    {
      key: "5",
      name: "บริการสอบถามประวัติการใช้ไฟฟ้า",
      category: "ลูกค้าอยู่บ้านอาศัย",
      status: "เปิดใช้งาน",
    },
    {
      key: "6",
      name: "บริการประมาณการค่าไฟฟ้า",
      category: "ลูกค้าอยู่บ้านอาศัย",
      status: "เปิดใช้งาน",
    },
    {
      key: "7",
      name: "บริการขอคืนเงินประกันการใช้ไฟฟ้า",
      category: "ลูกค้าอยู่บ้านอาศัย",
      status: "เปิดใช้งาน",
    },
    {
      key: "8",
      name: "ติดตามสถานะ",
      category: "ลูกค้าอยู่บ้านอาศัย",
      status: "เปิดใช้งาน",
    },
    {
      key: "9",
      name: "แนะนำ/ร้องเรียน",
      category: "ลูกค้าอยู่บ้านอาศัย",
      status: "เปิดใช้งาน",
    },
    {
      key: "10",
      name: "บริการขอใช้ไฟฟ้าใหม่",
      category: "ลูกค้าธุรกิจ/อุตสาหกรรม/ราชการ",
      status: "เปิดใช้งาน",
    },
  ];

  const [data, setData] = useState(rows);
  const [toggleAddService, setToggleAddService] = useState(false);

  function addService() {
    setToggleAddService(!toggleAddService);
  }

  return (
    <>
      {toggleAddService === false ? (
        <div className="my-3">
          <FontAwesomeIcon
            className="text-xs"
            icon={faScrewdriverWrench}
            style={{ fontSize: "20px" }}
          />
          <span className="font-NotoSansThai text-main font-bold text-xl ml-3 mb-6">
            งานบริการ
          </span>
          <div className="font-NotoSansThai font-bold text-panel-text mt-6 mb-6">
            กำหนดงานบริการ
          </div>
          <div className="flex">
            <div className="w-1/2 mr-4">
              <div className="font-NotoSansThai">คำค้นหา</div>
              <input
                type="text"
                className="font-NotoSansThai mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-full rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium"
              />
            </div>
            <div className="w-1/2 mr-4">
              <div className="font-NotoSansThai">หมวดหมู่</div>
              <select
                className="font-NotoSansThai mb-3 px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-full rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium"
                name="languages"
                id="lang"
              >
                <option value="other">บริการอื่นๆ</option>
              </select>
            </div>
          </div>
          <div className="flex mt-6">
            <div className="w-1/2 mr-4 pr-4">
              <div className="font-NotoSansThai">สถานะการใช้งาน</div>
              <select
                className="font-NotoSansThai mb-3 px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-full rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium"
                name="languages"
                id="lang"
              >
                <option value="on">เปิดใช้งาน</option>
                <option value="off">ปิดใช้งาน</option>
              </select>
            </div>
          </div>
          <div className="flex mt-6 mb-6 w-full justify-center">
            <Button
              className="bg-white border-1 font-NotoSansThai px-12 text-pea-border font-normal  border-pea-border mr-2"
              radius="sm"
            >
              เคลียร์ค่า
            </Button>
            <Button
              className="ml-2 bg-main text-white font-normal font-NotoSansThai px-12 mr-4"
              radius="sm"
            >
              <span>
                <FontAwesomeIcon
                  className="text-xs"
                  icon={faSearch}
                  style={{ fontSize: "16px" }}
                />
              </span>
              <span>ค้นหา</span>
            </Button>
          </div>
          <div className="my-5 flex justify-between w-full">
            <div className="w-1"></div>
            <button className="mt-2 mr-8" onClick={addService}>
              <FontAwesomeIcon
                className="text-xs"
                icon={faSquarePlus}
                style={{ fontSize: "20px", color: "#B58E38" }}
              />
              <span className="font-NotoSansThai text-pea-btn ml-2">
                เพิ่มงานบริการ
              </span>
            </button>
          </div>
          <Table
            removeWrapper
            aria-label="Example table with dynamic content"
            className="font-NotoSansThai pr-4"
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.key}
                  className="bg-main text-white font-normal"
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={data}>
              {(item) => (
                <TableRow className="border-b-1" key={item.key}>
                  <TableCell className="py-6">
                    <span className="border-1 px-4 py-2 border-gray-400 rounded-md">
                      {item.key}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span>{item.name}</span>
                  </TableCell>
                  <TableCell>
                    <select
                      className="font-NotoSansThai px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-full rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium"
                      name="languages"
                      id="lang"
                    >
                      <option value="other">{item.category}</option>
                    </select>
                  </TableCell>
                  <TableCell>
                    <select
                      className="font-NotoSansThai px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-full rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium"
                      name="languages"
                      id="lang"
                    >
                      <option value="on">{item.status}</option>
                      <option value="off">ปิดใช้งาน</option>
                    </select>
                  </TableCell>
                  <TableCell className="flex">
                    <button>
                      <FontAwesomeIcon
                        className="text-xs text-pea-btn mt-4  mr-2"
                        icon={faPenToSquare}
                        style={{ fontSize: "20px" }}
                      />
                    </button>
                    <button>
                      <FontAwesomeIcon
                        className="text-xs text-pea-btn mt-4"
                        icon={faTrashCan}
                        style={{ fontSize: "20px" }}
                      />
                    </button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      ) : (
        <>
          <AddNewService />
          <div className="flex mt-12 mb-6 w-full justify-end">
            <Button
              className="bg-white border-1 font-NotoSansThai px-12 text-slate-500 font-normal  border-pea-border"
              radius="sm"
              onClick={addService}
            >
              ยกเลิก
            </Button>
            <Button
              className="ml-2 bg-pea-btn text-white font-normal font-NotoSansThai px-12 mr-8"
              radius="sm"
            >
              บันทึก
            </Button>
          </div>
        </>
      )}
    </>
  );
}
