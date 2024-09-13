"use client";

import { useMemo } from "react";
import { DataTable } from "@/components/data-table/data-table";
import { Icons } from "@/components/common/icons";
import { useDataTable } from "@/hooks/use-data-table";
import type { DataTableFilterField } from "@/types/data-table";

import { getColumns } from "./table-columns";
import { InquiryTableToolbarActions } from "./table-toolbar-actions";
import { Inquiry, InquiryStatus, IProduct, } from "@/types/db";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";

const InquiryStatusFilter: { label: InquiryStatus; value: string }[] = [
  {
    label: InquiryStatus.Answered,
    value: InquiryStatus.Answered.split(" ").join("").toLowerCase(),
  },
  {
    label: InquiryStatus.Unanswered,
    value: InquiryStatus.Unanswered.split(" ").join("").toLowerCase(),
  },

];

export function InquiryTable() {
  const data: Inquiry[] = [
    {
      id: "001",
      customer: "John Doe",
      productName: "LG C2 42 (106cm)",
      phoneNumber: "+2519 3452 4532",
      inquiryDate: "12th August 2024",
      createdAt: new Date(),
      status: InquiryStatus.Answered,
    }
  ];

  const pageCount = 5;
  const columns = useMemo(() => getColumns(), []);

  const filterFields: DataTableFilterField<Inquiry>[] = [
    {
      label: "Title",
      value: "productName",
      placeholder: "Filter Product Name...",
    },
    {
      label: "Status",
      value: "status",
      options: InquiryStatusFilter.map(({ label, value }) => ({
        label,
        value,
        icon: Icons.assign,
        withCount: false,
      })),
    },

  ];

  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    filterFields,
    defaultPerPage: 10,
    defaultSort: "createdAt.desc",
  });

  return (
    <div className="w-full space-y-2.5 overflow-auto bg-white p-6 shadow rounded-xl">
      <DataTableToolbar table={table} filterFields={filterFields}>
        <InquiryTableToolbarActions table={table} />
      </DataTableToolbar>
      <DataTable table={table} />
    </div>
  );
}
