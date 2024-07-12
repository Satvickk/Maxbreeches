import React from 'react'
// import img
import img1 from '../../assets/img/icon/icon_about1.jpg'
import img2 from '../../assets/img/icon/icon_about2.jpg'
import img3 from '../../assets/img/icon/icon_about3.jpg'
import img4 from '../../assets/img/icon/icon_about4.jpg'

// Feature Data
const FeatureData = [
    {
        img: img1,
        title: "Technologies",
        para: `We will enhance our inbuilt mechanism to check quality parameters including button force, stitching elasticity, measurement deviation, color fastness, and fabric durability.`
    },
    {
        img: img2,
        title: "Systems",
        para: `We have implemented specialized systems for each department, a 4-point system from cutting to packing, Kaizen rules for all staff, and an ERP system to monitor every production and logistics step.`
    },
    {
        img: img3,
        title: "Management",
        para: `Power/water and Wages till salary and goods everything has their written management work responsibility to do the healthy management.`
    },
    {
        img: img4,
        title: "Aims",
        para: `Under Mr. Rahul Agrawal's leadership, we engage with riders at horse fairs to enhance our manufacturing and uphold our tagline, "Ride with Excellence."`
    }
]

const Feature = () => {
    return (
        <>
            <section id="service_promo_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        {FeatureData.map((data, index) => (
                            <div className="col-lg-3 col-sm-6 col-12" key={index}>
                                <div className="service_promo_single_item">
                                    <div className="service_prom_image">
                                        <img src={data.img} alt="img" />
                                    </div>
                                    <div className="service_prom_content">
                                        <h3>{data.title}</h3>
                                        <p>{data.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
