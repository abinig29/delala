import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const DeleteAccount = () => {
  return (
    <Card x-chunk="dashboard-07-chunk-0" className="b border border-red-500">
      <CardHeader>
        <CardTitle>Delete Account</CardTitle>
      </CardHeader>
      <CardContent>
        Permanently remove your Personal Account and all of its contents from
        the Vercel platform. This action is not reversible, so please continue
        with caution.
      </CardContent>
      <CardFooter className=" flex items-center justify-end  border-t border-red-500  bg-red-500/20 p-2">
        <Button
          variant={"outline"}
          className="text-md bg-red-500  text-white hover:text-white hover:bg-red-400 "
        >
          Delete Account
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DeleteAccount;
