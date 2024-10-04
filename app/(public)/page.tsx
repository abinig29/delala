import React from 'react'
import PropertySearch from './_component/home/hero'

import Category from './_component/home/category'
import PopularProducts from './_component/home/popular-product'
import Banner from './_component/home/banner'
import ExploreProducts from './_component/home/explore-product'
import EnhancedModernBanner from './_component/home/animated-banner'
import RecentProductList from './_component/home/recent-product'
import HeroSection from './_component/home/hero'


const Index = () => {
    return (
        <>
            <HeroSection />
            <Category />
            <PopularProducts />
            <Banner />
            <ExploreProducts />
            <EnhancedModernBanner />
            <RecentProductList />

        </>
    )
}

export default Index



