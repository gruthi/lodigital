import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../pages/PageTemplate.css";

class Login extends Component {

  loginUrl = "/users/login";

  state = {
    user : {
      email: "",
      password: "",
      manager:false
    },
    redirectToStudent: false,
    isError: false,
    errorNum: 0,
    redirectToRegister: false,
    redirectToForgotPsd: false,
    buttonSending: false
  };

  constructor(props) {
    super(props);
    this.state.user.email = props.email || '';
  }

  hashCode =(s)=>{
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }

  register = () => {
    this.setState({ redirectToRegister: true });
  };
  
  forgotPassword = () => {
    this.setState({ redirectToForgotPsd: true });
  };

  handleChange = name => e => {
    this.setState({ user: {...this.state.user, [name]: e.target.value}, });
  };

  clickLogin = e => {
    this.setState({ buttonSending: true, errorNum: 0 });

    axios
      .post(this.loginUrl, {
        email: this.state.user.email,
        password: this.hashCode(this.state.user.password)//this.state.password
       
      })
      .then(res => {
         if (res.status === 200) {
         this.setState({ redirectToStudent: true });
        
         console.log(res.data.manager);
          this.props.setEmail(this.state.user.email);
          this.props.setToken(res.data.token);
          this.props.setManager(res.data.manager);
          
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
      case 404:
        txtError = "User does not exist";
        break;
      case 500:
        txtError = "Error";
        break;
      default:
        txtError = "Error";
    }
    return txtError;
  };

  render() {

    const disabled = !this.state.user.email || !this.state.user.password;

    if (this.state.redirectToStudent) {
       return <Redirect to="/courseHome" />;
    }

    if (this.state.redirectToRegister) {
     return <Redirect to="/register" />;
    }

    if (this.state.redirectToForgotPsd) {

      return <Redirect to={{
            pathname: '/forgotPassword',
            email: { email: this.state.user.email }
              }}
          />;
    }

    return (
      <div className="pageTemplate backTemp">
        
        {!this.props.resetPsdSuccessed 
        ?
        <h2>אנא הכנס קוד וסיסמא כדי להתחבר:</h2>  
        :
        <h2>הסיסמא שונתה בהצלחה! אנא הכנס קוד וסיסמא כדי להתחבר:</h2>
        }

        <div className="card"> 
          <div className="card-body">
            
            <form autoComplete="on">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder='כתובת דוא"ל'
                  required={true}
                  id='email'
                  value={this.state.user.email }
                  onChange = {this.handleChange('email')}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="סיסמא"
                  required=""
                  id='password'
                  onChange = {this.handleChange('password')}
                />
              </div>

              <div style={{ height: "10px" }}>
                {/* {this.state.isError? <p style={{color:'red',fontSize:'10px',lineHeight:'1px !important;',marginTop:'0',marginBottom:'0'}}> בעיית כניסה</p>:''} */}
                {this.state.errorNum > 0 ? (
              <p style={{color:'red',fontSize:'10px',lineHeight:'1px !important;',marginTop:'0',marginBottom:'0'}} > {this.getErrorText()} </p>
            ) : (
              ""
            )}
              </div>

              <button
                id="btn-log-in"
                className="btn btn-lg btn-primary btn-block"
                type="submit"
                disabled={disabled} 
                onClick={this.clickLogin}
                style={{backgroundColor:'#37889A'}}
              >
                {!this.state.buttonSending ? <span>כניסה לחשבונך</span> : <span>שולח...</span>}
              </button>
            </form> 
            <div className="pt-3 d-inline-block btn" onClick={this.forgotPassword} style={{color:'#37889A'}}>
              שכחת סיסמא?
            </div>
            
            <div className="pt-3 d-inline-block btn" onClick={this.register} style={{color:'#37889A'}}>
                הירשם כעת
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Login;