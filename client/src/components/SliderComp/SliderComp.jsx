import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./SliderComp.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slring from "../../img/slring2.jpg"
import slgrillz from "../../img/slgrillz2.jpg"
import slshades from "../../img/slshades.jpg"
import slering from "../../img/slering.jpg"
import slbelt from "../../img/slbelt1.jpg"
import slchain from "../../img/slshades2.jpg"

const SliderComp = () => {

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className=" prev i "
      onClick={onClick}
    >
      <EastOutlinedIcon  />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="next "
      onClick={onClick}
    >
      <WestOutlinedIcon />
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2, // Default slides to show for smaller screens
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjust this to target tablet or small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on screens smaller than 768px
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // Target larger screens
        settings: {
          slidesToShow: 2, // Show 2 slides on screens larger than 1024px
          slidesToScroll: 1,
        }
      }
    ]
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    slgrillz, slbelt,slring, slshades,slering,  slchain
  ];

 

  return (
    <div className="slider">
      <div className="container" >
      <Slider {...sliderSettings}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
        <img src={data[4]} alt="" />
        <img src={data[5]} alt="" />
        </Slider>
      </div>

      <div className="introText">
        <h1> Look Good , <span>Feel Good </span></h1>
        <p></p>
      </div>
    
   
    </div>
  );
};

export default SliderComp;
