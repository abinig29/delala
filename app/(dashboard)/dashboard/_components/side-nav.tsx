"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/util/utils";
import { type sideBarItem } from "@/types";
import SideBarHeader from "./side-header";
import { signOut } from "next-auth/react";

interface DashboardNavProps {
  items: sideBarItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2 px-4 ">
      <SideBarHeader />
      <div className="flex flex-col gap-1">
        {items.map((item, index) => {
          const Icon = Icons[item?.icon as keyof typeof Icons ?? ""];
          const isActive =
            item?.href === "/dashboard"
              ? path === "/dashboard"
              : path === item.href ||
              path?.includes(item.href ?? "/doesnt-exist");
          return (
            <div
              key={index}
            >
              <Link
                key={index}
                href={item.disabled ? "/" : item.href ?? "/dashboard"}
                onClick={() => {
                  item?.title === "Logout" && signOut({
                    callbackUrl: `${window.location.origin}/login`,
                  });
                }}
              >
                <span
                  className={cn(
                    "group flex items-center rounded-md font-[500] px-2 mx-4  py-2 text-md hover:bg-main/10 hover:text-main",
                    isActive ? "bg-main/10 text-main" : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  <Icon className="mr-2 size-5" />
                  <span className="text-md">{item.title}</span>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
