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
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            {/* <Input className="mb-3 focus:ring-violet-300" type="email"   /> */}
            <input
              type="email"
              name="email"
              id="email"
              className="mb-3 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:bg-indigo-100 focus:border-3 focus:outline-none focus:border-eservice-purple focus:ring-eservice-purple block w-full rounded-md sm:text-sm focus:ring-1 disabled:shadow-none font-medium"
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            {/* <Input className="" type="password" /> */}
            <input
              type="password"
              name="password"
              id="password"
              className="px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:bg-indigo-100 focus:border-3 focus:outline-none focus:border-eservice-purple focus:ring-eservice-purple block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-eservice-purple focus:invalid:ring-eservice-purple disabled:shadow-none"
            />
          </div>
          <div className="mt-5">
            {/* <input type="checkbox" name="" id="" /> */}
            <Checkbox />
            <span className="font-NotoSans text-default-600 font-medium">
              Remember me
            </span>
          </div>
          <div className="mt-5">
            <p className="font-NotoSansThai text-center font-semibold">
              พบปัญหาในการลงชื่อเข้าใช้งานโปรดติดต่อ 9960 PEA ITIL
            </p>
          </div>
          <Link href={"/page1"}>
            <Button className="h-12 mt-12 bg-pea-theme block w-full">
              <p className="font-NotoSans font-medium text-lg text-white w-full">
                Sign In
              </p>
            </Button>
          </Link>
          <div className="mt-8 text-center">
            <span className="font-NotoSans font-medium text-lg">
              New user?{" "}
            </span>
            <span className="font-NotoSans font-medium text-pea-theme text-lg cursor-pointer">
              Register
            </span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
