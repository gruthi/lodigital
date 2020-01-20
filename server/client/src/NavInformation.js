import React, { Component } from "react";
import "./NavInformation.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


class NavInformation extends Component {

      render() {
    
      
    
      return (
        <div className="NavInformation">
          <div className="top" expand="md"><div></div></div>
          <Navbar  expand="md">
            {/* <Navbar.Brand href="#home">בית</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"><i className="fas fa-home"></i></Nav.Link>
                <Nav.Link href="/login">אתר הלימודים</Nav.Link>
                <Nav.Link href="/aboutTheVenture">אודות המיזם</Nav.Link>
                {/* <Nav.Link href="/aboutTheCourse"> */}
                  <NavDropdown title="אודות הקורס " id="basic-nav-dropdown" >
                    <NavDropdown.Item href="/audience">למי מיועד הקורס</NavDropdown.Item>
                    <NavDropdown.Item href="/technologiesAreTaught">טכנולוגיות הנלמדות בקורס</NavDropdown.Item>
                    <NavDropdown.Item href="/courseFormat">זמנים ומתכונת הקורס</NavDropdown.Item>
                    <NavDropdown.Item href="/projects">פרויקטים ופרויוקטונים</NavDropdown.Item>
                    <NavDropdown.Item href="/admission">תנאי קבלה</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/syllabus">סילבוס</NavDropdown.Item>
                  </NavDropdown>
                {/* </Nav.Link> */}
                <Nav.Link href="/syllabus">סילבוס</Nav.Link>
                <Nav.Link href="/aboutFullStack">מה זה full stack ?</Nav.Link>
                <Nav.Link href="/graduates">בוגרים</Nav.Link>
                <Nav.Link href="/contactUs">צור קשר</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <div className="main" expand="md"></div>
          <div className="bottom" expand="md"></div> */}
        </div>
      );
    }
  }
  
export default NavInformation;
  