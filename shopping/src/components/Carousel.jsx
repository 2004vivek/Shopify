import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        centerMode:true,
        autoplay:true,
        autoplaySpeed: 2000, 
        centerPadding:"2px",
        pauseOnHover: false,     
        pauseOnDotsHover: false,  
        pauseOnFocus: false, 
      };
  return (
    <>
    <div className='slider'>
    <Slider {...settings}>
      <div className='slider_img'>
       <img src="https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-SavingsZone-common-1724246289.jpg" alt="" />
      </div>
      <div className='slider_img'>
        <img src="	https://images.bewakoof.com/uploads/grid/app/1X1-oversized-tee-common--2--1724253324.jpg" alt="" />
      </div>
      <div className='slider_img'>
        <img src="https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-SpaceCollection-common-1724390303.jpg" alt="" />
      </div>
      <div className='slider_img'>
        <img src="https://images.bewakoof.com/uploads/grid/app/Buy-3-Classic-Fit-Tshirt-Common-1x1-HC-Banner--1--1724253325.jpg" alt="" />
      </div>
      <div className='slider_img'>
        <img src="https://images.bewakoof.com/uploads/grid/app/1x1-leg-endary-jogger-common-1724238451.jpg" alt="" />
      </div>
      <div className='slider_img'>
        <img src="https://images.bewakoof.com/uploads/grid/app/1x1-aug2024Relaunch-AIR-newbanner-3x4-04--1--1724405533.jpg" alt="" />
      </div>
    </Slider>
    </div>
    </>
  )
}
