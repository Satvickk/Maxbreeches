import React from 'react'
import Header from '../../component/Common/Header'
// import Banner from '../../component/Common/Banner'
// import ShopLists from '../../component/Shop/ShopList'
// import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'
import { Outlet } from 'react-router-dom'

const ShopList = () => {
    return (
        <>
            <Header />
            {/* <Banner title="Products" />
            <ShopLists /> */}
            <Outlet />
            {/* <InstgramSlider /> */}
            <Footer />
        </>
    )
}

export default ShopList