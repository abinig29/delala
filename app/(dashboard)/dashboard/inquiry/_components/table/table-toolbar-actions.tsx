"use client";

import { DownloadIcon } from "@radix-ui/react-icons";
import { type Table } from "@tanstack/react-table";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { IInquiry } from "@/types/db";
interface InquiryTableToolbarActionsProps {
  table: Table<IInquiry>;
  isLoading: boolean
}

export function InquiryTableToolbarActions({
  table,
  isLoading
}: InquiryTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {
        !isLoading && table?.getFilteredSelectedRowModel()?.rows?.length ? < Button
          variant={"outline"}
          size="sm"
          className="gap-2  "
        // onClick={() => Inquiry?.onOpen()}
        >
          <Icons.trash className="text-red-900" size={15} />
          Delete
        </Button> : null
      }

      {

      }
      {/* <Button
        variant="outline"
        size="sm"
        onClick={() =>
          exportTableToCSV(table, {
            filename: "tasks",
            excludeColumns: ["select", "actions"],
          })
        }
      >
        <DownloadIcon className="mr-2 size-4" aria-hidden="true" />
        Export
      </Button> */}
    </div >
  );
}
