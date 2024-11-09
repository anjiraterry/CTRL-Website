import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useFetch from "../../hooks/useFetch";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const items = require("../../pages/data/items.js")

const FeaturedProducts = ({ type }) => {
  const data = items.item
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedPosition = location.state && location.state.scrollPosition;
    if (savedPosition) {
      window.scrollTo(0, savedPosition);
    }
  }, [location]);

  const handleClick = () => {
    // Save the current scroll position and navigate
    const scrollPosition = window.scrollY;
    navigate(location.pathname, { replace: true, state: { scrollPosition } });
    window.scrollTo(0, 0); // Optional, scrolls to the top when clicking
  };

  const flattenedItems = data.flatMap((itemsArray) => itemsArray.slice(0, 2));

  console.log(flattenedItems)

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1 >{type} products</h1>
        <p>
        Welcome to pr3ssctrl—your go-to for accessories that reboot your look.
        Whether you're leveling up your everyday style or upgrading for a night out, we've got the pieces that spark confidence.
        At pr3ssctrl, it's not just about looking good, it's about hitting refresh on how you feel. Gear up. Look good. Feel unstoppable.
        </p>
      </div>
      <div className="bottom"  >
      {data.map((itemsArray) =>
          itemsArray.slice(0, 2).map((item) => (
            <Card item={item} key={item.id} handleClick={handleClick}/>
          ))
        )}
        
       
        
      </div>
      <div className="slider-layout">
      <Slider {...sliderSettings}>
          {flattenedItems.map((item)  => (
           <div>
              <Card item={item} key={item.id} handleClick={handleClick} />
              </div>
      
          ))}  </Slider>
        
      </div>
    </div>
  );
};

export default FeaturedProducts;
