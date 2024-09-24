"use client";

import Link from "next/link";
import { type User } from "next-auth";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/common/user-avatar";
import { IUserWithProfile } from "@/types/interface";
import { useFetchData } from "@/hooks/use-query";
import { KY } from "@/lib/constant";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export function UserAccountNav() {
  const { isLoading, data, error, isSuccess } = useFetchData<IUserWithProfile>(
    [KY.profile],
    `profile`,
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: data?.fullName || null, image: data?.profile?.avatar || null }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {data?.fullName && <p className="font-medium">{data?.fullName}</p>}
            {data?.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {data?.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild></DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/setting">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/login`,
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
