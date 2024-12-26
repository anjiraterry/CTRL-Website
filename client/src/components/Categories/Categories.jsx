import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Categories = ({}) => {

  
const handleClick= () => {
  window.scrollTo(0,0)
}
  
  
  
  return (
    <div className="categories">
    <div className="col">
    <Link className="link" to="/products/grillz" state={{ id: 0 ,  text:'grillz' }} onClick={handleClick}>
      <div className="row"  style={{ backgroundImage: `url(/img/grillz.jpeg)` }}>
     
        <button>
          
           GRILLZ
          
        </button>
       </div>
      </Link>
      <Link to="/products/rings" state={{ id: 1 , text:'rings' }}  className="link" id="rings" onClick={handleClick}>
      <div className="row"  style={{ backgroundImage: `url(/img/ring.jpg` }} >
     
        <button>
         
            RINGS
        
        </button>
        </div>
        </Link>
     
    </div>
    <div className="col-steeze">
    <Link to="/products/steeze" className="link" state={{ id: 2 , text:'clothes' }}  onClick={handleClick}>
      <div className="row"  style={{ backgroundImage: `url(/img/steeze.jpg)` }}>
        {" "}
      
      
      
        <button>
          
           CLOTHES
         
        </button>
      </div>
      </Link>
    </div>
    <div className="col-l">
      <div className="row-l">
        
        <Link to="/products/chains" className="link" state={{ id: 3 , text:'chains' }} onClick={handleClick}>
          <div className="row"  style={{ backgroundImage: `url(/img/chain.jpeg)` }} >
        
            <button>
             
               CHAINS
            
            </button>
          </div>
          </Link>
        
      
        <Link to="/products/shades" state={{id: 4 , text:'shades'}}  className="link"onClick={handleClick}>
          <div className="row"  style={{ backgroundImage: `url(/img/shades.jpg)` }}>
        
    
            <button>
             
                SHADES
             
            </button>
          </div>
          </Link>
      </div>
      <Link to="/products/1"  state={{ id: 2 , text:'new arrival' }}  className="link">
      <div className="row" style={{ backgroundImage: `url(/img/na.jpg` }}>
     
        <button>
        
            NEW ARRIVAL
         
        </button>
      </div>
       </Link>
    </div>
  </div>
   

  );
};

export default Categories;
