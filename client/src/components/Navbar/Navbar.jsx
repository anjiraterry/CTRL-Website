import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton, Box } from '@mui/material';
import { List, ListItem, Typography } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = ({ isSignupOpen, setIsSignupOpen, searchTerm, onSearchChange  }) => {
  const [open,setOpen] = useState(false)

  const products = useSelector((state) => state.cart.products);

  const handleInputChange = (e) => {
    onSearchChange(e.target.value.toLowerCase());
  };

  const [menuOpen, setmenuOpen] = useState(false);

  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
    console.log(menuOpen)
  };


  return (
    <div className="navbar">
      <div className="wrapper">
       <div className="navstart">
       <div>
      
    

  
      <div className={`full-page-menu ${menuOpen ? 'menuOpen' : ''}`}>
        <div>
          <div className="menu-item" onClick={toggleMenu}>
            Home
          </div>
          <div className="menu-item" onClick={toggleMenu}>
            About
          </div>
          <div className="menu-item" onClick={toggleMenu}>
            Contact
          </div>
        </div>
      </div>
    </div>
    <div className={`hamburger-icon ${menuOpen ? 'menuOpen' : ''}`} onClick={toggleMenu}>
      <div className={`line line1 ${menuOpen ? 'menuOpen' : ''}`}></div>
        <div className={`line line2 ${menuOpen ? 'menuOpen' : ''}`}></div>
      </div>
        <div className="head">
       
          <Link className ="link" to="/">PR3SSCTRL</Link>
        </div>
        <div  className="left">
       
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          </div>
          </div>
        
        <div className="img">
            <img src="/img/pc2.png" alt="" className="" />
        
          </div>
        <div className="right">
        
          <div className="icons">
           <div className="search">
            <input
            input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search for products..."
            />
            <SearchIcon/></div> 
            <FavoriteBorderOutlinedIcon/>
            
          </div>
          <div className="iconstwo">
          <div className="signup link " to="signup" onClick={()=> setIsSignupOpen(!isSignupOpen)}> Signup {/*<PersonOutlineOutlinedIcon/> */}</div> 
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
            </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
