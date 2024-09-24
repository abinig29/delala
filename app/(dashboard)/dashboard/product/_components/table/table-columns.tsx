"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import * as React from "react";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
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
import { AdminStatus, IProduct, ProductStatus } from "@/types/db";
import { AllStatusType, StatusBadge } from "@/components/common/status-badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DeleteModal } from "@/components/common/delete-modal";
import { KY, MTD } from "@/lib/constant";
import useSuccessToasts from "@/hooks/use-customToast";
import useMutationFunc from "@/hooks/use-mutation";
import { updateAfterDelete } from "@/lib/util/updateLocal";
import { useQueryClient } from "@tanstack/react-query";
import useCustomSearchParams from "@/hooks/use-as";
import { getCategoryIcon } from "@/lib/util/catgeory-icon";
import Image from "next/image";



export function getColumns(isLoading: boolean): ColumnDef<IProduct>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            !isLoading && (table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate"))
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
      accessorKey: "image",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Product Image" />
      ),
      cell: ({ row }) => <div className="w-20 h-10">
        {
          row?.original?.images?.[0] ? <Image
            src={row?.original?.images?.[0]}
            alt=""
            width={600}
            height={600}
            className="w-full h-full object-cover rounded" /> :
            <div className=" bg-blue-200/30 text-muted-foreground h-full grid place-content-center">
              No Image
            </div>
        }

      </div>,
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Product Name" />
      ),
      cell: ({ row }) => <Link href={`/dashboard/product/${row.original.id}/inquiry`} className=" hover:underline">{row.original.name}</Link>,
    },
    {
      accessorKey: "totalViews",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Total Views" />
      ),
      cell: ({ row }) => <div className="flex space-x-2">
        <span className="max-w-[31.25rem] truncate font-medium flex items-center">
          {row.original.totalViews} {" "}
        </span>
      </div>,

    },
    {
      accessorKey: "category",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Category" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[31.25rem] gap-2 truncate font-medium flex items-center">
              {getCategoryIcon(row.original.category)}
              {row.original.category.toLowerCase()}
            </span>
          </div>
        );
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
      // filterFn: (row, id, value) => {
      //   return Array.isArray(value) && value.includes(row.getValue(id));
      // },
    },
    {
      accessorKey: "adminStatus",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Admin Approval" />
      ),
      cell: ({ row }) => {
        return (
          <StatusBadge status={row?.original?.adminStatus as AllStatusType} />
        );
      },
      // filterFn: (row, id, value) => {
      //   return Array.isArray(value) && value.includes(row.getValue(id));
      // },
    },
    {
      id: "actions",
      cell: function Cell({ row }) {
        const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false)
        const router = useRouter()
        const queryClient = useQueryClient()
        const { query } = useCustomSearchParams("name")
        const { errorNoAction } = useSuccessToasts()
        const {
          isPending,
          mutateAsync } = useMutationFunc({
            onSuccess: () => {
              setIsDeleteModalOpen(false)
              updateAfterDelete<IProduct>(
                KY.product,
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
              url: `product/${row?.original?.id}`,
              method: MTD.DELETE,
            });
          } catch (e: any) {
            console.log(e.message);
          }
        };

        return (
          <>
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
                  onSelect={() => router.push(`/dashboard/product/${row?.original?.id}/inquiry`)}
                >
                  View
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => router.push(`/dashboard/product/${row?.original?.id}/`)}
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
