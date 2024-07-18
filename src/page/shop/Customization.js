import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'
import CustomizationTop from '../../component/Shop/CustoizationTop'
const Customization = () => {
    return (
        <>
            <Header />
            <Banner title="Customizations" />
            <CustomizationTop />
            <InstgramSlider />
            <Footer />
        </>
    )
}

export default Customization