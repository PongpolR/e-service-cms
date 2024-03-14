import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import {
  faPenToSquare,
  faTrashCan,
  faFloppyDisk,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/input";

export default function bannerAnnounceDataTable({
  columns,
  data,
  editItemName,
  toggleEdit,
  toggleSave,
  deleteData,
  formData,
  setFormData,
}) {
  // const [page, setPage] = React.useState(1);
  // const rowsPerPage = 3;

  // const pages = Math.ceil(data.length / rowsPerPage);

  // const items = React.useMemo(() => {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;

  //   return data.slice(start, end);
  // }, [page, data]);
  return (
    <>
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
        <TableBody>
          <TableRow className="">
            <TableCell className="pr-0">
              {data.map((item, i) => {
                return (
                  <div key={item.name} className="py-6 border-b-1 ">
                    {editItemName === item.name ? (
                      <Input
                        className="w-12 "
                        radius="sm"
                        size="xs"
                        id="id"
                        value={formData.key}
                        disabled
                        onChange={(e) => {
                          setFormData({ ...formData, key: e.target.value });
                        }}
                        variant="bordered"
                      />
                    ) : (
                      <span className=" px-3 py-2 bg-id-btn rounded-md">
                        {i + 1}
                      </span>
                    )}
                  </div>
                );
              })}
            </TableCell>
            <TableCell className="px-0">
              {data.map((item, i) => {
                return (
                  <div key={item.name} className=" border-b-1 py-6">
                    {editItemName === item.name ? (
                      <Input
                        className="w-64 "
                        radius="sm"
                        size="xs"
                        id="name"
                        defaultValue={formData.name}
                        autoFocus
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                        }}
                        variant="bordered"
                      />
                    ) : (
                      <span className=" ">{item.name}</span>
                    )}
                  </div>
                );
              })}
            </TableCell>

            <TableCell className="px-0">
              {data.map((item, i) => {
                return (
                  <div
                    key={item.name}
                    className={
                      editItemName === item.name
                        ? "h-[89px] py-6 border-b-1"
                        : "h-[69px] py-6 border-b-1"
                    }
                  >
                    <select
                      className={
                        editItemName === item.name
                          ? "font-NotoSansThai px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-full rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium"
                          : "font-NotoSansThai -mt-2 px-3 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 block w-full rounded-md sm:text-sm  disabled:shadow-none focus:outline-none font-medium"
                      }
                    >
                      <option value="on">{item.status}</option>
                      <option value="off">ปิดใช้งาน</option>
                    </select>
                  </div>
                );
              })}
            </TableCell>
            <TableCell className="px-0">
              {data.map((item, i) => {
                return (
                  <div key={item.name} className=" border-b-1 py-6 ">
                    {editItemName === item.name ? (
                      <Input
                        className=" "
                        radius="sm"
                        size="xs"
                        id="name"
                        defaultValue={formData.dateStart}
                        autoFocus
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            dateStart: e.target.value,
                          });
                        }}
                        variant="bordered"
                      />
                    ) : (
                      <span className="ml-4 ">{item.dateStart}</span>
                    )}
                  </div>
                );
              })}
            </TableCell>
            <TableCell className="px-0">
              {data.map((item, i) => {
                return (
                  <div key={item.name} className=" border-b-1 py-6">
                    {editItemName === item.name ? (
                      <Input
                        className=" "
                        radius="sm"
                        size="xs"
                        id="name"
                        defaultValue={formData.dateEnd}
                        autoFocus
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            dateEnd: e.target.value,
                          });
                        }}
                        variant="bordered"
                      />
                    ) : (
                      <span className=" ">{item.dateEnd}</span>
                    )}
                  </div>
                );
              })}
            </TableCell>
            <TableCell className="px-0">
              {data.map((item, i) => {
                return (
                  <div
                    key={item.name}
                    className={
                      item.name === editItemName
                        ? "h-[89px] py-6 border-b-1"
                        : "h-[69px] py-6 border-b-1"
                    }
                  >
                    <button
                      type="button"
                      onClick={
                        editItemName === item.name
                          ? (e) => toggleSave(item)
                          : (e) => toggleEdit(item)
                      }
                    >
                      <FontAwesomeIcon
                        className={
                          editItemName === item.name
                            ? "text-xs text-pea-btn mt-2 mr-2"
                            : "text-xs text-pea-btn mr-2"
                        }
                        icon={
                          editItemName === item.name
                            ? faFloppyDisk
                            : faPenToSquare
                        }
                        style={{ fontSize: "20px" }}
                      />
                    </button>
                    <button>
                      <FontAwesomeIcon
                        onClick={() => deleteData(item.name)}
                        className={
                          editItemName === item.name
                            ? "text-xs text-pea-btn mt-2 mr-2"
                            : "text-xs text-pea-btn mr-2"
                        }
                        icon={faTrashCan}
                        style={{ fontSize: "20px" }}
                      />
                    </button>
                  </div>
                );
              })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
