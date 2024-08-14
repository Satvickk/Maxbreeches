import React from "react";
import SubTypeBanner from "../SubProductType/SubTypeBanner"

const LadiesRidingWear = () => {
  // const [collectionIndex, setCollectionIndex] = useState(0); // State to track current collection index
  // const itemsPerPage = 4;

  // // Total number of collections
  // const totalCollections = data.length;

  // // Calculate the products to be displayed for the current collection
  // const currentCollection = data[collectionIndex];
  // const currentProducts = currentCollection.children;

  // const totalPages = Math.ceil(currentProducts.length / itemsPerPage);

  // const handleNextCollection = () => {
  //   if (collectionIndex < totalCollections - 1) {
  //     setCollectionIndex(collectionIndex + 1);
  //   }
  // };

  // const handlePrevCollection = () => {
  //   if (collectionIndex > 0) {
  //     setCollectionIndex(collectionIndex - 1);
  //   }
  // };

  return (
    <>
    {/* <Banner title="Ladies Riding Wear" /> */}
    <SubTypeBanner heading={"Ladies Riding Wear"} subCollectionName={"LadiesRidingWear"} title={"Breeches"} slug={'Breeches'}/>
      {/* <section id="shop_main_area" className="ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
              <ul className="pagination d-flex justify-content-between align-items-center">
                <li className="page-item">
                  <span className="page-link" aria-label="Previous"></span>
                </li> */}
                {/* <li className="page-item" onClick={handlePrevCollection}>
                  <a className="page-link" href="#!" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li> */}
                {/* <li>
                  <div className="product_filter">
                    <div className="product_shot_title">
                      <p className="text-2xl mb-0">Ladies Riding Wear</p>
                    </div>
                  </div>
                </li>
                <li className="page-item">
                  <span className="page-link" aria-label="Previous"></span>
                </li> */}
                {/* <li className="page-item" onClick={handleNextCollection}>
                  <a className="page-link" href="#!" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li> */}
              {/* </ul>
            </div>
          </div>
          <div className="row"> */}
            {/* {currentProducts.map((product, index) => (
              <ListCard data={product} key={index} />
            ))} */}
            {/* {data.filter((item) => item.collectionName === "LadiesRidingWear").map((item) => (
              item?.children.map((product, index) => (
                <ListCard data={product} key={index} />
              ))
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default LadiesRidingWear;
