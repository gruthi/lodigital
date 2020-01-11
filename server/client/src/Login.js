import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

class Login extends Component {
  loginUrl = "/login";
  state = { data: "" };

  clickLogin = () => {
    console.log("clicked");
    axios
      .get(this.loginUrl,{params: {
        userName: 'gruthi@gmail.com',
        passWord:"1234"
      }})
      .then(res => {
        // console.log(res.data.res);
        // this.setState({ data: res.data.res });
      })
      .catch(err => console.log(err));
  };
  
 
  render() {
    return (
      <div
        style={{
          width: "30%",
          left: "30%",
          position: "absolute",
          padding: "5%"
        }}
        // class="bg-secondary"
      >
         <button onClick={this.clickLogin}>Access express server !!!!!</button>
        <p>Got : {this.state.data}</p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Text className="text-muted">Forgot Password?</Form.Text>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

          <Form.Text className="text-muted">
            Don't have an Account? Register Now!
          </Form.Text>
          <Button variant="secondary" type="submit" onClick={this.clickHandler}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default Login;
