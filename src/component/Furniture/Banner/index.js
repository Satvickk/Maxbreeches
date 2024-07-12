import React from 'react';
import { Link } from 'react-router-dom';
// import './Banner.css'; // Make sure this file exists in the same directory

const Banner = () => {
    return (
        <>
            <section id="furniture_banner">
                <div className="furniture_slider_box">
                    <div className="furniture_slider background_bg">
                        <video autoPlay muted loop className="video-background">
                            <source src='./assets/video/clipchamp3.mp4' type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                                    <div className="furniture_slider_content">
                                        <h5>NEW TRENDING</h5>
                                        <h2>Comfortable Wears</h2>
                                        <p style={{ color: 'black' }}></p>
                                        <Link to="/shop" className="theme-btn-one bg-black btn_sm">View Products</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;
