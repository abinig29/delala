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

const ProductStatusFilter: { label: ProductStatus; value: string }[] = [
  {
    label: ProductStatus.Available,
    value: ProductStatus.Available.split(" ").join("").toLowerCase(),
  },
  {
    label: ProductStatus.Sold,
    value: ProductStatus.Sold.split(" ").join("").toLowerCase(),
  },

];

export function ProductTable() {
  const data: IProduct[] = [
    {
      id: "001",
      productName: "LG C2 42",
      category: "Electronics",
      subcategory: "Samsung Tv",
      price: "300$",
      status: ProductStatus.Sold,
      createdAt: new Date(),
    },
    {
      id: "001",
      productName: "LG C2 42",
      category: "Electronics",
      subcategory: "Samsung Tv",
      price: "300$",
      status: ProductStatus.Sold,
      createdAt: new Date(),
    },
    {
      id: "001",
      productName: "LG C2 42",
      category: "Electronics",
      subcategory: "Samsung Tv",
      price: "300$",
      status: ProductStatus.Sold,
      createdAt: new Date(),
    },
    {
      id: "001",
      productName: "LG C2 42",
      category: "Electronics",
      subcategory: "Samsung Tv",
      price: "300$",
      status: ProductStatus.Sold,
      createdAt: new Date(),
    },
    {
      id: "001",
      productName: "LG C2 42",
      category: "Electronics",
      subcategory: "Samsung Tv",
      price: "300$",
      status: ProductStatus.Sold,
      createdAt: new Date(),
    },
    {
      id: "001",
      productName: "LG C2 42",
      category: "Electronics",
      subcategory: "Samsung Tv",
      price: "300$",
      status: ProductStatus.Sold,
      createdAt: new Date(),
    }, {
      id: "001",
      productName: "LG C2 42",
      category: "Electronics",
      subcategory: "Samsung Tv",
      price: "300$",
      status: ProductStatus.Sold,
      createdAt: new Date(),
    },
    {
      id: "001",
      productName: "LG C2 42",
      category: "Electronics",
      subcategory: "Samsung Tv",
      price: "300$",
      status: ProductStatus.Sold,
      createdAt: new Date(),
    },
  ];

  const pageCount = 5;
  const columns = useMemo(() => getColumns(), []);

  const filterFields: DataTableFilterField<IProduct>[] = [
    {
      label: "Title",
      value: "productName",
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
    data,
    columns,
    pageCount,
    filterFields,
    defaultPerPage: 10,
    defaultSort: "createdAt.desc",
  });

  return (
    <div className="w-full space-y-2.5 overflow-auto mt-4 bg-white p-6 shadow rounded-xl">
      <DataTableToolbar table={table} filterFields={filterFields}>
        <ProductTableToolbarActions table={table} />
      </DataTableToolbar>
      <DataTable table={table} />
    </div>
  );
}
