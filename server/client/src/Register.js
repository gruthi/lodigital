import React, { Component } from "react";
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import axios from "axios";
import { Redirect } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";
import "./pages/PageTemplate.css";

class Register extends Component {
  //  registerUrl = "/register";
  registerUrl = "/users/register";
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    redirectToStudent: false,
    errorNum: 0,
    passwordAccRules: true,
    repeatPasswordIsSame: true,
    showModal:true
  };
  hashCode = s => {
    return s.split("").reduce(function(a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  };
  clickRegister = e => {
    e.preventDefault();
     this.setState({ errorNum: 0 });
    axios
      .post(this.registerUrl, {
        email: this.state.email,
        password: this.hashCode(this.state.password)
      })
      .then(res => {
       if (res.status === 201) {
          this.setState({ redirectToStudent: true });
          // this.props.setUser({
          //   email: this.state.email,
          //   password: this.state.password
          // });
          this.props.setEmail(this.state.email);
          this.handleClose();
        } else {
          this.setState({ errorNum: res.status });
        }
        // this.setState({ data: res.data.res });
      })
      .catch(err => {
        this.setState({ errorNum: err.response.status });
      });
  };
  getErrorText = () => {
    let txtError = "";
    switch (this.state.errorNum) {
      case 400:
        txtError = "User exist";
        break;
      case 600:
        txtError = "You are not authorised to register";
        break;
      case 500:
        txtError = "Error";
        break;
      default:
        txtError = "Error";
    }
    return txtError;
  };
  passwordChange = e => {
    this.setState({ password: e.target.value });
    if (
      e.target.value.length === 0 ||
      (e.target.value.length >= 6 && e.target.value.length <= 12)
    ) {
      this.setState({ passwordAccRules: true });
    } else {
      this.setState({ passwordAccRules: false });
    }
  };
  repeatPasswordChange = e => {
    let tmpRepeatPassword = e.target.value;
    this.setState({ repeatPassword: tmpRepeatPassword });
    if ((this.state.password === tmpRepeatPassword) && (tmpRepeatPassword.length>1)) {
      this.setState({ repeatPasswordIsSame: true });
     
    } else {
      this.setState({ repeatPasswordIsSame: false });
    }
  };
  handleClose = () => this.setState({showModal:false,redirectToStudent:true});
  render() {
    const disabled =
      !this.state.email ||
      !this.state.password ||
      !this.state.passwordAccRules ||
      !this.state.repeatPasswordIsSame;

    if (this.state.redirectToStudent) {
      return <Redirect to="/" />;
    }
    return (
      <div className="pageTemplate backTemp">
      {/* <Modal show={this.state.showModal} onHide={this.handleClose} style={{ marginTop: "200px"}}>
        <Modal.Header closeButton >! מברכים אותך על החלטתך להרשם</Modal.Header>
        <Modal.Body> */}
         
                  <div className="card" >
                    <div className="card-body">
                      <div className="form-group" style={{ marginBottom: "4px"}}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder='כתובת דוא"ל'
                          required=""
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </div>
                      <div style={{ height: "20px" }}></div>
                      <div className="form-group" style={{ marginBottom: "4px"}}>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="סיסמא"
                          required=""
                          onChange={e => this.passwordChange(e)}
                        />
                      </div>

                      <div style={{ height: "20px" }}>
                        {this.state.passwordAccRules ? (
                          ""
                        ) : (
                          <p
                            style={{
                              color: "red",
                              fontSize: "10px",
                              lineHeight: "10px"
                            }}
                          >
                            {" "}
                            אורך סיסמא חייב להיות בין 6 ל12 תווים
                          </p>
                        )}
                      </div>
                      <div className="form-group" style={{ marginBottom: "4px"}}>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="הכנס סיסמתך שוב"
                          required=""
                          onChange={e => this.repeatPasswordChange(e)}
                        />
                      </div>
                      <div style={{ height: "20px" }}>
                        {this.state.repeatPasswordIsSame ? (
                          ""
                        ) : (
                          <p
                            style={{
                              color: "red",
                              fontSize: "10px",
                              lineHeight: "10px"
                            }}
                          >
                            {" "}
                            הסיסמאות אינן תואמות
                          </p>
                        )}
                      </div>
                      {this.state.errorNum > 0 ? 
                      (<p style={{ color: "red" }}> {this.getErrorText()} </p>) : ( "" )}
                      <button
                        id="btn-log-in"
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                        disabled={disabled}
                        onClick={this.clickRegister}
                        style={{ backgroundColor: "#37889A" }}
                      >
                        <div>רישום</div>
                      </button>
                    
            </div>
          </div> 
        {/* </Modal.Body>
      </Modal> */}
      </div>
    );
  }
}
export default Register;

//     <span className="label label-default">Email address</span>
//    <div><input type="text" placeholder="Your mail"/></div>
//  <span className="label label-default">Password</span>
//   <div><input type="email" placeholder="Your Password"/></div>
//  <div><button className="btn btn-secondary" type ="button" onClick={this.clickHandler}> Submit</button></div>

/*
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
        <Form onSubmit={this.clickRegister}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e =>
                this.setState({ email: e.target.value, errorNum: 0 })
              }
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e =>
                this.setState({ password: e.target.value, errorNum: 0 })
              }
            />
          </Form.Group>
          {this.state.errorNum > 0 ? (
            <Form.Text style={{ color: "red" }}>
              {this.getErrorText()}
            </Form.Text>
          ) : (
            ""
          )}

          <Button variant="secondary" type="submit" disabled={disabled}>
            Submit
          </Button>
        </Form>
      </div> */
