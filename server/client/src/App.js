import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header.js";
import NavInformation from "./NavInformation.js";
import Footer from "./Footer.js";
import Home from "./pages/Home.js";
import Login from "./Login";
import Register from "./Register";
import AboutTheVenture from "./pages/AboutTheVenture.js";
import AboutTheCourse from "./pages/AboutTheCourse.js";
import Goals from "./pages/Goals.js";
import Audience from "./pages/Audience.js";
import TechnologiesAreTaught from "./pages/TechnologiesAreTaught.js";
import CourseFormat from "./pages/CourseFormat.js";
import Projects from "./pages/Projects.js";
import Admission from "./pages/Admission.js";
import Syllabus from "./pages/Syllabus.js";
import AboutFullStack from "./pages/AboutFullStack.js";
import Graduates from "./pages/Graduates.js";
// import ContactUs from "./pages/ContactUs.js";
// import AnimationPage from "./pages/AnimationPage.js";
// import FormsNavPage from "./pages/FormsNavPage.js";
// import FormsPage from "./pages/FormsPage.js";

     
class App extends Component {
  state = { user: null };
  setUser = user => {
    this.setState({user: user})
  };
  render() {
    return (
      <div className="App">
        <Header/>
        <NavInformation/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" render={()=><Login setUser={this.setUser}/>} />
            <Route exact path="/register" render={()=><Register setUser={this.setUser}/>} />
            <Route exact path="/aboutTheVenture" component={AboutTheVenture} />
            <Route exact path="/aboutTheCourse" component={AboutTheCourse} />
            <Route exact path="/goals" component={Goals} />
            <Route exact path="/audience" component={Audience} />
            <Route exact path="/technologiesAreTaught" component={TechnologiesAreTaught} />
            <Route exact path="/courseFormat" component={CourseFormat} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/admission" component={Admission} />
            <Route exact path="/syllabus" component={Syllabus} />                
            <Route exact path="/aboutFullStack" component={AboutFullStack} />                
            <Route exact path="/graduates" component={Graduates} />                
            {/* <Route exact path="/contactUs" component={ContactUs} />                 */}
            {/* <Route exact path="/AnimationPage" component={AnimationPage} />                
            <Route exact path="/FormsNavPage" component={FormsNavPage} />  
            <Route exact path="/FormsPage" component={FormsPage} />                               */}
            
          </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
