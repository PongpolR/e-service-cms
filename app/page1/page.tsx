"use client";
import React from "react";
import Navbar from "@/components/navbar";
import SettingMenu from "@/components/settingMenu";
import Footer from "@/components/footer";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="w-200"></div>
      <div className="w-1/3">
        <div className="mt-6 mr-24 text-main font-bold font-NotoSansThai text-3xl w-full md:w-auto text-right">
          การตั้งค่า
        </div>
      </div>
      <SettingMenu />
      <Footer />
    </div>
  );
}
