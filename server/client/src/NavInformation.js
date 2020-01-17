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
                <Nav.Link href="/"><i className="fas fa-home"></i>&nbsp;&nbsp;בית</Nav.Link>
                <Nav.Link href="/login">אתר הלימודים</Nav.Link>
                <Nav.Link href="/aboutTheProject">אודות המיזם</Nav.Link>
                <NavDropdown title="אודות הקורס " id="basic-nav-dropdown" href="/aboutTheCourse">
                  <NavDropdown.Item href="/goals/3.1">מטרות הקורס</NavDropdown.Item>
                  <NavDropdown.Item href="/audience/3.2">למי מיועד הקורס</NavDropdown.Item>
                  <NavDropdown.Item href="/technologiesAreTaught/3.3">טכנולוגיות הנלמדות בקורס</NavDropdown.Item>
                  <NavDropdown.Item href="/times&CourseFormat/3.4">זמנים ומתכונת הקורס</NavDropdown.Item>
                  <NavDropdown.Item href="/Projects/3.5">פרויקטים ופרויוקטונים</NavDropdown.Item>
                  <NavDropdown.Item href="/Admission/3.6">תנאי קבלה</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/syllabus/3.7">סילבוס</NavDropdown.Item>
                </NavDropdown>
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
  