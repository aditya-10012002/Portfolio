import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social" >
      <a href="https://twitter.com/AdityaK41533650/" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>  
      <a href="https://www.linkedin.com/in/aditya1001/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/adi_1.00.1/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;
