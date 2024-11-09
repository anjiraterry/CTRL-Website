import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
import Card from "../../components/Card/Card";
import Categories from "../../components/Categories/Categories";
const items = require("../data/items.js")

const Products = () => {
  const location = useLocation();
  const { name } = useParams();
  const{ id , text} = location.state;
  const [object, setObject] = useState();

  


const item = items.item

const handleClick= () => {
  window.scrollTo(0,0)
}
 
  
  
 
  

 
  
 
 

 console.log()


   

  
  return (
    <div className="products">
      <div className="head ">{text}</div>
      <div className="items">
     {item[id].map((item , index) =>( 
    
      <Card item={item} key={item.id} handleClick={handleClick}   />
   
      
     ))}
    </div>
    
    </div>
  );
};

export default Products;
