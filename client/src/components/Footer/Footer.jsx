import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {

  const handleClick= () => {
    window.scrollTo(0,0)
  }
  
  return (
    <div className="footer">
      <div className="top">
      <div className="toplist">
        <div className="item">
          <p>Categories</p>
          <Link to='/products/grillz' state={{ id: 0 ,  text:'grillz' }} onClick={handleClick} >Grillz</Link >
          <Link to='/products/rings' state={{ id: 1 , text:'rings' }}  onClick={handleClick}>Rings</Link >
          <Link to='/products/shades'  state={{id: 2 , text:'shades'}} onClick={handleClick}>Shades</Link >
          <Link to='/products/chains' onClick={handleClick}>Chains</Link >
          <Link to='/products/steeze' onClick={handleClick}>Clothes</Link >
          <Link to='/products/new' onClick={handleClick}>New Arrivals</Link >
        </div>
        <div className="item">
          <p>Links</p>
          <Link to='/faq' >FAQ</Link >
          <Link >Pages</Link >
          <Link >About</Link >
          <Link >Cookies</Link >
          <Link >Terms and Conditions</Link >
        </div>
        <div className="item">
          <p>Contact</p>
          <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
        </div>
        </div>
        <div className="item">
          <p> Look Good, <span className="fg">Feel Good</span> </p>
          <span className="infotext">
          At pr3ssctrl, we know that the right accessories can transform your look.
           Our carefully curated collection offers a range of stylish pieces to elevate your everyday outfits. 
           Discover jewelry that enhances your style and helps you feel your best.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">PR3SSCTRL</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
