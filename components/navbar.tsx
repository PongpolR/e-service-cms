import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import eserviceLogoImg from "@/assets/e-service logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function navbar() {
  return (
    <Navbar className="border-1 border-b-gray-200 ">
      <NavbarBrand>
        {/* <p className="font-bold text-inherit">E-Service</p> */}
        <Image
          alt="Card background"
          className=""
          width={200}
          src={eserviceLogoImg.src}
        />
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          {/* <Link href="/login">Log out</Link> */}
          <div className="font-NotoSansThai text-pea-theme font-medium">
            <div>นางสาว พิมพ์ลักษณ์ บุญชูกุศล</div>
            <div className="text-right">
              <FontAwesomeIcon
                className="text-xs"
                icon={faUser}
                style={{ color: "#69306D", fontSize: "16px" }}
              />
              <span className="ml-2">505388</span>
            </div>
          </div>
          <Link href="/login" className="cursor-pointer ml-4">
            <FontAwesomeIcon
              className="text-xs"
              icon={faArrowRightFromBracket}
              style={{ color: "#69306D", fontSize: "20px" }}
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
