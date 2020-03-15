import React from "react";
import "./HeaderPage.css";
import logo from "./images/lodigital-logo.png";

function HeaderPage(){
   
  return (
    <div className="HeaderPage" expand="md">
      <div className="wrraper">
        <img className="logoImg" src={logo} alt="Logo" />
        <span />
      </div>
     
      {/* <div className="logoImg" /> */}
    </div>
  );
};

export default HeaderPage;