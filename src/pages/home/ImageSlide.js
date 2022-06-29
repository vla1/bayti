import React from "react";
import { Carousel } from "react-bootstrap";

function ImageSlider(){
    return(
    <>
    <img className="img-Home" src={require("../../img/local/place-1.JPG")}/>

{/* <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={require("../../img/cup-1.JPG")}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={require("../../img/cup-2.JPG")}
      alt="Second slide"
    />
    
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../../img/plate-3.JPG")}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> 
</Carousel> */}
</>
);
};

export default ImageSlider;
