import React from 'react'
// import img
import img1 from '../../assets/img/product-image/15.png'

const AboutTop = () => {
    return (
        <>
            <section id="about-top" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_img">
                                <img src={img1} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_left_content">
                                <h2>ABOUT MaxBreeches</h2>
                                <h4>At MaxBreeches, we believe that every product in the equestrian world is a result of an idea, and every idea has a cause.</h4>
                                <p>Max Breeches is an ISO 9001:2015 certified leading manufacturer of equestrian products. We are very specializing in the equestrian products mainly for rider’s apparel for the Breeches/Jodhpur/Riding pants and other bottom outfits. Our designs and styling are made with fully dedication of hard work and passion which shows in our product which you can feel at the time when you have in your hand.</p>
                                <p>Our motivation for the right quality oriented product towards the employee and other middle staff even the labor itself. We hire only skilled literate labors whose not making the breeches even they know the utility and importance of the Breeches and also at the rider end. We always prefer new technology to the manufacturing of the breeches to increase the productivity and the quality.</p>
                                <p>Max Breeches have the all entire technical computerized high performance stitching machine to perform good high end result.</p>
                                <p>Max Breeches have our own quality team to insure the product quality before the dispatch we have ten point quality checking system for the inline production and off line or the finished products.</p>
                                <p>Our sourcing team is very dedicated to purchase the good quality raw material from the registered vendors which do not compromise the quality for the raw material just because to save the bit money likes others. You can check any time proof for all your raw materials from ISO certified companies. Max Breeches have own price label for the product to maintain the quality of the product.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTop
