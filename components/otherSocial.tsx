import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function otherSocial({ index }) {
  const indexOtherSocial = index;
  const [maxLength, setMaxLength] = useState<number[]>([1]);
  const [image2, setImage2] = useState(null);
  const [createObjectURL2, setCreateObjectURL2] = useState(null);

  const uploadToClient2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage2(i);
      setCreateObjectURL2(URL.createObjectURL(i));
      // console.log(image?.name);
    }
  };
  return (
    <div>
      <div className="flex">
        <div className="font-NotoSansThai mt-4 ml-4 text-panel-text w-1/4">
          โซเซียลมีเดียอื่นๆ
        </div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 mr-6 pr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          placeholder="โซเซียลมีเดีย"
        />
      </div>
      <div className="flex">
        <div className="font-NotoSansThai mt-4 ml-4 text-panel-text w-1/4"></div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 pr-2 mr-8 w-full"
          variant="bordered"
          radius="sm"
          size="xs"
          placeholder="URL"
        />
      </div>
      <div className=" flex w-full mt-4 ml-2">
        <div className="flex">
          <div className="ml-4 mr-4 w-24"></div>
          <div className="ml-4 grid place-content-center ">
            {createObjectURL2 === null ? (
              <div className="border-1 rounded font-NotoSansThai text-gray-400 px-2 pb-4 ml-4">
                แสดงรูปตัวอย่าง
              </div>
            ) : (
              <Image
                height={100}
                width={100}
                alt="logo upload2"
                className="ml-4 object-cover rounded-xl"
                src={createObjectURL2}
              />
            )}
          </div>
        </div>

        <label
          htmlFor={`filePicker2-${indexOtherSocial}`}
          className="w-3/4 ml-4 "
        >
          <span className="border-1 p-2 rounded cursor-pointer mr-4">
            <span className="pr-16 font-NotoSansThai">
              {createObjectURL2 === null ? "Select file..." : image2?.name}
            </span>
          </span>
          <span>
            <Button className="bg-pea-btn text-white rounded px-6 mr-4">
              Upload
            </Button>
            <input
              onChange={uploadToClient2}
              id={`filePicker2-${indexOtherSocial}`}
              style={{ visibility: "hidden" }}
              type={"file"}
            />
          </span>
        </label>
      </div>
    </div>
  );
}
