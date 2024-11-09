import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./SearchProducts.scss";
import Card from "../../components/Card/Card";
import Categories from "../../components/Categories/Categories";
const itemsData = require("../../pages/data/items.js");

const SearchProducts = ({ searchTerm, isModalOpen, setIsModalOpen }) => {
  const location = useLocation();
  const { name } = useParams();
  const { id = null, text = "" } = location.state || {};
  const [object, setObject] = useState();

  


  const items = itemsData.item.flat();

  const filteredResults = items.filter((item) =>
  item.title.toLowerCase().includes(searchTerm)
);

const handleClick= () => {
  window.scrollTo(0,0)
}
 

  return (
    <div className="products">
    {isModalOpen && (
      <div className="searchproduct">
        <div className="close-cont">
          <div className="close-modal" onClick={() => setIsModalOpen(false)}>
            &times;
          </div>
          </div>
          <div className="list">
            {filteredResults.length > 0 ? (
              filteredResults.map((item) => (
                <Card
                  item={item}
                  key={item.id}
                  handleClick={() => setIsModalOpen(false)} 
                />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        
      </div>
    )}
  </div>
  );
};

export default SearchProducts;
