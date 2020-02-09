import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/Home.js";
import Login from "./Login";
import Register from "./Register";
import AboutTheVenture from "./pages/AboutTheVenture.js";
import Goals from "./pages/Goals.js";
import Audience from "./pages/Audience.js";
import TechnologiesAreTaught from "./pages/TechnologiesAreTaught.js";
import CourseFormat from "./pages/CourseFormat.js";
import Projects from "./pages/Projects.js";
import Admission from "./pages/Admission.js";
import Syllabus from "./pages/Syllabus.js";
import AboutFullStack from "./pages/AboutFullStack.js";
import Graduates from "./pages/Graduates.js";
import GraduateInsertProject from "./pages/GraduateInsertProject.js";
import ContactUs from "./pages/ContactUs.js";
import ThanksContactUsInquiries from "./pages/ThanksContactUsInquiries.js";
import ContactUsInquiries from "./pages/ContactUsInquiries.js";
import CourseHome from "./pages/CourseHome.js";


class Routes extends Component {
  state = { user: null, hasMounted : true,token:'' };
  
  setUser = user => {
    this.setState({user: user})
  };

  setToken = token => {
    this.setState({token: token})
  };
    changeHasMounted = () => {
    this.setState({hasMounted : false})
  };

  render() {
    
    return (
      <div className="Routes">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" render={()=><Login setUser={this.setUser}/>} /> */}
          <Route exact path="/login" render={()=><Login setUser={this.setUser} setToken={this.setToken}/>} />
          <Route exact path="/register" render={()=><Register setUser={this.setUser}/>} />
          <Route exact path="/aboutTheVenture" component={AboutTheVenture} />
          <Route exact path="/goals" component={Goals} />
          <Route exact path="/audience" component={Audience} />
          <Route exact path="/technologiesAreTaught" component={TechnologiesAreTaught} />
          <Route exact path="/courseFormat" component={CourseFormat} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/admission" component={Admission} />
          <Route exact path="/syllabus" component={Syllabus} />                
          <Route exact path="/aboutFullStack" component={AboutFullStack} />                
          {/* <Route exact path="/graduates" component={Graduates} /> */}
          <Route exact path="/graduates" render={()=><Graduates token={this.state.token} />} /> 
          <Route exact path="/graduateInsertProject" component={GraduateInsertProject} />                
          <Route exact path="/contactUs" component={ContactUs} /> 
          <Route exact path="/thanksContactUsInquiries" component={ThanksContactUsInquiries} /> 
          <Route exact path="/contactUsInquiries" component={ContactUsInquiries} /> 
          <Route exact path="/courseHome" component={CourseHome} />                
        </Switch>
      </div>
    );
  }
}

export default Routes;