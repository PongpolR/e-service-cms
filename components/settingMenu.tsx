import React, { useState } from "react";
import SettingPanel from "./settingPanel";
import { Button, ButtonGroup } from "@nextui-org/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faScrewdriverWrench,
  faNewspaper,
  faUsers,
  faBoxArchive,
} from "@fortawesome/free-solid-svg-icons";

export default function settingMenu() {
  const [menu, setMenu] = useState<string>("menu1");
  const [selected, setSelected] = useState<string>("menu1");

  function selectMenu(text: string) {
    // console.log(text);
    setMenu(text);
    setSelected(text);
  }

  return (
    <div className="">
      <div className="flex my-6 ml-8 2xl:ml-96 xl:ml-80 lg:ml-72 md:ml-30 sm:ml-24">
        <div className="">
          <div>
            <Button
              onClick={(e: string) => selectMenu("menu1")}
              className={
                selected === "menu1"
                  ? "bg-pea-btn text-white"
                  : "bg-white text-main"
              }
            >
              <FontAwesomeIcon
                className={
                  selected === "menu1"
                    ? "text-xs text-white"
                    : "text-xs text-black"
                }
                icon={faList}
                style={{ fontSize: "20px" }}
              />
              <div className="pl-12px pr-8 font-NotoSansThai font-medium align-center text-lg">
                ข้อมูลทั่วไป
              </div>
            </Button>
          </div>
          <div>
            <Button
              onClick={(e: string) => selectMenu("menu2")}
              className={
                selected === "menu2"
                  ? "bg-pea-btn text-white"
                  : "bg-white text-main"
              }
            >
              <FontAwesomeIcon
                className={
                  selected === "menu2"
                    ? "text-xs text-white"
                    : "text-xs text-black"
                }
                icon={faBoxArchive}
                style={{ fontSize: "20px" }}
              />
              <div className="pl-12px pr-8 font-NotoSansThai font-medium align-center text-lg">
                กลุ่มงานบริการ
              </div>
            </Button>
          </div>
          <div>
            <Button
              onClick={(e: string) => selectMenu("menu3")}
              className={
                selected === "menu3"
                  ? "bg-pea-btn text-white"
                  : "bg-white text-main"
              }
            >
              <FontAwesomeIcon
                className={
                  selected === "menu3"
                    ? "text-xs text-white"
                    : "text-xs text-black"
                }
                icon={faScrewdriverWrench}
                style={{ fontSize: "20px" }}
              />
              <div className="pl-12px pr-8 font-NotoSansThai font-medium align-center text-lg">
                งานบริการ
              </div>
            </Button>
          </div>
          <div>
            <Button
              onClick={(e: string) => selectMenu("menu4")}
              className={
                selected === "menu4"
                  ? "bg-pea-btn text-white"
                  : "bg-white text-main"
              }
            >
              <FontAwesomeIcon
                className={
                  selected === "menu4"
                    ? "text-xs text-white"
                    : "text-xs text-black"
                }
                icon={faNewspaper}
                style={{ fontSize: "20px" }}
              />
              <div className="pl-12px pr-8 font-NotoSansThai font-medium align-center text-lg">
                จัดการประกาศ
              </div>
            </Button>
          </div>
          <div>
            <Button
              onClick={(e: string) => selectMenu("menu5")}
              className={
                selected === "menu5"
                  ? "bg-pea-btn text-white"
                  : "bg-white text-main"
              }
            >
              <FontAwesomeIcon
                className={
                  selected === "menu5"
                    ? "text-xs text-white"
                    : "text-xs text-black"
                }
                icon={faUsers}
                style={{ fontSize: "20px" }}
              />
              <div className="pl-8px pr-8 font-NotoSansThai font-medium align-center text-lg">
                จัดการสิทธิ
              </div>
            </Button>
          </div>
        </div>
        <div className="border-1 border-border-panel rounded-md ml-4 pl-4 w-1/2">
          <SettingPanel menu={menu} />
        </div>
      </div>
    </div>
  );
}
