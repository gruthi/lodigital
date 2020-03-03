import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";


function Footer(){
   
  return (
      <div className="Footer container-fluid">
        <div className="row">
          <div className="col-3">
            <a href='https://facebook.com/lodigital2019' > 
              <FaFacebook />
            </a>
          </div>
          <div  className="col-6 text-center">
            האתר נבנה בידי בוגרות הקורס
          </div>  
      </div>
    </div>
    
  );
};

export default Footer;