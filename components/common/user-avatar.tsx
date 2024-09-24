import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export function UserAvatar({ user }: any) {
  return (
    <Avatar className="size-8 rounded-full">
      {user.image ? (
        <Image
          width={600}
          height={600}
          className="w-[2rem] h-[2rem] rounded-full "
          alt="Picture"
          src={user.image} />
      ) : (
        <AvatarFallback className="t bg-blue-100 font-bold capitalize">
          {/* <span >{user.name}</span> */}
          {user.name?.slice(0, 1)}
        </AvatarFallback>
      )}
    </Avatar>
  );
}
