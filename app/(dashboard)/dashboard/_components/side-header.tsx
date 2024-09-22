import Link from "next/link";
import React from "react";
import { siteConfig } from "@/config/site";
import Logo from "@/components/common/logo";

const SideBarHeader = () => {
  return (
    <div className="">
      <div className="flex w-full justify-between p-4  ">
        {/* <Icons.logo /> */}
        <Logo />

        {/* <div className='flex gap-2 text-muted-foreground' >
                    <Icons.arrorLeft />
                    <Icons.arrowRight />
                </div> */}
      </div>
    </div>
  );
};

export default SideBarHeader;
