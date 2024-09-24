"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { UserAccountNav } from "@/components/common/user-account-nav";
import Notification from "./notification";


const Header = () => {


  return (
    <header className="fixed  inset-0 h-[50px] sm:ml-[250px] bg-white ">
      <div className=" flex  h-full items-center justify-end ">
        <div className="flex  flex-[0.2] items-center justify-end gap-3 px-6">
          <Notification />
          <UserAccountNav />

        </div>
      </div>
    </header>
  );
};

export default Header;
