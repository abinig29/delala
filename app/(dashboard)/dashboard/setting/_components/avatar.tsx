import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Avater = () => {
  return (
    <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader>
        <CardTitle>Avatar</CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="flex justify-between ">
          <div className="s space-y-2">
            <p className="">
              This is your avatar.
              <br />
              Click on the avatar to upload a custom one from your files.
            </p>
          </div>
          <div className="size-16 rounded-full bg-slate-700/20"></div>
        </div>
      </CardContent>
      <CardFooter className=" flex items-center border-t py-4 text-muted-foreground ">
        An avatar is optional but strongly recommended.
      </CardFooter>
    </Card>
  );
};

export default Avater;
