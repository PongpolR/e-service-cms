import React from "react";
import { Card, CardHeader, CardBody, Image, Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";
import { Button, ButtonGroup } from "@nextui-org/button";
import logoImg from "@/assets/logo.png";
import Link from "next/link";

export const page = () => {
  return (
    <div className="flex h-screen bg-slate-100">
      <Card className="px-4 py-8 m-auto">
        <CardBody className=" overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            width={450}
            src={logoImg.src}
          />
          <h1 className="font-NotoSans text-default-1000 text-2xl font-semibold text-center my-6">
            Sign in to your account
          </h1>

          <div className="my-2">
            <p className="font-NotoSansThai text-center font-semibold">
              พบปัญหาในการลงชื่อเข้าใช้งานโปรดติดต่อ 9960 PEA ITIL
            </p>
          </div>
          <Link href={"/page1"}>
            <Button className="h-12 mt-6 bg-pea-theme block w-full">
              <p className="font-NotoSans font-medium text-lg text-white w-full">
                Sign In
              </p>
            </Button>
          </Link>
          {/* <div className="mt-8 text-center">
            <span className="font-NotoSans font-medium text-lg">
              New user?{" "}
            </span>
            <span className="font-NotoSans font-medium text-pea-theme text-lg cursor-pointer">
              Register
            </span>
          </div> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
