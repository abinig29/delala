"use client";

import { DownloadIcon } from "@radix-ui/react-icons";
import { type Table } from "@tanstack/react-table";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { IInquiry } from "@/types/db";
import { useState } from "react";
import { DeleteModal } from "@/components/common/delete-modal";
import useMutationFunc from "@/hooks/use-mutation";
import { updateAfterBulkDelete } from "@/lib/util/updateLocal";
import { KY, MTD } from "@/lib/constant";
import { useQueryClient } from "@tanstack/react-query";
import useCustomSearchParams from "@/hooks/use-as";
import useSuccessToasts from "@/hooks/use-customToast";
interface InquiryTableToolbarActionsProps {
  table: Table<IInquiry>;
  isLoading: boolean
}

export function InquiryTableToolbarActions({
  table,
  isLoading
}: InquiryTableToolbarActionsProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const { errorNoAction } = useSuccessToasts()
  const queryClient = useQueryClient()
  const ids = table?.getFilteredSelectedRowModel()?.rows?.map(data => data?.original?.id)

  const { query } = useCustomSearchParams("name")
  const {
    isPending,
    mutateAsync
  } = useMutationFunc({
    onSuccess: () => {
      setIsDeleteModalOpen(false)
      updateAfterBulkDelete<IInquiry>(
        KY.inquiry,
        query,
        queryClient,
        ids
      )
    },
    onError: (data) => {
      errorNoAction(data?.message)
    },
  });
  const onSubmit = async () => {
    try {
      await mutateAsync({
        url: `inquiry/bulk-delete`,
        method: MTD.DELETE,
        body: { ids }
      });
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <DeleteModal
        onDelete={onSubmit}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        isLoading={isPending}
      />
      {
        !isLoading && table?.getFilteredSelectedRowModel()?.rows?.length ? < Button
          variant={"outline"}
          size="sm"
          className="gap-2  "
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <Icons.trash className="text-red-900" size={15} />
          Delete
        </Button> : <div></div>
      }
    </div >
  );
}
