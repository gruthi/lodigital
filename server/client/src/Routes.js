import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/Home.js";
import Login from "./userManagement/Login";
import Logout from "./userManagement/Logout";
import Register from "./userManagement/Register";
import ForgotPassword from "./userManagement/ForgotPassword";
import ResetPassword from "./userManagement/ResetPassword.js";
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
import ContactsList from "./pages/ContactsList.js";
import CourseHome from "./pages/CourseHome.js";


class Routes extends Component {
  state = { email: null, hasMounted : true ,token:'', resetPsdSuccessed: false };
  
  
  setEmail = email => {
    this.setState({email: email})
  };

  setToken = token => {
    this.setState({token: token})
  };

  setResetPsdSuccessed = () => {
    this.setState({resetPsdSuccessed: true})
  };
 
  //   changeHasMounted = () => {
  //   this.setState({hasMounted : false})
  // };

  render() {
    
    return (
      <div className="Routes">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" render={()=><Login email={this.state.email} setEmail={this.setEmail} setToken={this.setToken} resetPsdSuccessed={this.state.resetPsdSuccessed} />} />
          <Route exact path="/logout" render={()=><Logout setEmail={this.setEmail} setToken={this.setToken}/>} />
          <Route exact path="/register" render={()=><Register setEmail={this.setEmail}/>} />
          <Route exact path="/forgotPassword" render={()=><ForgotPassword email={this.state.email}/>} />
          <Route exact path="/resetPassword/:token" render={(props)=><ResetPassword {...props} setEmail={this.setEmail} setResetPsdSuccessed={this.setResetPsdSuccessed} />} />
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
          <Route exact path="/graduates" render={()=><Graduates token={this.state.token} email={this.state.email}/>} /> 
          <Route exact path="/graduateInsertProject" render={()=><GraduateInsertProject token={this.state.token}/>} />                
          <Route exact path="/contactUs" component={ContactUs} /> 
          <Route exact path="/contactsList" component={ContactsList} /> 
          <Route exact path="/courseHome" component={CourseHome} />                
        </Switch>
      </div>
    );
  }
}

export default Routes;