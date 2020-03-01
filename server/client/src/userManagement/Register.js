import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../pages/PageTemplate.css";

class Register extends Component {
  registerUrl = "/users/register";
  state = {
    user: {
      email: "",
      password: "",
      repeatPassword: ""
    },
    redirectToStudent: false,
    errorNum: 0,
    passwordAccRules: true,
    repeatPasswordIsSame: true,
    showModal: true,
    buttonSending: false
  };
  hashCode = s => {
    return s.split("").reduce(function(a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  };
  clickRegister = e => {
    e.preventDefault();
    this.setState({ buttonSending: true, errorNum: 0 });
    axios
      .post(this.registerUrl, {
        email: this.state.user.email,
        password: this.hashCode(this.state.user.password),
        manager:false
      })
      .then(res => {
        if (res.status === 201) {
          this.setState({ redirectToStudent: true });
          this.props.setEmail(this.state.user.email);
          this.handleClose();
        } else {
          this.setState({ buttonSending: false, errorNum: res.status });
        }
      })
      .catch(err => {
        this.setState({ buttonSending: false, errorNum: err.response.status });
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
    //this.setState({ password: e.target.value });
    this.setState({ user: { ...this.state.user, password: e.target.value } });
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
    this.setState({
      user: { ...this.state.user, repeatPassword: e.target.value }
    });
    if (
      this.state.user.password === tmpRepeatPassword &&
      tmpRepeatPassword.length > 1
    ) {
      this.setState({ repeatPasswordIsSame: true });
    } else {
      this.setState({ repeatPasswordIsSame: false });
    }
  };
  handleChange = name => e => {
    this.setState({ user: { ...this.state.user, [name]: e.target.value } });
  };
  handleClose = () =>
    this.setState({ showModal: false, redirectToStudent: true });
  render() {
    const disabled =
      !this.state.user.email ||
      !this.state.user.password ||
      !this.state.passwordAccRules ||
      !this.state.repeatPasswordIsSame;

    if (this.state.redirectToStudent) {
      return <Redirect to="/" />;
    }
    return (
      <div className="pageTemplate backTemp">
        <div className="card">
          <div className="card-body">
            <div className="form-group" style={{ marginBottom: "4px" }}>
              <input
                type="text"
                className="form-control"
                placeholder='כתובת דוא"ל'
                required=""
                onChange={this.handleChange("email")}
              />
            </div>
            <div style={{ height: "20px" }}></div>
            <div className="form-group" style={{ marginBottom: "4px" }}>
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
            <div className="form-group" style={{ marginBottom: "4px" }}>
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
            {this.state.errorNum > 0 ? (
              <p style={{ color: "red" }}> {this.getErrorText()} </p>
            ) : (
              ""
            )}
            <button
              id="btn-log-in"
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              disabled={disabled}
              onClick={this.clickRegister}
              style={{ backgroundColor: "#37889A" }}
            >
              {!this.state.buttonSending ? (
                <span>רישום</span>
              ) : (
                <span>שולח...</span>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
