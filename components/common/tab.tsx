"use client";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const TabLink = ({
  lable,
  link,
  Icon,
  setTab,
  currentTab,
  tab,
}: {
  lable: string;
  link?: string;
  Icon: LucideIcon;
  setTab?: any;
  currentTab?: string;
  tab?: string;
}) => {
  const path = usePathname();
  const isActive = path === link;
  const isRightTab = currentTab === tab;
  return link ? (
    <Link
      href={link}
      className={` ${isActive && "text-main"} relative flex items-center gap-1 px-4 py-2`}
    >
      <Icon className={`${isActive ? "text-main" : "text-slate-400"}  `} size={15} />
      <h3 className="text-md">{lable}</h3>
      {isActive && (
        <div className="a absolute inset-x-0 bottom-0 h-[2px] rounded bg-main" />
      )}
    </Link>
  ) : (
    <div
      onClick={() => setTab(tab)}
      className={` ${isActive && "text-main"} relative flex cursor-pointer items-center gap-2 px-4 py-2`}
    >
      <Icon className={`${isActive ? "text-main" : "text-slate-400"}  `} size={15}/>
      <h3 className="text-md">{lable}</h3>
      {isRightTab && (
        <div className="a absolute inset-x-0 bottom-0 h-[2px] rounded bg-main" />
      )}
    </div>
  );
};
