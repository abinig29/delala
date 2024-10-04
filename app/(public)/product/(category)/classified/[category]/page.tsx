import React from 'react'
import CategoryFilter from './_components/filter'
import FilterProduct from './_components/product-list'
import { PaginationCustom } from '@/components/pagination'

const CategoryPage = () => {
    return (
        <div>
            <CategoryFilter />
            <FilterProduct />
            <div className='my-10'>
                <PaginationCustom pages={4} />
            </div>
        </div>
    )
}

export default CategoryPage