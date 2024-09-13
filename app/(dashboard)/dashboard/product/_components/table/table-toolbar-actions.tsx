"use client";

import { DownloadIcon } from "@radix-ui/react-icons";
import { type Table } from "@tanstack/react-table";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types/db";
import Link from "next/link";
interface ProductTableToolbarActionsProps {
  table: Table<IProduct>;
}

export function ProductTableToolbarActions({
  table,
}: ProductTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {
        table.getFilteredSelectedRowModel().rows.length ? < Button

          variant={"outline"}
          size="sm"
          className="gap-2  "
        // onClick={() => Product?.onOpen()}
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
