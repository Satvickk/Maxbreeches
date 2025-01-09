import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ContactTwoArea from '../../component/ContactTwo'
import Footer from '../../component/Common/Footer'
const ContactTwo = () => {

    console.log("working")
    return (
        <>
            <Header />
            <Banner title="Contact" />
            <ContactTwoArea />
            <Footer />
        </>
    )
}

export default ContactTwo