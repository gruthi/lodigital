import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import axios from "axios";
import { Redirect } from "react-router-dom";
//import Popup from "reactjs-popup";
import Modal from "react-bootstrap/Modal";
import "./pages/PageTemplate.css";

   

class Login extends Component {
  //loginUrl = "/login";
  loginUrl = "/users/login";
  state = {
    email: "",
    password: "",
    redirectToStudent: false,
    isError: false,
    redirectToRegister: false,
    redirectToResetPassword: false,
    showModal:true
  };
  hashCode =(s)=>{
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }
  register = () => {
    console.log('reg1');
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
          this.handleClose();
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
  handleClose = () => this.setState({showModal:false});

  render() {
    const disabled = !this.state.email || !this.state.password;

    if (this.state.redirectToStudent) {
      return <Redirect to="/" />;
    }
    if (this.state.redirectToRegister) {
      console.log('reg');
      return <Redirect to="/register" />;
    }
    if (this.state.redirectToResetPassword) {
      return <Redirect to="/resetPassword" />;
    }

    return (
      <div className=" PageTemplate">
      <Modal show={this.state.showModal} onHide={this.handleClose}  >
        <Modal.Header closeButton> ! ברוך שובך</Modal.Header>
        <Modal.Body >
  {/* <div className="container w-25 p-3">   
  
  <div className="row">
    <div className="col main">
      <div id="login">
        <div>
          <form className="form-signin">
            <h6 className="form-signin-heading text-center pb-4 pt-3">
            ! ברוך שובך
            </h6> */}
            <div className="card" >
              <div className="card-body">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Email Address"
                    required={true}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required=""
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </div>
                <div style={{ height: "10px" }}>
                {this.state.isError? <p style={{color:'red',fontSize:'10px',lineHeight:'1px !important;',marginTop:'0',marginBottom:'0'}}> בעיית כניסה</p>:''}
                </div>
                <button
                  id="btn-log-in"
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                  disabled={disabled} 
                  onClick={this.clickLogin}
                  style={{backgroundColor:'#37889A'}}
                >
                  <div>כניסה לחשבונך</div>
                </button>
              </div>
              <div className="card-body text-center">
                <div className="pt-3">
                  <a href="/forgotten-password" style={{color:'#37889A'}}>? שכחת סיסמא</a>
                </div>
                <div className="pt-3">
                  <a href="/register" className="text-muted"  onClick={this.register}>
                    הירשם כעת
                  </a>
                </div>
              </div>
            </div>
          {/* </form>
        </div>
      </div>
    </div>
  </div>
</div> */}
</Modal.Body>
      </Modal>
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
/*  <div
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
      </div> */