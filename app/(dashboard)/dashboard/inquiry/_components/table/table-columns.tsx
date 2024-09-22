"use client";

import { useState } from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import * as React from "react";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AllStatusType, StatusBadge } from "@/components/common/status-badge";
import InquiryModal from "./inquiry-modal";
import { DeleteModal } from "@/components/common/delete-modal";
import { IInquiry } from "@/types/db";
import { formatDate } from "@/lib/util/utils";
import useMutationFunc from "@/hooks/use-mutation";
import { updateAfterDelete } from "@/lib/util/updateLocal";
import { KY, MTD } from "@/lib/constant";
import useCustomSearchParams from "@/hooks/use-as";
import { useQueryClient } from "@tanstack/react-query";
import useSuccessToasts from "@/hooks/use-customToast";


export function getColumns(isLoading: boolean): ColumnDef<IInquiry>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            isLoading ? false : (table?.getIsAllPageRowsSelected() ||
              (table?.getIsSomePageRowsSelected() && "indeterminate"))
          }
          onCheckedChange={(value) => table && table?.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-0.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-0.5"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Customer" />
      ),
      cell: ({ row }) => <div className="w-20">{row.original?.name}</div>,
      // enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: "product",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Product Name" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2 ">
            <span className="max-w-[31.25rem] truncate font-medium">
              {row.original?.product?.name}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "phoneNumber",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Phone Number" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex  items-center">
            <span className="capitalize">{row?.original?.phone}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "Inquiry Date",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Inquiry Date" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex items-center">
            <span className="capitalize">{formatDate(row?.original?.createdAt)}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        return (
          <StatusBadge status={row?.original?.status as AllStatusType} />
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "actions",
      cell: function Cell({ row }) {
        const [isOpen, setIsOpen] = useState(false)
        const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
        const queryClient = useQueryClient()
        const { query } = useCustomSearchParams("name")
        const { errorNoAction } = useSuccessToasts()
        const {
          isPending,
          mutateAsync } = useMutationFunc({
            onSuccess: () => {
              setIsDeleteModalOpen(false)
              updateAfterDelete<IInquiry>(
                KY.inquiry,
                query,
                queryClient,
                row?.original?.id
              )
            },
            onError: (data) => {
              errorNoAction(data?.message)
            },
          });


        const onSubmit = async () => {

          try {
            await mutateAsync({
              url: `inquiry/${row?.original?.id}`,
              method: MTD.DELETE,
            });
          } catch (e: any) {
            console.log(e.message);
          }
        };

        return (
          <>
            <InquiryModal data={row.original} isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <DeleteModal
              onDelete={onSubmit}
              isOpen={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
              isLoading={isPending}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="Open menu"
                  variant="ghost"
                  className="flex size-8 p-0 data-[state=open]:bg-muted"
                >
                  <DotsHorizontalIcon className="size-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onSelect={() => setIsOpen(true)}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() => setIsDeleteModalOpen(true)}
                >
                  Delete
                  <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        );
      },
    },
  ];
}
