import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PhotoUploader from "@/components/common/image-uploader";
import useMutationFunc from "@/hooks/use-mutation";
import useSuccessToasts from "@/hooks/use-customToast";
import { KY, MTD } from "@/lib/constant";
import { logTrace } from "@/lib/logger";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { IUserWithProfile } from "@/types/interface";

const Avatar = ({ image }: { image?: string | null }) => {
  const { profileUpdateSuccess } = useSuccessToasts()

  const [imageUrl, setImageUrl] = useState(image)
  const queryClient = useQueryClient()
  const { errorNoAction } = useSuccessToasts()
  const { mutateAsync, isPending } = useMutationFunc({
    onSuccess: (data: IUserWithProfile) => {
      const currentData: IUserWithProfile = queryClient.getQueryData([KY.profile]) as IUserWithProfile;
      const updatedData: IUserWithProfile = {
        ...currentData,
        profile: {
          ...currentData?.profile,
          avatar: data?.profile?.avatar
        }
      }
      queryClient.setQueryData([KY.profile], { ...updatedData });
      profileUpdateSuccess()
    },
    onError: (data) => {
      errorNoAction(data?.message);
    },
  });
  const onSubmit = async () => {
    const dataToBeSent = {
      avatar: imageUrl
    };
    try {
      await mutateAsync({
        url: "profile",
        method: MTD.PATCH,
        body: dataToBeSent,
      });
    } catch (e: any) {
      logTrace("UPDATE PROFILE IMAGE=>/////", e);
    }
  };
  useEffect(() => {
    if (image)
      setImageUrl(image)
  }, [image])

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
          {/* <div className="size-16 rounded-full bg-slate-700/20"></div> */}
          <PhotoUploader setImage={setImageUrl} image={imageUrl} />
        </div>
      </CardContent>
      <CardFooter className=" flex items-center border-t py-4 text-muted-foreground ">
        <Button
          variant={"outline"}
          isLoading={isPending}
          onClick={onSubmit}
        >
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Avatar;
