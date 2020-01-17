import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

class Login extends Component {
  loginUrl = "/user/login";
  state = { userMail: "", userPassWord: "" };

  clickLogin = e => {
    e.preventDefault();
    console.log("clicked");
    axios
      .get(this.loginUrl, {
        params: {
          email: this.state.userMail,
          passWord: this.state.userPassWord
        }
      })
      .then(res => {
        console.log("then axios");
        console.log(res.data.res);
        // this.setState({ data: res.data.res });
      })
      .catch(err => console.log(err));
  };

  render() {
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
        {/* <button onClick={this.clickLogin}>Access express server !!!!!</button> */}
        {/* <p>Got : {this.state.data}</p> */}
        <Form onSubmit={this.clickLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => this.setState({ userMail: e.target.value })}
            />
            {/* {
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            } */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Text className="text-muted">Forgot Password?</Form.Text>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ userPassWord: e.target.value })}
            />
          </Form.Group>
          {/* { <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> } */}

          <Form.Text className="text-muted">
            Don't have an Account? Register Now!
          </Form.Text>

          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
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
