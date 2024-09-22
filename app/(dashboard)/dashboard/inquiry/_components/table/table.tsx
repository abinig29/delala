"use client";

import { useMemo } from "react";
import { DataTable } from "@/components/data-table/data-table";
import { Icons } from "@/components/common/icons";
import { useDataTable } from "@/hooks/use-data-table";
import type { DataTableFilterField } from "@/types/data-table";

import { getColumns } from "./table-columns";
import { InquiryTableToolbarActions } from "./table-toolbar-actions";
import { IInquiry, InquiryStatus, } from "@/types/db";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";
import { useFetchData } from "@/hooks/use-query";
import { KY } from "@/lib/constant";
import useCustomSearchParams from "@/hooks/use-as";


const InquiryStatusFilter: { label: InquiryStatus; value: string }[] = [
  {
    label: InquiryStatus.ANSWERED,
    value: InquiryStatus.ANSWERED,
  },
  {
    label: InquiryStatus.PENDING,
    value: InquiryStatus.PENDING,
  },

];

export function InquiryTable() {
  const { query } = useCustomSearchParams("name")
  const { isLoading, data, error, isSuccess } = useFetchData<PaginationRes<IInquiry>>(
    [KY.inquiry, query],
    `inquiry${query}`,
  );



  const columns = useMemo(() => getColumns(isLoading), []);

  const filterFields: DataTableFilterField<IInquiry>[] = [
    {
      label: "Title",
      value: "name",
      placeholder: "Filter Customer Name...",
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
    data: data?.values as IInquiry[],
    columns,
    pageCount: data?.totalPages ?? 0,
    filterFields,
    defaultPerPage: 10,
    defaultSort: "createdAt.desc",
  });

  return (
    <div className="w-full space-y-2.5 overflow-auto bg-white p-6 shadow rounded-xl">
      <DataTableToolbar table={table} filterFields={filterFields}>
        <InquiryTableToolbarActions table={table} isLoading={isLoading} />
      </DataTableToolbar>
      <DataTable table={table} isLoading={isLoading} />
    </div>
  );
}
