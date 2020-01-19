// import React, { Component } from "react";
import React from "react";
import "./PageTemplate.css";

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// class PageTemplate extends Component {
function PageTemplate(props) {

    //   render() {
        return (
          <div className="PageTemplate">
            {props.content}
          </div>
        );
    // }
  };
  
export default PageTemplate;
  