import React from 'react'
import ProductAnalytics from './_components/overview'
import SectionWrapper from '@/components/common/section-wrapper'
import Header from './_components/header'
import { DataTableSkeleton } from '@/components/data-table/data-table-skeleton'
import { InquiryTable } from './_components/inquery-tabe'

const ProductDetail = () => {
    return (
        <SectionWrapper className="px-10  h-[90vh]  overflow-y-auto">
            <Header />
            <ProductAnalytics />
            <div className='mt-6'>
                <React.Suspense
                    fallback={
                        <DataTableSkeleton
                            columnCount={5}
                            searchableColumnCount={1}
                            filterableColumnCount={2}
                            cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
                            shrinkZero
                        />
                    }
                >
                    <InquiryTable />
                </React.Suspense>
            </div>

        </SectionWrapper >
    )
}

export default ProductDetail