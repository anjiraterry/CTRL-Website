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
        <div className="row">
          <img
            src="/img/grillz.jpeg"
            alt=""
          />
          <button>
            
             GRILLZ
            
          </button>
         </div>
        </Link>
        <div className="row">
          <img
            src="/img/ring.jpg" 
            alt=""
          />
          <button>
            <Link to="/products/rings" state={{ id: 1 , text:'rings' }}  className="link" id="rings" onClick={handleClick}>
              RINGS
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="/img/steeze.jpg" 
            alt=""
          />
          <button>
            <Link to="/products/steeze" className="link" id="steeze" onClick={handleClick}>
              STEEZE
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="/img/chain.jpeg" 
                alt=""
              />
              <button>
                <Link to="/products/1" className="link" onClick={handleClick}>
                 CHAINS
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="/img/shades.jpg" 
                alt=""
              />
              <button>
                <Link to="/products/shades" state={{id: 2 , text:'shades'}}  className="link"onClick={handleClick}>
                  SHADES
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="/img/na.jpg" 
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              NEW ARRIVAL
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
