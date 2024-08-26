import React from "react";
import ListCard from "../../ListCard";
import data from "../../ProductsData.json"; // Assuming your JSON data is in a file named 'ProductsData.json'
import Banner from "../../../Common/Banner";

const LadiesWear = () => {
  return (
    <>
    <Banner title="Ladies Wear" />
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
                      <p className="text-2xl mb-0">Ladies Wear</p>
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
            {data.filter((item) => item.collectionName === "LadiesWear").map((item) => (
              item?.children.map((product, index) => (
                <ListCard data={product} key={index} />
              ))
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LadiesWear;
