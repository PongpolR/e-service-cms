import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faSearch,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import AddBannerAnnounce from "./addBannerAnnounce";
import { Button, ButtonGroup } from "@nextui-org/button";
import BannerAnnounceDataTable from "../table/bannerAnnounceDataTable";

export default function bannerAnnounce() {
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

  const columns = [
    {
      key: "key",
      label: "ลำดับที่",
    },
    {
      key: "name",
      label: "ชื่อ Banner",
    },
    {
      key: "status",
      label: "สถานะการแสดงผล",
    },
    {
      key: "dateStart",
      label: "วันที่เริ่ม",
    },
    {
      key: "dateEnd",
      label: "วันที่สิ้นสุด",
    },
    {
      key: "manage",
      label: "จัดการ",
    },
  ];
  const rows = [
    {
      key: "1",
      name: "ติดโซลาร์รูฟกับ PEA",
      status: "เปิดใช้งาน",
      dateStart: "15/01/2567",
      dateEnd: "19/01/2567",
    },
    {
      key: "2",
      name: "จองคิวล่วงหน้า",
      status: "เปิดใช้งาน",
      dateStart: "15/01/2567",
      dateEnd: "19/01/2567",
    },
    {
      key: "3",
      name: "แบบทดสอบความพึงพอใจ E-SERVICE",
      status: "เปิดใช้งาน",
      dateStart: "15/01/2567",
      dateEnd: "19/01/2567",
    },
    {
      key: "4",
      name: "PEA ขยายเวลา ยกเว้นค่าธรรมเนียม",
      status: "เปิดใช้งาน",
      dateStart: "15/01/2567",
      dateEnd: "19/01/2567",
    },
    {
      key: "5",
      name: "การบำรุงรักษาหม้อแปลง",
      status: "เปิดใช้งาน",
      dateStart: "15/01/2567",
      dateEnd: "19/01/2567",
    },
    {
      key: "6",
      name: "ดูแลโซลาร์เซลล์ อย่างไร ในวันที่ฝนตก",
      status: "เปิดใช้งาน",
      dateStart: "15/01/2567",
      dateEnd: "19/01/2567",
    },
    {
      key: "7",
      name: "ลงทะเบียนเพื่อสวัสดิการแห่งรัฐ 2565",
      status: "เปิดใช้งาน",
      dateStart: "15/01/2567",
      dateEnd: "19/01/2567",
    },
    {
      key: "8",
      name: "PEA Smart Plus",
      status: "เปิดใช้งาน",
      dateStart: "15/01/2567",
      dateEnd: "19/01/2567",
    },
  ];

  const [data, setData] = useState(rows);
  const [addBannerAnnounce, setAddBannerAnnounce] = useState(false);
  const [editItemName, setEditItemName] = useState("");
  const [editing, setEditing] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    key: "",
    name: "",
    status: "",
    dateStart: "",
    dateEnd: "",
  });

  const toggleEdit = (item) => {
    setIsEdit(!isEdit);
    setEditItem(item);
    setEditing(true);
    const fromDataEdit = {
      name: item.name,
      key: item.key,
      status: item.status,
      dateStart: item.dateStart,
      dateEnd: item.dateEnd,
    };
    setFormData(fromDataEdit);

    setEditItemName(item.name);
  };

  const toggleSave = (item) => {
    console.log(item);

    console.log(formData);
    setEditing(false);

    if (name === "") {
      console.log("in");
      let itemName = item.name;
      setName(itemName);
    }

    const updatedData = data.map((item) =>
      item.name === editItem.name
        ? {
            ...item,
            id: formData.key,
            name: formData.name,
            status: formData.status,
            dateStart: formData.dateStart,
            dateEnd: formData.dateEnd,
          }
        : item
    );
    console.log(updatedData);

    setData(updatedData);
    setEditItem({});
    setFormData({
      name: "",
      key: " ",
      status: "",
      dateStart: "",
      dateEnd: "",
    });
    clearDataInput();
    setEditItemName("");
    setIsEdit(!isEdit);
  };

  const deleteData = (item) => {
    const deleteIndex = data.findIndex((d) => {
      if (d.name === item) return d;
    });

    const updateItem = [...data];
    updateItem.splice(deleteIndex, 1);
    setData(updateItem);

    console.log(updateItem);
  };

  const clearDataInput = () => {
    setKey("");
    setName("");
    setStatus("");
    setDateStart({ startDate: null, endDate: null });
    setDateEnd({ startDate: null, endDate: null });
  };

  function addBannerAnnounceToggle() {
    setAddBannerAnnounce(!addBannerAnnounce);
  }

  return (
    <>
      {addBannerAnnounce === false ? (
        <div>
          <div className="font-NotoSansThai font-bold text-panel-text mt-6 mb-6 ml-2">
            จัดการประกาศแบบ Banner
          </div>

          <div className="flex ml-2">
            <div className="w-1/2 mr-4">
              <div className="font-NotoSansThai">คำค้นหา</div>
              <input
                type="text"
                className="font-NotoSansThai mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-full rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium"
              />
            </div>
            <div className="w-1/2 mr-4">
              <div className="font-NotoSansThai">สถานะการการแสดงผล</div>
              <select
                className="font-NotoSansThai mb-3 px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-full rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium"
                name="languages"
                id="lang"
              >
                <option value="select">เลือกสถานะการแสดงผล</option>
              </select>
            </div>
          </div>

          <div className="flex ml-2 mb-6 mt-6">
            <div className="w-1/2 mr-4">
              <div className="font-NotoSansThai">วันที่เริ่ม</div>
              <div className="border-1 font-NotoSansThai rounded-md">
                <Datepicker
                  asSingle={true}
                  value={dateStart}
                  useRange={false}
                  onChange={handleDateStartChange}
                  placeholder={"เลือกวันที่"}
                  displayFormat={"DD/MM/YYYY"}
                />
              </div>
            </div>
            <div className="w-1/2 mr-4">
              <div className="font-NotoSansThai">วันที่สิ้นสุด</div>
              <div className="border-1 font-NotoSansThai rounded-md">
                <Datepicker
                  asSingle={true}
                  value={dateEnd}
                  useRange={false}
                  onChange={handleDateEndChange}
                  placeholder={"เลือกวันที่"}
                  displayFormat={"DD/MM/YYYY"}
                />
              </div>
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
            <button className="mt-2 mr-8" onClick={addBannerAnnounceToggle}>
              <FontAwesomeIcon
                className="text-xs"
                icon={faSquarePlus}
                style={{ fontSize: "20px", color: "#B58E38" }}
              />
              <span className="font-NotoSansThai text-pea-btn ml-2">
                เพิ่มประกาศแบบ Banner
              </span>
            </button>
          </div>
          <BannerAnnounceDataTable
            columns={columns}
            data={data}
            editItemName={editItemName}
            toggleEdit={toggleEdit}
            toggleSave={toggleSave}
            deleteData={deleteData}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      ) : (
        <>
          <AddBannerAnnounce />
          <div className="flex mt-12 mb-6 w-full justify-end">
            <Button
              className="bg-white border-1 font-NotoSansThai px-12 text-slate-500 font-normal  border-pea-border"
              radius="sm"
              onClick={addBannerAnnounceToggle}
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
