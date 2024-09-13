import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Avater from "./avatar";
import DeleteAccount from "./delete-account";

export function BasicInfo() {
  return (
    <div className="flex h-[90vh] min-h-screen w-[calc(100vw-250px)] flex-col overflow-y-auto p-6 pb-32">
      <div className="flex w-full flex-col sm:gap-4  sm:py-4 ">
        <main className="grid max-w-4xl flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Avater />
          <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
              <CardTitle>User Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">First Name</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"

                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Last Name</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"

                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Email</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"

                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Phone Number</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"

                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Address</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"

                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="ju justify-end">
              <Button variant={"outline"}>Save</Button>
            </CardFooter>
          </Card>
          <DeleteAccount />
        </main>
      </div>
    </div>
  );
}
