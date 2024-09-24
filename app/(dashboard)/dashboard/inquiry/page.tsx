import React from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import SectionWrapper from "@/components/common/section-wrapper";
import { InquiryTable } from "./_components/table/table";

const Product = () => {
  return (
    <SectionWrapper className="px-10">
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
        <InquiryTable />
      </React.Suspense>
    </SectionWrapper>
  );
};

export default Product;
