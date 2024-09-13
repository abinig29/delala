import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar({ user }: any) {
  console.log({ user });
  return (
    <Avatar className="size-8 rounded-full">
      {/* {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : ( */}
      <AvatarFallback className="t bg-blue-100 font-bold capitalize">
        {/* <span >{user.name}</span> */}
        {user.name?.slice(0, 1)}
      </AvatarFallback>
      {/* )} */}
    </Avatar>
  );
}
