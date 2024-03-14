import React from "react";
import { Image } from "@nextui-org/image";
import footerBg from "@/assets/footer-bg.png";

export default function footer() {
  return (
    <div className="">
      <div className="-mb-14">
        <Image
          width={1920}
          alt="footer image"
          src={footerBg.src}
          radius="none"
        />
      </div>
      <div className="h-16 w-full bg-pea-btn flex">
        <div className="m-auto">
          <div className="text-footer-text font-NotoSansThai mt-2 font-light">
            © 2023 Provincial Electricity Authority, All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
