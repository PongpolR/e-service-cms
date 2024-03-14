import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faSquarePlus,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Input, Textarea } from "@nextui-org/input";
import React, { useEffect, useState } from "react";
import "@/app/style/style.css";
import { Button, ButtonGroup } from "@nextui-org/button";
import OtherSocial from "../otherSocial";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function personalInformation() {
  const [maxLength, setMaxLength] = useState<number[]>([0]);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  function addOtherSocial() {
    setMaxLength([...maxLength, 1]);
  }

  function deleteItem(select: Number) {
    const deleteSocial = maxLength.filter((value, index) => {
      console.log(index);
      return index !== select;
    });
    setMaxLength(deleteSocial);
    console.log(deleteSocial);
  }

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
      // console.log(image?.name);
    }
  };

  return (
    <div className="my-3">
      <FontAwesomeIcon
        className="text-xs"
        icon={faList}
        style={{ fontSize: "20px" }}
      />
      <span className="font-NotoSansThai text-main font-bold text-xl ml-3 mb-6">
        ข้อมูลทั่วไป
      </span>
      <div className="font-NotoSansThai font-bold text-panel-text mt-6 ml-4 mb-6">
        ชื่อและโลโก้
      </div>
      <div className="font-NotoSansThai mt-4 text-panel-text">
        <div className=" flex w-full">
          <div className="flex">
            <div className="ml-4 mr-4 w-24">โลโก้เว็บไซต์</div>
            <div className="ml-8">
              <Card className="w-52 h-32 overflow-hidden">
                <CardBody className="grid h-32 place-content-center overflow-hidden">
                  <Image
                    height={128}
                    alt="logo upload"
                    className="object-cover rounded-xl overflow-hidden"
                    src={createObjectURL}
                  />
                </CardBody>
              </Card>
            </div>
          </div>

          <label htmlFor="filePicker" className="w-3/4 ml-4 ">
            <span className="border-1 p-2 rounded cursor-pointer mr-4">
              <span className="pr-12 font-NotoSansThai">
                {createObjectURL === null ? "Select file..." : image?.name}
              </span>
            </span>
            <span>
              <Button className="bg-pea-btn text-white rounded px-6 m-0">
                Upload
              </Button>
              <input
                onChange={uploadToClient}
                id="filePicker"
                style={{ visibility: "hidden" }}
                type={"file"}
              />
            </span>
          </label>
        </div>
      </div>
      <div className="font-NotoSansThai font-bold text-panel-text ml-4 my-6">
        การติดต่อ
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 ml-4 text-panel-text w-1/4">
          ชื่อที่อยู่
        </div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          defaultValue="การไฟฟ้าส่วนภูมิภาค สำนักงานใหญ่"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 ml-4 text-panel-text w-1/4">
          รายละเอียดที่อยู่
        </div>
        <Textarea
          className="font-NotoSansThai mt-2 mr-8"
          id="textarea"
          variant="bordered"
          radius="sm"
          size="xs"
          maxRows={2}
          defaultValue="200 ถนนงามวงศ์วาน ลาดยาว จตุจักร กรุงเทพ 10900"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 ml-4 text-panel-text w-1/4">
          อีเมล
        </div>
        <Input
          type="email"
          className="font-NotoSansThai mt-2 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          defaultValue="1129@pea.co.th.com"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 ml-4 text-panel-text w-1/4">
          หมายเลขโทรศัพท์
        </div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          defaultValue="02-589-0100 ถึง 1"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 ml-4 text-panel-text w-1/4">
          สายด่วน
        </div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          defaultValue="1129"
        />
      </div>
      <div className="font-NotoSansThai font-bold text-panel-text my-6 ml-4">
        โซเซียลมีเดีย
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 ml-4 text-panel-text w-1/4">
          Facebook
        </div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          defaultValue="https://www.facebook.com/Provincial.Electricity.Authority"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 ml-4 text-panel-text w-1/4">
          Instagram
        </div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          placeholder="URL"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 ml-4 text-panel-text w-1/4">
          X (Twitter)
        </div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          placeholder="URL"
        />
      </div>
      <div className="my-5 flex justify-between w-full">
        <div className="w-1"></div>
        <button className="mt-2 mr-8" onClick={addOtherSocial}>
          <FontAwesomeIcon
            className="text-xs"
            icon={faSquarePlus}
            style={{ fontSize: "20px", color: "#B58E38" }}
          />
          <span className="font-NotoSansThai text-pea-btn ml-2">
            เพิ่มบัญชีโซเซียล
          </span>
        </button>
      </div>
      <div>
        {maxLength.map((value, index) => {
          return (
            <div key={index} className="relative flex justify-between mt-2">
              <div className="w-full">
                <OtherSocial index={index} />
              </div>
              <div className="absolute right-2 top-4">
                <button
                  className="mr-4 mb-12"
                  onClick={(e) => deleteItem(index)}
                >
                  <FontAwesomeIcon
                    className="text-xs"
                    icon={faSquareMinus}
                    style={{ fontSize: "20px", color: "#B58E38" }}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="font-NotoSansThai font-bold text-panel-text my-6 ml-4">
        Footer
      </div>
      <div className="flex justify-between w-full">
        <div className="font-NotoSansThai mt-4 ml-4 text-panel-text w-1/4">
          CopyRight
        </div>
        <Input
          type="text"
          className="font-NotoSansThai mt-2 mr-8"
          variant="bordered"
          radius="sm"
          size="xs"
          defaultValue="© 2023 Provincial Electricity Authority, All rights reserved."
        />
      </div>
      <div className="flex mt-12 mb-6 w-full justify-end">
        <Button
          className="bg-white border-1 font-NotoSansThai px-12 text-slate-500 font-normal  border-pea-border"
          radius="sm"
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
    </div>
  );
}
