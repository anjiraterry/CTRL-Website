import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
import Card from "../../components/Card/Card";
import Categories from "../../components/Categories/Categories";

const Products = () => {
  const location = useLocation();
  const { name } = useParams();
  const{ id , text} = location.state;
  const [object, setObject] = useState();

  



 
  
  const item = [
    [
      {
          id: "plainjane",
          img: require("../../img/plain3.jpg"),
          title: "plainjane grillz",
          oldPrice:" 12,000",
          price: "10,000"
    
        },
       { 
        id: "matrix",
        img: require("../../img/slgrillz2.jpg"),
        title: "matrix grillz",
        oldPrice:" 22,000",
        price: "20,000"
       },
       { 
        id: "sunder",
        img:require("../../img/sunder4.jpg"),
        title: "sunder grillz",
        oldPrice:" 20,000",
        price: "15,000"
       },
       { 
        id: "hothead",
        img:require("../../img/hot4.jpg"),
        title: "hothead grillz",
        oldPrice:" 25,000",
        price: "20,000"
       },
       { 
        id: "doublesunder",
        img: require("../../img/doubles.jpg"),
        title: "doublesunder grillz",
        oldPrice:" 8,000",
        price: "6,000"
       },
         {
          id: "doubleplain",
          img:require("../../img/doublep4.jpg"),
          title: "doubleplain grillz",
          oldPrice:" 8,000",
          price: "5,000"
        }, 
         {
          id: "single",
          img: require("../../img/single3.jpg"),
          title: "single grillz",
          oldPrice:" 7,000",
          price: "4,500"
         }, 
         {
          id: "gapped",
          img: require("../../img/gap2.jpg"),
          title: "gapfiller grillz",
          oldPrice:" 7,000",
          price: "4,000"
         }
      ],

  [
      {
          id: "ring1",
          img: require("../../img/rings/ring1.png"),
          title: "tree of life ring",
          oldPrice:" 12,000",
          price: "10,000"
    
        },
       { 
        id: "ring2",
        img: require("../../img/rings/ring2.png"),
        title: "viking ice ring",
        oldPrice:" 12,000",
        price: "10,000"
       },
       { 
        id: "ring3",
        img:require("../../img/rings/ring3.png"),
        title: "infinity ring",
        oldPrice:" 15,000",
        price: "12,000"
       },
       { 
        id: "ring4",
        img:require("../../img/rings/ring4.png"),
        title: "triad ring",
        oldPrice:" 15,000",
        price: "10,000"
       },
       { 
        id: "ring5",
        img: require("../../img/rings/ring5.png"),
        title: "tree of life ii ring",
        oldPrice:" 12,000",
        price: "8,000"
       },
         {
          id: "ring6",
          img:require("../../img/rings/ring6.png"),
          title: "odin ring",
          oldPrice:" 10,000",
          price: "8,000"
        }, 
         {
          id: "ring7",
          img: require("../../img/rings/ring7.png"),
          title: "promethues ring",
          oldPrice:" 12,000",
          price: "8,500"
         }, 
         {
          id: "ring8",
          img: require("../../img/rings/ring8.png"),
          title: "galilee ring",
          oldPrice:" 20,000",
          price: "14,000"
         },
         {
          id: "ring9",
          img: require("../../img/rings/ring9.png"),
          title: "galilee ring",
          oldPrice:" 20,000",
          price: "14,000"
         },
         {
          id: "ring10",
          img: require("../../img/rings/ring10.png"),
          title: "triad ring ii",
          oldPrice:" 10,000",
          price: "8,000"
         },
         {
          id: "ring11",
          img: require("../../img/rings/ring11.png"),
          title: "galilee ring",
          oldPrice:" 20,000",
          price: "14,000"
         },
         {
          id: "ring12",
          img: require("../../img/rings/ring12.png"),
          title: "viking ring ii",
          oldPrice:" 20,000",
          price: "14,000"
         }
      ],
    
     [
        {
            id: "shades1",
            img: require("../../img/shades/shades1.png"),
            title: "tree of life shades",
            oldPrice:" 12,000",
            price: "10,000"
      
          },
         { 
          id: "shades2",
          img: require("../../img/shades/shades2.png"),
          title: "viking ice shades",
          oldPrice:" 12,000",
          price: "10,000"
         },
         { 
          id: "shades3",
          img:require("../../img/shades/shades3.png"),
          title: "infinity shades",
          oldPrice:" 15,000",
          price: "12,000"
         },
         { 
          id: "shades4",
          img:require("../../img/shades/shades4.png"),
          title: "triad shades",
          oldPrice:" 15,000",
          price: "10,000"
         },
         { 
          id: "shades5",
          img: require("../../img/shades/shades5.png"),
          title: "tree of life ii shades",
          oldPrice:" 12,000",
          price: "8,000"
         },
           {
            id: "shades6",
            img:require("../../img/shades/shades6.png"),
            title: "odin shades",
            oldPrice:" 10,000",
            price: "8,000"
          }, 
           {
            id: "shades7",
            img: require("../../img/shades/shades7.png"),
            title: "promethues shades",
            oldPrice:" 12,000",
            price: "8,500"
           }, 
           {
            id: "shades8",
            img: require("../../img/shades/shades8.png"),
            title: "galilee shades",
            oldPrice:" 20,000",
            price: "14,000"
           },
           {
            id: "shades9",
            img: require("../../img/shades/shades9.png"),
            title: "galilee shades",
            oldPrice:" 20,000",
            price: "14,000"
           },
           {
            id: "shades10",
            img: require("../../img/shades/shades10.png"),
            title: "triad shades ii",
            oldPrice:" 10,000",
            price: "8,000"
           },
           {
            id: "shades11",
            img: require("../../img/shades/shades11.png"),
            title: "galilee shades",
            oldPrice:" 20,000",
            price: "14,000"
           },
           {
            id: "shades12",
            img: require("../../img/shades/shades12.png"),
            title: "viking shades ii",
            oldPrice:" 20,000",
            price: "14,000"
           }
        ],
    
     
    
      

  ]
   
  
  
 
  

 
  
 
 

 console.log()


   

  
  return (
    <div className="products">
      <div className="head ">{text}</div>
      <div className="list">
     {item[id].map((grill , index) =>( 
      <div >

      <Card item={grill} key={item.id} />
      </div>
      
     ))}
    </div>
    
    </div>
  );
};

export default Products;
