import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../../components/PaymentModal/PaymentModal";
import useUserProfile from "../../hooks/useUserProfile";
import useFlutterwavePayment from '../../hooks/useFlutterwavePayment'; 
import { useSignupContext } from "../../App";

import { useDispatch } from "react-redux";
import {fetchCart, addItemToCart as addToReduxCart } from "../../redux/cartReducer";
import axios from "axios";

const Product = () => {
  const id = useParams().id;
  const { isSignupOpen, setIsSignupOpen } = useSignupContext();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const { state } = useLocation();
  const { product } = state || {};
  const [modalOpen, setModalOpen] = useState(false);
  const { user, isloading, errormsg } = useUserProfile();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
 const productPrice = parseFloat( product.price) * 1000


 const navigate = useNavigate();
 
  const {  handlePayment } = useFlutterwavePayment(user,productPrice, product?.title );



  
  

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const handleCheckout = () => {
    if (!user) {
    
      setIsSignupOpen(!isSignupOpen)
      return;
    }
    handlePayment(); 
  };
 
  


const handleAddToCart = async () => {
  if (!user) {
    setIsSignupOpen(!isSignupOpen);
    return;
  }

  try {
    const cartItem = {
      user_id: user.id,
      product_id: product.id,
      title: product.title,
      description: product.desc,
      price: product.price,
      img: product.img,
      quantity,
    };

    const response = await axios.post('http://localhost:8000/api/users/cartUpdate', cartItem, {
      headers: {
        'Content-Type': 'application/json',
      
      },
    });

    if (response.status === 201) {
      dispatch(addToReduxCart(response.data)); 
      dispatch(fetchCart(localStorage.getItem('token')));
      console.log('Item added to cart:', response.data);
    } else {
      console.error('Failed to add to cart:', response.data.message);
    }
  } catch (err) {
    console.error('Error adding to cart:', err.response?.data?.message || err.message);
  }
};

  
 

 const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
    console.log(`Selected Payment Method: ${method}`);
   
  };
 



  return (
    <div className="product">
 
        <>
          <div className="left">
            <div className="images">
              <img src={product?.img} alt={product?.title} 
                
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{product?.title} </h1>
            <span className="price">₦{product?.price} </span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => (prev >= product?.stock ?  product?.stock :  prev + 1))}>+</button>
            </div>
            <div className="shopButtons">
            <button
              className="add"
              onClick={handleAddToCart}
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <button
              className="add"
              onClick={ handleCheckout}
            >
              <LocalMallIcon/> BUY NOW
            </button>
            </div>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
            
              <span>Product Type: Swag</span>
              <span>Tag: Swag</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
        <PaymentModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSelectPaymentMethod={handleSelectPaymentMethod}
      />
    </div>
  );
};

export default Product;
