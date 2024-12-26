import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import useProductFetch from "../../hooks/useProductFetch";
import Card from "../../components/Card/Card";
import "./Products.scss";

const Products = () => {
  const location = useLocation();
  const { id, text } = location.state; 

  const { products, loading } = useProductFetch(text); 
  console.log("Fetched products:", products);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="products">
      <div className="head">{text}</div>
      <div className="items">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.map((item) => (
            <Card item={item} key={item.id} handleClick={handleClick} />
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
