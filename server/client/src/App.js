import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Login from "./Login";
import Pic from "./Pic";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  url = "/login";
  state = { data: "" };

  clickHandler = () => {
    console.log("clicked");
    axios
      .get(this.url)
      .then(res => {
        console.log(res.data.res);
        this.setState({ data: res.data.res });
      })
      .catch(err => console.log(err));
     };

  render() {
    return (
      <div className="App">
         <Login/>
         {/* <Pic/> */}
         {/* <button onClick={this.clickHandler}>Access express server !!!!!</button> */}
        {/* <p>Got : {this.state.data}</p> */}
      </div>
    );
  }
}

export default App;
