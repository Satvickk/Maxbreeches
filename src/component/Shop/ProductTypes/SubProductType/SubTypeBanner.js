import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SubProductType } from "./SubProductType";
import HeadingTwo from "../../../Fashion/Heading";
import ListCard from "../../ListCard";

const SubTypeBanner = ({ heading, subCollectionName, title, slug }) => {
  const [selectedType, setSelectedType] = useState(slug);
  const [selectedTitle, setSelectedTitle] = useState(title);

  function handleSelectedType(data) {
    setSelectedType(data.slug);
    setSelectedTitle(data.title);
  }

  let settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="instagram_area_one">
        <div className="container-fluid">
          <HeadingTwo heading={heading} />
          <div className="row">
            <div className="col-lg-12">
              <div className="instagram_post_slider">
                <Slider {...settings}>
                  {SubProductType.filter(
                    (item) => item.subCollectionName === subCollectionName
                  ).map((item) =>
                    item.children.map((data, index) => (
                      <div
                        className="sub_type_banner"
                        key={index}
                        onClick={() => handleSelectedType(data)}
                      >
                        <div>
                          <p>{data.title}</p>
                          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <img src={data.img} alt="img" style={{height: "300px", objectFit: "cover"}} />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop_main_area" className="ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
              <ul className="pagination d-flex justify-content-between align-items-center">
                <li className="page-item">
                  <span className="page-link" aria-label="Previous"></span>
                </li>
                <li>
                  <div className="product_filter">
                    <div className="product_shot_title">
                      <p className="text-2xl mb-0">{selectedTitle}</p>
                    </div>
                  </div>
                </li>
                <li className="page-item">
                  <span className="page-link" aria-label="Previous"></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            {SubProductType.filter(
              (item) => item.subCollectionName === subCollectionName
            )
              .flatMap((item) => item.children) // Flatten all children to get a list of subtypes
              .filter((child) => child.slug === selectedType) // Filter by the selected slug
              .flatMap((child) => child.products) // Get the products of the selected child
              .map((product, index) => (
                <ListCard data={product} key={index} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SubTypeBanner;
