 import React from 'react'
 import { Link } from 'react-router-dom'
//  import img
import img1 from '../../../assets/img/furniture/banner/1.jpg'
import img2 from '../../../assets/img/furniture/banner/2.jpg'
import img3 from '../../../assets/img/furniture/banner/3.jpg'
import img4 from '../../../assets/img/furniture/banner/4.png'

 
 const BannerBottom = () => {
     return (
         <>
        <section id="furniture_banner_bottom" className="pt-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="furniture_bottom_wrapper">
                        <Link to="/shoplist" className="hover_effect_furniture">
                            <img src={img1} alt="img" />
                        </Link>
                        <div className="furniture_bottom_content furniture-content-lg">
                            <h5>Rider Supplies</h5>
                            <h2>Comfortable Clothing Brand<br/>in equestrian</h2>
                            <Link to="/shoplist">View Product</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="furniture_bottom_wrapper mb-30">
                        <Link to="/shoplist" className="hover_effect_furniture">
                            <img src={img2} alt="img"/>
                        </Link>
                        <div className="furniture_bottom_content furniture-content-md">
                            <h5>Rider Supplies</h5>
                            <h2>Durable and <br/> Fashionable</h2>
                            <Link to="/shoplist">View Product</Link>
                        </div> 
                    </div>
                    <div className="furniture_bottom_wrapper">
                        <Link to="/shoplist" className="hover_effect_furniture">
                            <img src={img3} alt="img" />
                        </Link>
                        <div className="furniture_bottom_content furniture-content-md">
                            <h5>Rider Supplies</h5>
                            <h2>Sporty Fit with<br/>Safety</h2>
                            <Link to="/shoplist">View Product</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="furniture_bottom_wrapper">
                        <Link to="/shoplist" className="hover_effect_furniture">
                            <img src={img4} alt="img" />
                        </Link>
                        <div className="furniture_bottom_content furniture-content-md">
                            <h5>Rider Supplies</h5>
                            <h2>Best in the Market<br/>at Affordable Price</h2>
                            <Link to="/shoplist">View Product</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
         </>
     )
 }
 
 export default BannerBottom
 