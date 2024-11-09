import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({item , handleClick}) => {
 
  return (
    <Link className="link" to={`/product/${item?.id}`}  state={{ product: item }} onClick={handleClick} >
      <div className="card">
        <div className="image">
          <img src={item.img}/>
         
       </div>
        <h2>{item?.title.toUpperCase()}</h2>
        <div className="prices">
          <h3> ₦{item?.oldPrice || item?.price + 20}</h3>
          <h3> ₦{item?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
