import React from "react";
import PersonalInformation from "./menu/personalInformation";
import GroupServiceManage from "./menu/groupServiceManage";
import ServiceManage from "./menu/serviceManage";
import Announcement from "./menu/announcement";
import AccessControlManage from "./menu/accessControlManage";

export default function settingPanel({ menu }) {
  // console.log(menu !== null ? menu : "no select menu data");
  return (
    <div>
      {menu === "" || menu === "menu1" ? <PersonalInformation /> : ""}
      {menu === "menu2" ? <GroupServiceManage /> : ""}
      {menu === "menu3" ? <ServiceManage /> : ""}
      {menu === "menu4" ? <Announcement /> : ""}
      {menu === "menu5" ? <AccessControlManage /> : ""}
    </div>
  );
}
