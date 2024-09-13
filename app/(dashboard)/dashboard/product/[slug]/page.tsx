import React from 'react'
import Header from './_component/header'
import SectionWrapper from '@/components/common/section-wrapper'
import ProductDetail from './_component/product-detail'
import ProductCategory from './_component/product-category'
import ProductStatus from './_component/product-status'
import ProductImage from './_component/product-image'
import ArchiveProduct from './_component/archive-product'

const ProductCreate = () => {
    return (
        <SectionWrapper className="px-10 h-[90vh]  overflow-y-auto">
            <Header />
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8 my-4">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <ProductDetail />
                    <ProductCategory />

                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    <ProductStatus />
                    <ProductImage />
                    <ArchiveProduct />
                </div>
            </div>

        </SectionWrapper >
    )
}

export default ProductCreate