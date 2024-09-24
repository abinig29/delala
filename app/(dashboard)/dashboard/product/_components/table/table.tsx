"use client";

import { useMemo } from "react";
import { DataTable } from "@/components/data-table/data-table";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";
import { Icons } from "@/components/common/icons";
import { useDataTable } from "@/hooks/use-data-table";
import type { DataTableFilterField } from "@/types/data-table";

import { getColumns } from "./table-columns";
import { ProductTableToolbarActions } from "./table-toolbar-actions";
import { IProduct, ProductStatus } from "@/types/db";
import useCustomSearchParams from "@/hooks/use-as";
import { useFetchData } from "@/hooks/use-query";
import { KY } from "@/lib/constant";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";

const ProductStatusFilter: { label: ProductStatus; value: string }[] = [
  {
    label: ProductStatus.ACTIVE,
    value: ProductStatus.ACTIVE
  },
  {
    label: ProductStatus.ARCHIVE,
    value: ProductStatus.ARCHIVE
  },
  {
    label: ProductStatus.DRAFT,
    value: ProductStatus.DRAFT
  },

];

export function ProductTable() {

  const { query } = useCustomSearchParams("name")
  const { isLoading, data, error, isSuccess, isFetching } = useFetchData<PaginationRes<IProduct>>(
    [KY.product, query],
    `product/user/my${query}`,
  );
  const columns = useMemo(() => getColumns(isLoading), []);
  const isInitialLoading = isLoading && !isFetching;

  const filterFields: DataTableFilterField<IProduct>[] = [
    {
      label: "Title",
      value: "name",
      placeholder: "Filter Product Name...",
    },
    {
      label: "Status",
      value: "status",
      options: ProductStatusFilter.map(({ label, value }) => ({
        label,
        value,
        icon: Icons.assign,
        withCount: false,
      })),
    },

  ];

  const { table } = useDataTable({
    data: data?.values as IProduct[],
    columns,
    pageCount: data?.totalPages ?? 0,
    filterFields,
    defaultPerPage: 10,
    defaultSort: "createdAt.desc",
  });

  return (
    <div className="w-full space-y-2.5 overflow-auto mt-4 bg-white p-6 shadow rounded-xl">
      {!isInitialLoading ? <div>
        <DataTableToolbar table={table} filterFields={filterFields}>
          <ProductTableToolbarActions table={table} isLoading={!data?.values?.length} />
        </DataTableToolbar>
        <DataTable table={table} isLoading={isLoading} />
      </div>
        :
        <DataTableSkeleton
          columnCount={3}
          searchableColumnCount={1}
          filterableColumnCount={2}
          cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
          shrinkZero
        />
      }
    </div>
  );
}
