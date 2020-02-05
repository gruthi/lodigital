import React from "react";
import { Link } from "react-router-dom";
import "./PageTemplate.css";

const NotFound = () => (
  <div>
    <div className="pageTemplate backTemp">
      <center>
        <h1>ERROR 404 </h1>
        <div />
        <h1>Page Not Found</h1>
        <Link to="/">
          <i className="fas fa-home "></i>
        </Link>
      </center>
    </div>
  </div>
);
export default NotFound;
