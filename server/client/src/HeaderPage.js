import React from "react";
import "./HeaderPage.css";
import logo from "./images/lodigital-logo.png";

import { Link } from "react-router-dom";

function HeaderPage(){
   
  return (
    <div className="HeaderPage" expand="md">
      <div className="wrraper">
        <Link to="/" >
          <img className="logoImg" src={logo} alt="Logo" />
        </Link>
        <span />
      </div>
     
      {/* <div className="logoImg" /> */}
    </div>
  );
};

export default HeaderPage;