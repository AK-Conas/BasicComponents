import React from "react";
import CCard from "./CCard";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const CCarousel = ({ cProduct }) => {
  return (
    // <Carousel showDots={true} responsive={responsive}>
    // {/* cMediaHeight="" some height making sure this is proper  */}
    cProduct.map((item, index) => (
      <CCard cMedia={item.imageUrl} cMediaHeight="200" cHeader={item.name} />
    ))
  );
};

export default CCarousel;
