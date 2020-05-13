import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
// import { AiOutlineLinkedin } from "react-icons/ai";


function Footer(){
   
  return (
      <div className="Footer container-fluid">
        {/* <div className="row"> */}
          {/* <div className="col-sm-3">
            <a href='https://facebook.com/lodigital2019' > 
              <FaFacebook />
            </a>
          </div>
          <div  className="col-sm-6 text-center">
            האתר נבנה בידי בוגרות הקורס רותי גליק & אילנה חן *
          </div> 
          <div className="col-sm-3 text-right">
           אתר בהרצה * 
          </div>  */}
          <div className="to-left">
            <a href='https://facebook.com/lodigital2019' target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
          <div className="to-right">
          אתר בהרצה - נבנה על ידי 
          <a href='https://www.linkedin.com/in/ruthi-glick-2a81a311' target="_blank" rel="noopener noreferrer"> רותי גליק <AiFillLinkedin/> </a>
           & 
           <a href='https://www.linkedin.com/in/ilana-hen-05300b198/' target="_blank" rel="noopener noreferrer"> אילנה חן <AiFillLinkedin/> </a>
           מבוגרי הקורס
          </div> 
          {/* <div className="text-right">
           אתר בהרצה * 
          </div>  */}
      {/* </div> */}
    </div>
    
  );
};

export default Footer;