import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/Card";
import useProductFetch from "../../hooks/useProductFetch";
import "./SearchProducts.scss";

const SearchProducts = ({ searchTerm, isModalOpen, setIsModalOpen }) => {
  const location = useLocation();
  const { id = null, text = "" } = location.state || {};
  const { products, loading } = useProductFetch(); 
  const [filteredResults, setFilteredResults] = useState([]);


  
 

  // Filter the results based on the searchTerm
  useEffect(() => {
    if (searchTerm) {
      const results = products.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults(products); // Show all products if no searchTerm
    }
  }, [searchTerm, products]);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching
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
