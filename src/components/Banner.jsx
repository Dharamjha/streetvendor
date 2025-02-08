import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"; 

import image1 from "../images/first.avif";
import image2 from "../images/second.jpg";
import image3 from "../images/third.jpg";
import image4 from "../images/fourth.jpg";
import image5 from "../images/fifth.jpg";        

const Banner = () => {

    const images = [image1, image2, image3, image4, image5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
