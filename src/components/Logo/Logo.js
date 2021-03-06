import React from "react";
import { Link } from "gatsby";

import imgL1Logo from "../../assets/image/logo-main-black.png";
import imgL1LogoWhite from "../../assets/image/logo-main-white.png";
// import imgL1Logo from "../../assets/image/logo-main-black.png";
// import imgL1LogoWhite from "../../assets/image/logo-main-white.png";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`d-block ${className}`} {...rest}>
      {white ? (
        <img src={imgL1LogoWhite} alt="" height="40px"/>
      ) : (
        <img src={imgL1Logo} alt=""  height="50px"/>
      )}
    </Link>
  );
};

export default Logo;
