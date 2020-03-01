import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import HeaderPage from "./HeaderPage.js";
import NavInformation from "./NavInformation.js";
import Routes from "./Routes.js";
import Footer from "./Footer.js";
// HeaderRoutes = props =>( <HeaderPage/> )

class App extends Component {
  state = { manager: false};
  
  setManager=manager=>{
    this.setState({manager: manager});
   }
  render() {
    
    return (
      <div className="App">
        
        <BrowserRouter>
          <HeaderPage/>
          <NavInformation manager={this.state.manager} />
          <Routes setManager={this.setManager} manager={this.state.manager} />
          <Footer/>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;