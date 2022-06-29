import React from "react";
import { Carousel } from "react-bootstrap";
/* carousel no automatico bootstrap */

function ImageSlider1(){
    return(
    <>
<Carousel interval={null}>
  <Carousel.Item >
    <img
      className="d-block w-50"
      src={require("../../img/local/place-1.JPG")}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-50"
      src={require("../../img/local/place-2.JPG")}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel></>
);
};

export default ImageSlider1;
