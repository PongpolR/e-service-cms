import React from "react";
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

export default function accessControlDataTable({
  columns,
  data,
  editItemName,
  toggleEdit,
  toggleSave,
  deleteData,
  formData,
  setFormData,
  toggleAddServiceAccess,
  toggleAccessService,
  name,
  id,
  access1,
  access2,
  level,
  setName,
  setId,
  setAccess1,
  setAccess2,
  setLevel,
  addList
}) {
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
                        value={formData.id}
                        onChange={(e) => {
                          setFormData({ ...formData, id: e.target.value });
                        }}
                        variant="bordered"
                      />
                    ) : (
                      <span className=" px-3 py-2 bg-id-btn rounded-md">
                        {item.id}
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
                  <div key={item.name} className="py-6 border-b-1">
                    {editItemName === item.name ? (
                      <div className="flex">
                        <Input
                          className="w-24 mr-2 text-center center"
                          radius="sm"
                          size="xs"
                          id="access1"
                          defaultValue={item.access[0]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              access1: e.target.value,
                            })
                          }
                          variant="bordered"
                        />
                        <Input
                          className="w-24 mr-4 text-center"
                          radius="sm"
                          size="xs"
                          id="access2"
                          defaultValue={item.access[1]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              access2: e.target.value,
                            })
                          }
                          variant="bordered"
                        />
                      </div>
                    ) : (
                      <>
                        <span className=" px-7 py-2 mr-2 bg-id-btn rounded-md">
                          {item.access[0]}
                        </span>
                        {item.access.length > 1 && item.access[1] !== "" ? (
                          <span className=" px-7 py-2 bg-id-btn rounded-md">
                            {item.access[1]}
                          </span>
                        ) : (
                          ""
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </TableCell>
            <TableCell className="px-0">
              {data.map((item, i) => {
                return (
                  <div key={item.name} className="py-6 border-b-1">
                    {editItemName === item.name ? (
                      <Input
                        className="w-10 ml-4"
                        radius="sm"
                        size="xs"
                        id="level"
                        defaultValue={item.level}
                        onChange={(e) =>
                          setFormData({ ...formData, level: e.target.value })
                        }
                        variant="bordered"
                      />
                    ) : (
                      <span
                        className={
                          item.level === "S"
                            ? "bg-pea-btn px-4 py-2 ml-4 rounded-md text-white"
                            : "bg-main px-4 py-2 ml-4 rounded-md text-white"
                        }
                      >
                        {item.level}
                      </span>
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
      {toggleAddServiceAccess === true ? (
        <>
          <div className="flex py-4 border-b-1">
            <Input
              className="w-16 ml-2 mr-4"
              radius="sm"
              size="xs"
              id="id"
              value={id}
              onValueChange={setId}
              variant="bordered"
            />
            <Input
              className="w-72 mr-2"
              radius="sm"
              size="xs"
              id="name"
              value={name}
              onValueChange={setName}
              variant="bordered"
            />
            <Input
              className="w-24 mr-2 text-center center"
              radius="sm"
              size="xs"
              id="access1"
              value={access1}
              onValueChange={setAccess1}
              variant="bordered"
            />
            <Input
              className="w-24 mr-4 text-center"
              radius="sm"
              size="xs"
              id="access2"
              value={access2}
              onValueChange={setAccess2}
              variant="bordered"
            />
            <Input
              className="w-10"
              radius="sm"
              size="xs"
              id="level"
              value={level}
              onValueChange={setLevel}
              variant="bordered"
            />
            <button>
              <FontAwesomeIcon
                className="text-xs text-pea-btn mt-2 ml-6 mr-2"
                icon={faFloppyDisk}
                style={{ fontSize: "20px" }}
                onClick={addList}
              />
            </button>
            <button>
              <FontAwesomeIcon
                className="text-xs text-pea-btn mt-2"
                icon={faTrashCan}
                style={{ fontSize: "20px" }}
                onClick={toggleAccessService}
              />
            </button>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="mt-2 mb-6 flex justify-between w-full">
        <div className="w-1"></div>
        <button className="mt-2 mr-8" onClick={toggleAccessService}>
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
    </>
  );
}
