import React from "react";
import Heading from "../Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "../Product/ProductCard";
import { useSelector } from "react-redux";

import LadiesRidingWear from "../../../assets/img/product-image/lrb.jpg"
import MensRidingWear from "../../../assets/img/product-image/mrb.jpg"
import KidsBaseJacket from "../../../assets/img/product-image/kbj.jpg"

const PopularProduct = () => {
  let products = useSelector((state) => state.products.products);
  products = products.filter((item) => item.category === "furniture");

  let settings = {
    arrows: false,
    dots: true,
    margin: 30,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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

  const ProductData = [
    {
      id: 1,
      labels: "Trending",
      category: "Breeches",
      img: LadiesRidingWear,
      url: "/ladiesRidingWear",
      hover_img: "",
      title: "Ladies Riding Breeches",
      price: 38,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      rating: {
        rate: 3.9,
        count: 30,
      },
      color: [
        {
          color: "green",
          img: "/static/media/product8.f1fd90f9e43d4307cd4a.png",
          quantity: 1,
        },
        {
          color: "red",
          img: "/static/media/product9.f1fd90f9e43d4307cd4a.png",
          quantity: 1,
        },
        {
          color: "blue",
          img: "/static/media/product7.f1fd90f9e43d4307cd4a.png",
          quantity: 1,
        },
      ],
    },
    {
      id: 2,
      labels: "Trending",
      category: "fashion",
      img: MensRidingWear,
      url: "/mensRidingWear",
      hover_img: "/static/media/product10.f1fd90f9e43d4307cd4a.png",
      title: "Mens Riding Breeches",
      price: 38,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      rating: {
        rate: 3.9,
        count: 30,
      },
      color: [
        {
          color: "green",
          img: "/static/media/product8.f1fd90f9e43d4307cd4a.png",
          quantity: 1,
        },
        {
          color: "red",
          img: "/static/media/product9.f1fd90f9e43d4307cd4a.png",
          quantity: 1,
        },
        {
          color: "blue",
          img: "/static/media/product7.f1fd90f9e43d4307cd4a.png",
          quantity: 1,
        },
      ],
    },
    {
      id: 3,
      labels: "Trending",
      category: "fashion",
      img: KidsBaseJacket,
      url: "/kidsRidingWear",
      hover_img: "/static/media/product10.f1fd90f9e43d4307cd4a.png",
      title: "Kids Riding Breeches",
      price: 38,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      rating: {
        rate: 3.9,
        count: 30,
      },
      color: [
        {
          color: "green",
          img: "/static/media/product8.f1fd90f9e43d4307cd4a.png",
          quantity: 1,
        },
        {
          color: "red",
          img: "/static/media/product9.f1fd90f9e43d4307cd4a.png",
          quantity: 1,
        },
        {
          color: "blue",
          img: "/static/media/product7.f1fd90f9e43d4307cd4a.png",
          quantity: 1,
        },
      ],
    },
  ];

  return (
    <>
      <section id="furniture_popular_product" className="ptb-100">
        <div className="container">
          <Heading heading={"Popular Product"} />
          <div className="row">
            <div className="col-lg-12">
              <div className="furniture_popular_slider">
                <Slider {...settings}>
                  {ProductData.map((data, index) => (
                    <ProductCard data={data} key={index} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProduct;
