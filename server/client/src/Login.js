import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  //loginUrl = "/login";
  loginUrl = "/users/login";
  state = {
    email: "",
    password: "",
    redirectToStudent: false,
    isError: false,
    redirectToRegister: false,
    redirectToResetPassword: false
  };
  hashCode =(s)=>{
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }
  register = () => {
    this.setState({ redirectToRegister: true });
  };
  forgotPassword = () => {
    this.setState({ redirectToResetPassword: true });
  };
  clickLogin = e => {
    e.preventDefault();
    console.log("clicked");
    
    console.log('hashed:'+ this.hashCode(this.state.password));
    console.log(this.state.email, this.state.password);
    this.setState({ isError: false });
    axios
      .post(this.loginUrl, {
        email: this.state.email,
        password: this.hashCode(this.state.password)//this.state.password
      })
      .then(res => {
        console.log("then axios");
        console.log(res.data.res);
        if (res.status === 200) {
          this.setState({ redirectToStudent: true });
          this.props.setUser(res.data);
        } else {
          this.setState({ isError: true });
          console.log("cna not login");
        }
        // this.setState({ data: res.data.res });
      })
      .catch(err => {
        this.setState({ isError: true });
        console.log(err);
      });
  };

  render() {
    const disabled = !this.state.email || !this.state.password;

    if (this.state.redirectToStudent) {
      return <Redirect to="/" />;
    }
    if (this.state.redirectToRegister) {
      return <Redirect to="/register" />;
    }
    if (this.state.redirectToResetPassword) {
      return <Redirect to="/resetPassword" />;
    }

    return (
      <div
        className="jumbotron"
        style={{
          width: "30%",
          left: "30%",
          position: "absolute",
          backgroundColor: "darkgray",
          padding: "5%",
          textAlign: "center"
        }}
      >
        <Form onSubmit={this.clickLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </Form.Group>

          {this.state.isError ? (
            <Form.Text style={{ color: "red" }}>Login Error</Form.Text>
          ) : (
            ""
          )}

          <Button variant="secondary" type="submit" disabled={disabled}>
            Submit
          </Button>
        </Form>
        <Form.Text className="text-muted">
          <button variant="outline-secondary" onClick={this.forgotPassword}>
            Forgot Password?
          </button>
        </Form.Text>
        <Form.Text className="text-muted">
          Don't have an Account?{" "}
          <button variant="outline-secondary" onClick={this.register}>
            {" "}
            Register Now!
          </button>
        </Form.Text>
      </div>
    );
  }
}
export default Login;

//     <span className="label label-default">Email address</span>
//    <div><input type="text" placeholder="Your mail"/></div>
//  <span className="label label-default">Password</span>
//   <div><input type="email" placeholder="Your Password"/></div>
//  <div><button className="btn btn-secondary" type ="button" onClick={this.clickHandler}> Submit</button></div>
