import React from "react";
import Slider from "react-slick";
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img7 from './img/7.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import './main.css'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3, responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <Slider {...settings} className="slides container" >
      <div>
        <img className="img-fluid container" src={img1} alt="" />
      </div>
      <div>
        <img className="img-fluid container" src={img2} alt="" />
      </div>
      <div>
        <img className="img-fluid container" src={img7} alt="" />
      </div>
      <div>
        <img className="img-fluid container" src={img4} alt="" />
      </div>
      <div>
        <img className="img-fluid container" src={img5} alt="" />
      </div>
      <div>
        <img className="img-fluid"src={img6} alt="" />
      </div>
    </Slider>
  );
  }