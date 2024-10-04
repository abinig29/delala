"use client";

import { DownloadIcon } from "@radix-ui/react-icons";
import { type Table } from "@tanstack/react-table";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types/db";
import Link from "next/link";
import { useState } from "react";
import useSuccessToasts from "@/hooks/use-customToast";
import { useQueryClient } from "@tanstack/react-query";
import useCustomSearchParams from "@/hooks/use-as";
import useMutationFunc from "@/hooks/use-mutation";
import { updateAfterBulkDelete } from "@/lib/util/updateLocal";
import { KY, MTD } from "@/lib/constant";
import { DeleteModal } from "@/components/common/delete-modal";
interface ProductTableToolbarActionsProps {
  table: Table<IProduct>;
  isLoading: boolean
}

export function ProductTableToolbarActions({
  table,
  isLoading
}: ProductTableToolbarActionsProps) {
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
      updateAfterBulkDelete<IProduct>(
        KY.product,
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
        url: `product/bulk-delete`,
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
        !isLoading && table.getFilteredSelectedRowModel().rows.length ? < Button

          variant={"outline"}
          size="sm"
          className="gap-2  "
          onClick={() => setIsDeleteModalOpen(true)}

        >
          <Icons.trash className="text-red-900" size={15} />
          Delete
        </Button> : null
      }
      <Link
        href={"/dashboard/product/create"}
      >

        <Button
          size="sm"
          className="gap-2 bg-main text-white hover:bg-main/80"
        // onClick={() => Product?.onOpen()}
        >
          <Icons.plus size={15} />
          Create Product
        </Button>
      </Link>

    </div >
  );
}
