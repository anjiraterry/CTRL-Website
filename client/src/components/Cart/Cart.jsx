import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector} from "react-redux";
import useUserProfile from "../../hooks/useUserProfile";
import useFlutterwavePayment from '../../hooks/useFlutterwavePayment'; 
import { clearCart, fetchCart, removeCartItem , resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const { user, isloading, errormsg } = useUserProfile();
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

 
  const { products, status } = useSelector((state) => state.cart); 

  useEffect(() => {
    if (user) {
      dispatch(fetchCart(token)); 
    }
  }, [user, dispatch, token]);

  const removeFromReduxCart= (id) => {
    dispatch(removeCartItem({ token, id, user }));
  };
  const handleResetCart = async () => {
    try {

      dispatch(clearCart({ token, userId: user.id }));
  
      dispatch(resetCart());
    } catch (err) {
      console.error('Error resetting cart:', err.message);
    }
  };
  

  const totalPrice = () => {
    return products.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  const { handlePayment } = useFlutterwavePayment(user, totalPrice(), "CART CHECKOUT");

  return (
    <div className="cart">
      {isloading ? (
        <div>Loading...</div>
      ) : errormsg ? (
        <div><h2>Please Login or Sign Up</h2></div>
      ) : !user ? (
        <div></div>
      ) : (
        <div>
          <h1>Products in your cart</h1>
          {products.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            products.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                  <h1>{item.title}</h1>
                  <p>{item.description?.substring(0, 100)}</p>
                  <div className="price">
                    {item.quantity} x ₦{item.price}
                  </div>
                </div>
                <DeleteOutlinedIcon
                  className="delete"
                  onClick={() => removeFromReduxCart(item.id)}
                />
              </div>
            ))
          )}
          <div className="total">
            <span>SUBTOTAL</span>
            <span>₦{totalPrice()}</span>
          </div>
          <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
          <span className="reset" onClick={() => handleResetCart()}>
            Reset Cart
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
