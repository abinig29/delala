"use client"
import React, { useState } from 'react'
import { BasicInfo } from './_components/personal-info'
import { Icons } from '@/components/common/icons';
import { TabLink } from '@/components/common/tab';
import { SecuritySetting } from './_components/security-setting';

const Setting = () => {
  const [tab, setTab] = useState<"PERSONAL" | "SECURITY">(
    "PERSONAL",
  );
  return (
    <div className=" rounded-sm">
      <div className="flex w-full gap-10 border-b px-8 bg-white">
        <TabLink
          tab="PERSONAL"
          currentTab={tab}
          setTab={setTab}
          lable="Personal Information"
          Icon={Icons.user}
        />

        <TabLink
          tab="SECURITY"
          currentTab={tab}
          setTab={setTab}
          lable="Security Setting"
          Icon={Icons.lock}
        />
      </div>
      {tab === "PERSONAL" && <BasicInfo />}
      {tab === "SECURITY" && <SecuritySetting />}
    </div>
  )
}

export default Setting