import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../pages/PageTemplate.css";

class Login extends Component {

  loginUrl = "/users/login";

  state = {
    user : {
      email: "",
      password: ""
    },
    redirectToStudent: false,
    isError: false,
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

  // resetPsdSuccessed= () => {
  //   this.setState({ resetPsdSuccessed: this.props.location.state.resetPsdSuccessed});
  // };

  handleChange = name => e => {
    this.setState({ user: {...this.state.user, [name]: e.target.value}, });
  };

  // componentDidUpdate(_props,_state){
  //   console.log(this.props.location.reset.resetPsdSuccessed);
  //   if(this.props.location.state.resetPsdSuccessed)
  //     this.setState({resetPsdSuccessed:true});
  //   // else
  //   //   this.setState({resetPsdSuccessed:false}); 
  // }

  clickLogin = e => {
    e.preventDefault();
    
    this.setState({ buttonSending:true, isError: false });
    
    axios
      .post(this.loginUrl, {
        email: this.state.user.email,
        password: this.hashCode(this.state.user.password)//this.state.password
      })
      .then(res => {
         if (res.status === 200) {
         this.setState({ redirectToStudent: true });
          this.props.setEmail(this.state.user.email);
          this.props.setToken(res.data);
        } else {
          this.setState({ buttonSending:false, isError: true });
        }
        // this.setState({ data: res.data.res });
      })
      .catch(err => {
        this.setState({ buttonSending:false, isError: true });
      });
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
      return <Redirect to="/forgotPassword" />;
    }

    return (
      <div className="pageTemplate backTemp">
        
        {!this.props.resetPsdSuccessed 
        ?
        <h1>אנא הכנס קוד וסיסמא כדי להתחבר:</h1>  
        :
        <h1>הסיסמא שונתה בהצלחה! אנא הכנס קוד וסיסמא כדי להתחבר:</h1>
        }

        <div className="card"> 
          <div className="card-body">
            
            <form autoComplete="on">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder='כתובת דוא"ל'
                  required={true}
                  // onChange={e => this.setState({ email: e.target.value })}
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
                {!this.state.buttonSending ? <span>כניסה לחשבונך</span> : <span>שולח...</span>}
              </button>
            </form> 

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