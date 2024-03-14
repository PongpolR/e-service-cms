import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { faUsers, faSearch } from "@fortawesome/free-solid-svg-icons";
import AccessControlDataTable from "../table/accessControlDataTable";

export default function accessControlManage() {
  const columns = [
    {
      key: "id",
      label: "รหัส S",
    },
    {
      key: "name",
      label: "ชื่องานบริการ",
    },
    {
      key: "access",
      label: "ผู้ดูแลงานบริการ",
    },
    {
      key: "level",
      label: "ระดับสิทธิ",
    },
    {
      key: "manage",
      label: "จัดการ",
    },
  ];
  const rows = [
    {
      id: "ALL",
      name: "ขอซ่อมแซมอุปกรณ์ไฟฟ้า",
      access: ["กอพ.1", "กอพ.2"],
      level: "S",
    },
    {
      id: "ALL",
      name: "ขอตรวจสอบและบำรุงรักษาสวิตซ์เกียร์",
      access: ["กอพ.1", "กอพ.2"],
      level: "S",
    },
    {
      id: "ALL",
      name: "ขอตรวจสอบและบำรุงรักษาเคเบิล",
      access: ["กอพ.2"],
      level: "S",
    },
    {
      id: "ALL",
      name: "ขอตรวจสอบและบำรุงรักษารีเลย์",
      access: ["กอพ.1", "กอพ.2"],
      level: "S",
    },
    {
      id: "ALL",
      name: "ขอบำรุงรักษาหม้อแปลงไฟฟ้า",
      access: ["กอพ.2"],
      level: "S",
    },
    {
      id: "S306",
      name: "ขอแก้ไขและบำรุงรักษาระบบจำหน่าย",
      access: ["กอพ.2", "กอพ.2"],
      level: "A",
    },
    {
      id: "S307",
      name: "ขอแก้ไข/บำรุงรักษาระบบจำหน่ายโดย Hotline",
      access: ["กอพ.2"],
      level: "A",
    },
    {
      id: "S308",
      name: "ขอตรวจสอบระบบไฟฟ้าพร้อมออกใบรับรอง",
      access: ["กอพ.2"],
      level: "A",
    },
    {
      id: "S309",
      name: "ขอตรวจหาจุดร้อน/จุดสัมผัสทางไฟฟ้า",
      access: ["กอพ.2", "กอพ.2"],
      level: "A",
    },
    {
      id: "S310",
      name: "ขอปรึกษาด้านวิศวกรรมไฟฟ้า/ตรวจรับรองระบบ",
      access: ["กอพ.2", "กอพ.2"],
      level: "A",
    },
  ];

  const [data, setData] = useState(rows);
  const [toggleAddServiceAccess, setToggleAddServiceAccess] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [access1, setAccess1] = useState("");
  const [access2, setAccess2] = useState("");
  const [level, setLevel] = useState("");
  const [editItemName, setEditItemName] = useState("");
  const [editing, setEditing] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    level: "",
    access1: "",
    access2: "",
  });

  const toggleAccessService = () => {
    setToggleAddServiceAccess(!toggleAddServiceAccess);
    console.log(toggleAddServiceAccess);
  };

  const toggleEdit = (item) => {
    setIsEdit(!isEdit);
    setEditItem(item);
    setEditing(true);
    const fromDataEdit = {
      name: item.name,
      id: item.id,
      access1: item.access[0],
      access2: item.access[1],
      level: item.level,
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
            id: formData.id,
            name: formData.name,
            access: [formData.access1, formData.access2],
            level: formData.level,
          }
        : item
    );
    console.log(updatedData);

    setData(updatedData);
    setEditItem({});
    setFormData({
      name: "",
      id: "",
      access1: "",
      access2: "",
      level: "",
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

  const addList = () => {
    if (
      id === "" ||
      name === "" ||
      access1 === "" ||
      access2 === "" ||
      level === ""
    ) {
      alert("Please fill input");
      return;
    }
    setData([
      ...data,
      {
        id: id,
        name: name,
        access: [access1, access2],
        level: level,
      },
    ]);
    setToggleAddServiceAccess(!toggleAddServiceAccess);
    clearDataInput();
  };

  const clearDataInput = () => {
    setId("");
    setName("");
    setAccess1("");
    setAccess2("");
    setLevel("");
  };

  useEffect(() => {}, [data]);

  return (
    <div className="my-3">
      <FontAwesomeIcon
        className="text-xs"
        icon={faUsers}
        style={{ fontSize: "20px" }}
      />
      <span className="font-NotoSansThai text-main font-bold text-xl ml-3 mb-6">
        จัดการสิทธิ
      </span>
      <div className="font-NotoSansThai font-bold text-panel-text mt-6 mb-6">
        จัดการสิทธิงานบริการตรวจสอบและบำรุงรักษาระบบไฟฟ้า
      </div>
      <div className="flex mt-6">
        <div className="w-1/2 mr-4 pr-4">
          <div className="font-NotoSansThai">ระดับสิทธิ</div>
          <select
            className="font-NotoSansThai mb-3 px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-full rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium"
            name="languages"
            id="lang"
            placeholder="เลือกระดับสิทธิ"
          >
            <option value="">เลือกระดับสิทธิ</option>
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

      <AccessControlDataTable
        columns={columns}
        data={data}
        editItemName={editItemName}
        toggleEdit={toggleEdit}
        toggleSave={toggleSave}
        deleteData={deleteData}
        formData={formData}
        setFormData={setFormData}
        toggleAddServiceAccess={toggleAddServiceAccess}
        toggleAccessService={toggleAccessService}
        name={name}
        id={id}
        access1={access1}
        access2={access2}
        level={level}
        setName={setName}
        setId={setId}
        setAccess1={setAccess1}
        setAccess2={setAccess2}
        setLevel={setLevel}
        addList={addList}
      />
    </div>
  );
}
