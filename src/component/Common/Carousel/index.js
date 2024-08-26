import Carousel from "react-bootstrap/Carousel";

export default function ImageDisplayCarousel({ Images }) {
  return (
    <>
      <style type="text/css">
        {`
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            background-color: black;
            color: black;
            height: 24px;
            width: 24px;
            margin:4px;
          }
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
          }
        `}
      </style>
      <Carousel fade interval={5000}>
        {Images?.length > 0 && Array.isArray(Images) && (
          Images.map((imageUrl, index) => (
            <Carousel.Item key={index}>
            <img
              src={imageUrl}
              alt=""
              style={{objectPosition: 'center', objectFit: "cover", height: "50%", width: "50%"}}
            />
            <img
              src={Images[index + 1]}
              alt=""
              style={{objectPosition: 'center', objectFit: "cover", height: "50%", width: "50%"}}
            />
          </Carousel.Item>
          ))
        )}
        {/* <Carousel.Item > */}
            {/* <img
              src={'lb1.jpg'}
              alt=""
            />
          </Carousel.Item> */}
      </Carousel>
    </>
  );
}
