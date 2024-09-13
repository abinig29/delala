import React from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import SectionWrapper from "@/components/common/section-wrapper";
import { ProductTable } from "./_components/table/table";
import SectionHeader from "@/components/common/section-header";

const Product = () => {
  return (
    <SectionWrapper className="px-10">
      <SectionHeader heading="Product Management" variant={"lg"}/>
      <React.Suspense
        fallback={
          <DataTableSkeleton
            columnCount={3}
            searchableColumnCount={1}
            filterableColumnCount={2}
            cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
            shrinkZero
          />
        }
      >
        <ProductTable />
      </React.Suspense>
    </SectionWrapper>
  );
};

export default Product;
