import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useProductFetch from "../../hooks/useProductFetch";
import { useNavigate, useLocation } from "react-router-dom";

const FeaturedProducts = ({ type }) => {
  const { products, loading } = useProductFetch(); 
  const navigate = useNavigate();
  const location = useLocation();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
   
    if (products && products.length > 0) {
      const grouped = products.reduce((acc, product) => {
        const categoryId = product.category_id;

        if (!acc[categoryId]) {
          acc[categoryId] = [];
        }

       
        if (acc[categoryId].length < 2) {
          acc[categoryId].push(product);
        }

        return acc;
      }, {});

     
      const flattened = Object.values(grouped).flat();
      setFeaturedProducts(flattened);
    }
  }, [products]);

  useEffect(() => {
    const savedPosition = location.state && location.state.scrollPosition;
    if (savedPosition) {
      window.scrollTo(0, savedPosition);
    }
  }, [location]);

  const handleClick = () => {
    const scrollPosition = window.scrollY;
    navigate(location.pathname, { replace: true, state: { scrollPosition } });
    window.scrollTo(0, 0); // Scroll to top
  };

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
        <h1>{type} products</h1>
        <p>
          Welcome to pr3ssctrl—your go-to for accessories that reboot your look.
          Whether you're leveling up your everyday style or upgrading for a night out, we've got the pieces that spark confidence.
          At pr3ssctrl, it's not just about looking good, it's about hitting refresh on how you feel. Gear up. Look good. Feel unstoppable.
        </p>
      </div>
      <div className="bottom">
        {loading ? (
          <p>Loading...</p>
        ) : (
          featuredProducts.map((item) => (
            <Card item={item} key={item.id} handleClick={handleClick} />
          ))
        )}
      </div>
      <div className="slider-layout">
        <Slider {...sliderSettings}>
          {featuredProducts.map((item) => (
            <div key={item.id}>
              <Card item={item} handleClick={handleClick} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProducts;
