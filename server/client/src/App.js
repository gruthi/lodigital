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
  state = { user: null, hasMounted : true };

  setUser = user => {
    this.setState({user: user})
  };

  changeHasMounted = () => {
    this.setState({hasMounted : false})
  };
  
  render() {
    
    return (
      <div className="App">
        
        <BrowserRouter>
          <HeaderPage/>
          <NavInformation/>
          <Routes/>
          <Footer/>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;