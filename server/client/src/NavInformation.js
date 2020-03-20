import React, { Component } from "react";

import "./NavInformation.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { FaHome } from "react-icons/fa";

function LinkContainerNavLink(props) {
  return (
    <LinkContainer to={props.to}>
      <Nav.Link>{props.textLink}</Nav.Link>
    </LinkContainer>
  );
}

class NavInformation extends Component {
  state={ navExpanded:false }
    
  setNavExpanded=(expanded)=> {
    this.setState({ navExpanded: expanded });
  }
  closeNav=()=> {
    this.setState({ navExpanded: false });
  }
  render() {

    return (
      <div className="NavInformation">
        <Navbar expand="md" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav onSelect={this.closeNav} className="mr-auto">
              <LinkContainerNavLink to="/" textLink={<FaHome/>} />
              <LinkContainerNavLink to="/login" textLink="אתר הלימודים" />
              <LinkContainerNavLink to="/aboutTheVenture" textLink="אודות המיזם" />
              <NavDropdown title="אודות הקורס " id="basic-nav-dropdown">
                <LinkContainerNavLink to="/audience" textLink="למי מיועד הקורס" />
                <LinkContainerNavLink to="/technologiesAreTaught" textLink="טכנולוגיות הנלמדות בקורס" />
                <LinkContainerNavLink to="/courseFormat" textLink="זמנים ומתכונת הקורס" />
                <LinkContainerNavLink to="/projects" textLink="פרויקטים ופרויוקטונים" />
                <LinkContainerNavLink to="/admission" textLink="תנאי קבלה" />
                <LinkContainerNavLink to="/syllabus" textLink="סילבוס" />
              </NavDropdown>
              <LinkContainerNavLink to="/syllabus" textLink="סילבוס" />
              <LinkContainerNavLink to="/aboutFullStack" textLink="מה זה full stack ?" />
              <LinkContainerNavLink to="/graduates" textLink="בוגרים" />
              <LinkContainerNavLink to="/contactUs" textLink="צור קשר " />
              {this.props.manager? <LinkContainerNavLink to="/contactsList" textLink="רשימת פניות" />:''}

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavInformation;