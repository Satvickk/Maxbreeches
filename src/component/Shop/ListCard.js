import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyVerticallyCenteredModal from '../Common/Modal';

const ListCard = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="col-lg-12 col-md-6 col-sm-6 col-12">
        <div className="product_wrappers_list">
          <div className="row">
            <div className="col-lg-3">
              <div className="thumb">
                <Link to={`#!`} className="image">
                  <img src={`/${props.data.imageSrc}`} alt="Product" />
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="content">
                <div className="product_para_top">
                  <h4 className="title">
                    <Link to={`#!`}>{props.data.productName}</Link>
                  </h4>
                  <p>{props.data.productDescription}</p>
                </div>
                <a href="#!" className="add-to-cart btn btn_sm theme-btn-one btn-black-overlay" onClick={() => setModalShow(true)}>
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal data={props.data} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ListCard;
