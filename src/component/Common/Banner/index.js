import React from 'react'
import { Link } from 'react-router-dom';
const Banner = (props) => {
    return (
        <>
            <section id="common_banner_one">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="common_banner_text">
                                <h2>{props.title}</h2>
                                <ul>
                                    <li><Link to="home">Home</Link></li>
                                    <li className="slash">/</li>
                                    <li className="active">{props.title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner