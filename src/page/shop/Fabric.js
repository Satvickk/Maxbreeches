import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'
import FabricTop from '../../component/Shop/FabricTop'
const Fabric = () => {
    return (
        <>
            <Header />
            <Banner title="Fabrics" />
            <FabricTop />
            <InstgramSlider />
            <Footer />
        </>
    )
}

export default Fabric