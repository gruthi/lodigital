import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
// import ResetPassword from "./ResetPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavInformation from "./NavInformation.js";
import AboutTheProject from "./pages/AboutTheProject.js";

class App extends Component {
  state = { user: null };
  setUser = user => {
    this.setState({user: user})
  };
  render() {
    return (
      <div className="App">
        {/* <Login/> */}
        {/* <button onClick={this.clickHandler}>Access express server !!!!!</button> */}
        {/* <p>Got : {this.state.data}</p> */}
        <NavInformation />
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" render={()=><Login setUser={this.setUser}/>} />
            <Route exact path="/register" render={()=><Register setUser={this.setUser}/>} />
            {/* <Route exact path="/resetPassword" component={ResetPassword} /> */}
            <Route exact path="/aboutTheProject" component={AboutTheProject} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
