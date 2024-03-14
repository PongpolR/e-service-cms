import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import BannerAnnounce from "../announce/bannerAnnounce";
import TextAnnounce from "../announce/textAnnounce";
import "@/app/style/style.css";

export default function announcement() {
  const [selectAnnounce, setSelectAnnounce] = useState("banner");

  function selectMenu() {
    if (selectAnnounce === "banner") setSelectAnnounce("text");
    else setSelectAnnounce("banner");
  }

  return (
    <div className="my-3">
      <FontAwesomeIcon
        className="text-xs"
        icon={faNewspaper}
        style={{ fontSize: "20px" }}
      />
      <span className="font-NotoSansThai text-main font-bold text-xl ml-3 mb-6">
        จัดการประกาศ
      </span>
      <div className="flex mt-6 border-b-2 border-b-main items-center mr-8">
        <div className="font-NotoSansThai font-bold text-main text-md  cursor-pointer items-center">
          <button
            className={
              selectAnnounce === "banner"
                ? "bg-main text-white py-3 px-6 rounded-t-lg"
                : "py-3 px-6"
            }
            onClick={selectMenu}
          >
            ประกาศแบบ Banner
          </button>
        </div>
        <div className="font-NotoSansThai font-bold text-main text-md">
          <button
            className={
              selectAnnounce === "text"
                ? "bg-main text-white py-3 px-6 rounded-t-lg"
                : "py-3 px-6"
            }
            onClick={selectMenu}
          >
            ประกาศแบบข้อความ
          </button>
        </div>
      </div>
      {selectAnnounce === "banner" ? <BannerAnnounce /> : ""}
      {selectAnnounce === "text" ? <TextAnnounce /> : ""}
    </div>
  );
}
