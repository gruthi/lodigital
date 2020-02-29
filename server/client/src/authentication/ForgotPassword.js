import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../pages/PageTemplate.css";

class ForgotPassword extends Component {

  forgotPsdUrl = "/users/forgotPassword";

  state = {
    user: {
      email: '',
      password: "",
    }, 
    isError: false,
    redirectToRegister: false,
    redirectToLogin: false,
    sentEmailSuccessed: false,
    buttonSending: false
  };

  constructor(props) {
    super(props);
    this.state.user.email = props.email || '' ;
  }

  register = () => {
    this.setState({ redirectToRegister: true });
  };
  
  login = () => {
    this.setState({ redirectToLogin: true });
  };

  // clickForgotPsd = () => {
  clickForgotPsd = e => {

    this.setState({ buttonSending:true, isError: false });

    axios
      .post(this.forgotPsdUrl, {
        email: this.state.user.email
      })
      .then(res => {
        console.log(this.state.user.email);
        if (res.status === 200) {
          this.setState({ sentEmailSuccessed: true });
        } else {
          this.setState({ buttonSending:false, isError: true });
        }
      })
      .catch(err => {
        this.setState({ buttonSending:false, isError: true });
      });
  };

  render() {

    const disabled = !this.state.user.email;

    if (this.state.redirectToLogin) {
       return <Redirect to="/login" />;
    }

    if (this.state.redirectToRegister) {
     return <Redirect to="/register" />;
    }

    return (
      this.state.sentEmailSuccessed
      ?
      <div className="pageTemplate backTemp">
        נשלח מייל עם קישור לאיפוס סיסמא לכתובת שמילאת.
      </div>
      :
      <div className="pageTemplate backTemp">
        <div className="card"> 
          <div className="card-body">
            
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder='כתובת דוא"ל'
                value = {this.state.user.email}
                required={true}
                onChange = {(e) => this.setState({ user: {...this.state.user, email: e.target.value}})}
              />
            </div>                     
            
            <button
              id="btn-log-in"
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              disabled={disabled} 
              onClick={this.clickForgotPsd}
              style={{backgroundColor:'#37889A'}}
            >
              {!this.state.buttonSending ? <span>לשליחת מייל לאיפוס סיסמא</span> : <span>שולח...</span>}
            </button>

            <div className="pt-3" onClick={this.forgotPassword} style={{color:'#37889A'}}>
              חזרה לכניסה לחשבון
            </div>
          
            <div className="pt-3" onClick={this.register} style={{color:'#37889A'}}>
              הירשם כעת
            </div>

          </div>
        </div> 
      </div> 
    );
  }
}

export default ForgotPassword;