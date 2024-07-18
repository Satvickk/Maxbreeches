import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { RatingStar } from "rating-star";

const MyVerticallyCenteredModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="product_one_modal_top modal-content">
                            <button type="button" className="close close_modal_icon" onClick={props.onHide}>
                                <span aria-hidden="true"><i className="fa fa-times"></i></span>
                            </button>
                            <div id="product_slider_one">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                                        <div className="products_modal_sliders">
                                            <img src={props.data.imageSrc} alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                                        <div className="modal_product_content_one">
                                            <h3>{props.data.productName}</h3>
                                            <div className="reviews_rating">
                                                <RatingStar maxScore={5} rating={props.data.rating} id="rating-star-modal" />
                                                <span>({props.data.reviewCount} Customer Reviews)</span>
                                            </div>
                                            {/* <h4>${props.data.price}.00 <del style={{ fontWeight: 400, color: 'gray' }}>${parseInt(props.data.price) + 17}.00</del> </h4> */}
                                            <p>{props.data.productDescription}</p>
                                            <div className="variable-single-item">
                                                <span>Color</span>
                                                <div className="product-variable-color">
                                                    <label htmlFor="modal-product-color-red">
                                                        <input name="modal-product-color" id="modal-product-color-red"
                                                            className="color-select" type="radio" defaultChecked />
                                                        <span className="product-color-red"></span>
                                                    </label>

                                                    <label htmlFor="modal-product-color-green">
                                                        <input name="modal-product-color" id="modal-product-color-green"
                                                            className="color-select" type="radio" />
                                                        <span className="product-color-green"></span>
                                                    </label>

                                                    <label htmlFor="modal-product-color-blue">
                                                        <input name="modal-product-color" id="modal-product-color-blue"
                                                            className="color-select" type="radio" />
                                                        <span className="product-color-blue"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            {/* <div className="product_count_one">
                                                <div className="plus-minus-input">
                                                    <div className="input-group-button">
                                                        <button type="button" className="button" onClick={decNum}>
                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                    <input className="form-control" type="number" name="quantity" value={count} readOnly />
                                                    <div className="input-group-button">
                                                        <button type="button" className="button" onClick={incNum}>
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <a href="#!" className="theme-btn-one btn-black-overlay btn_sm" onClick={() => addToCart(props.data.productId)}>Add To Cart</a>
                                            </div> */}
                                            {/* <div className="share-buttons">
                                                <FacebookShareButton url={window.location.href} quote={props.data.productName}>
                                                    <FacebookIcon size={32} round />
                                                </FacebookShareButton>
                                                <TwitterShareButton url={window.location.href} title={props.data.productName}>
                                                    <TwitterIcon size={32} round />
                                                </TwitterShareButton>
                                                <LinkedinShareButton url={window.location.href} title={props.data.productName}>
                                                    <LinkedinIcon size={32} round />
                                                </LinkedinShareButton>
                                                <TelegramShareButton url={window.location.href} title={props.data.productName}>
                                                    <TelegramIcon size={32} round />
                                                </TelegramShareButton>
                                                <WhatsappShareButton url={window.location.href} title={props.data.productName}>
                                                    <WhatsappIcon size={32} round />
                                                </WhatsappShareButton>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default MyVerticallyCenteredModal;
