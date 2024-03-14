import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { Button, ButtonGroup } from "@nextui-org/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faSearch,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { Pagination, divider } from "@nextui-org/react";
import AddTextAnnounce from "./addTextAnnounce";

export default function textAnnounce() {
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
  const [rows, setRows] = useState([
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
      name: "การบำรุงรักษาหม้อแปลง2",
      status: "เปิดใช้งาน",
      dateStart: "15/01/2567",
      dateEnd: "19/01/2567",
    },
    {
      key: "7",
      name: "การบำรุงรักษาหม้อแปลง3",
      status: "เปิดใช้งาน",
      dateStart: "15/01/2567",
      dateEnd: "19/01/2567",
    },
  ]);

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);
  const pages = Math.ceil(rows.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
  }, [page, rows]);

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

  const [addTextAnnounce, setAddTextAnnounce] = useState(false);

  function addTextAnnounceToggle() {
    setAddTextAnnounce(!addTextAnnounce);
  }

  function deleteData(item) {
    // console.log(item);
    const itemDelete = items.filter((data) => data.name !== item);
    console.log(itemDelete);
    setRows(itemDelete);
  }

  return (
    <>
      {addTextAnnounce === false ? (
        <div>
          <div className="font-NotoSansThai font-bold text-panel-text mt-6 mb-6 ml-2">
            จัดการประกาศแบบข้อความ
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
            <button className="mt-2 mr-8" onClick={addTextAnnounceToggle}>
              <FontAwesomeIcon
                className="text-xs"
                icon={faSquarePlus}
                style={{ fontSize: "20px", color: "#B58E38" }}
              />
              <span className="font-NotoSansThai text-pea-btn ml-2">
                เพิ่มประกาศแบบข้อความ
              </span>
            </button>
          </div>
          <Table
            bottomContent={
              <div className="flex justify-between">
                <div className="flex justify-between items-center">
                  <label className="flex items-center text-default-400 text-small">
                    Items per page:
                    <select
                      className="bg-transparent outline-none text-default-400 text-small"
                      onChange={onRowsPerPageChange}
                      defaultValue={10}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                    </select>
                  </label>
                </div>
                <div className=" justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="default"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              </div>
            }
            bottomContentPlacement="outside"
            classNames={{
              wrapper: "min-h-[222px]",
            }}
            // radius="none"
            removeWrapper
            aria-label="Example table with dynamic content"
            className="font-NotoSansThai pr-4"
          >
            <TableHeader columns={columns} className="border-2">
              {(column) => (
                <TableColumn
                  key={column.key}
                  className=" bg-main text-white font-normal"
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={items}>
              {(item) => (
                <TableRow key={item.key} className="border-b-1">
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
                      <option value="on">{item.status}</option>
                      <option value="off">ปิดใช้งาน</option>
                    </select>
                  </TableCell>
                  <TableCell>
                    <span>{item.dateStart}</span>
                  </TableCell>
                  <TableCell>
                    <span>{item.dateEnd}</span>
                  </TableCell>
                  <TableCell className="flex">
                    <button>
                      <FontAwesomeIcon
                        className="text-xs text-pea-btn mt-4 mr-2"
                        icon={faPenToSquare}
                        style={{ fontSize: "20px" }}
                      />
                    </button>
                    <button>
                      <FontAwesomeIcon
                        className="text-xs text-pea-btn mt-4 mr-2"
                        icon={faSearch}
                        style={{ fontSize: "20px" }}
                      />
                    </button>
                    <button type="button" onClick={() => deleteData(item.name)}>
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
          <AddTextAnnounce />
          <div className="flex mt-12 mb-6 w-full justify-end">
            <Button
              className="bg-white border-1 font-NotoSansThai px-12 text-slate-500 font-normal  border-pea-border"
              radius="sm"
              onClick={addTextAnnounceToggle}
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
