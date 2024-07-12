import React from 'react'
import { Link } from 'react-router-dom'

const OurStory = () => {
    return (
        <>
             <section id="furniture_story">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="our_story_content">
                        <h2>Our Story</h2>
                        <p><b>MaxBreeches</b>is an ISO 9001:2015 certified manufacturer, specializes in high-quality equestrian rider apparel. With skilled labor, advanced technology, and a dedicated quality team, we ensure top-notch products. We welcome small orders, value customer feedback, and guarantee timely delivery, supported by a robust ERP system.</p>
                        <Link to="/about" className="theme-btn-one bg-black btn_md">Read Full Story</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default OurStory
