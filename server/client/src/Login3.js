import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./pages/PageTemplate.css";

class Login extends Component {

  loginUrl = "/users/login";
  forgotPassUrl = "/users/forgotPassword";

  state = {
    email: "",
    password: "",
    redirectToStudent: false,
    isError: false,
    redirectToRegister: false,
    forgotPassword: false,
    sentEmailSuccessed: false,
    resetPsdSuccessed: false
  };

  hashCode =(s)=>{
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }

  register = () => {
    this.setState({ redirectToRegister: true });
  };
  
  forgotPassword = () => {
    this.setState({ forgotPassword: true });
  };

  resetPsdSuccessed= () => {
    this.setState({ resetPsdSuccessed: true });
  };

  handleChange = name => e => {
    // this.setState({ userData: {...this.state.userData, [name]: e.target.value},
    this.setState({ [name] : e.target.value});
  };


  clickLogin = e => {
    //e.preventDefault();
    
    this.setState({ isError: false });
    
    axios
      .post(this.loginUrl, {
        email: this.state.email,
        password: this.hashCode(this.state.password)//this.state.password
      })
      .then(res => {
         if (res.status === 200) {
         this.setState({ redirectToStudent: true });
          this.props.setEmail(this.state.email);
          this.props.setToken(res.data);
        } else {
          this.setState({ isError: true });
        }
        // this.setState({ data: res.data.res });
      })
      .catch(err => {
        this.setState({ isError: true });
        console.log(err);
      });
  };

  clickResetPass = e => {

    this.setState({ isError: false });

    axios
      .post(this.forgotPassUrl, {
        email: this.state.email
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({ sentEmailSuccessed: true });
        } else {
          this.setState({ isError: true });
        }
      })
      .catch(err => {
        this.setState({ isError: true });
      });
  };

  render() {

    const disabled = !this.state.email || !this.state.password;

    if (this.state.redirectToStudent) {
       return <Redirect to="/courseHome" />;
     // return <Link to="/courseHome"></Link> ;
    }

    if (this.state.redirectToRegister) {
     return <Redirect to="/register" />;
        // return <Link to="/register"></Link> ;
    }

    if (this.state.forgotPassword) {
      
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
                  value = {this.state.email}
                  required={true}
                  // onChange={e => this.setState({ email: e.target.value })}
                  onChange = {this.handleChange('email')}
                />
              </div>                     
              <button
                id="btn-log-in"
                className="btn btn-lg btn-primary btn-block"
                type="submit"
                // disabled={disabled} 
                onClick={this.clickResetPass}
                style={{backgroundColor:'#37889A'}}
              >
                <div>לשליחת מייל לאיפוס סיסמא</div>
              </button>

            </div>
          </div> 
        </div> 
      )
    }
    
    return (
      <div className="pageTemplate backTemp">
        <div className="card"> 
          <div className="card-body">
            
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder='כתובת דוא"ל'
                required={true}
                // onChange={e => this.setState({ email: e.target.value })}
                onChange = {this.handleChange('email')}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="סיסמא"
                required=""
                // onChange={e => this.setState({ password: e.target.value })}
                onChange = {this.handleChange('password')}
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

            <div className="pt-3" onClick={this.forgotPassword} style={{color:'#37889A'}}>
              שכחת סיסמא?
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
export default Login;
