import React, { Component } from "react";
import "./pages/PageTemplate.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import CardDeck from 'react-bootstrap/CardDeck'

class ResetPassword extends Component {   

  resetPasswordUrl = "/users/resetPassword";
  
  state = {
    userData : {
      email: "",
      password: "",
      confirmPass: "",
    }, 
    redirectToLogin: false,
    isError: false,
    resetPsdSuccessed: true  ////*??
  };
 
  redirectToLogin = () => {
    console.log('login');
    this.setState({ redirectToLogin: true });
  };

  hashCode = s => {
    return s.split("").reduce(function(a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  };

  handleChange = name => e => {
    this.setState({ userData: {...this.state.userData, [name]: e.target.value},
    });
  };

  clickResetPassword = e => {
    
    //e.preventDefault();
    
    this.setState({ isError: false });
    
    axios
      .put(this.resetPasswordUrl, {
        email: this.state.userData.email,
        password: this.hashCode(this.state.userData.password),
        token: this.props.match.params.token
      })
      .then(res => {
    
        console.log("then axios");
        console.log('res.data: '+res.data);
    
        if (res.status === 200) {
          this.setState({ redirectToLogin: true });
        } else {
          this.setState({ isError: true });
          console.log("can not reset your password. please try again later");
        }
      })
      .catch(err => {
        this.setState({ isError: true });
        console.log(err);
      });
  };

  render() {
    const disabled = !this.state.userData.email || !this.state.userData.password || !this.state.userData.confirmPass;

    const inputData = [ { type : "text", placeholder : 'כתובת דוא"ל', onChange : this.handleChange('email') },
                        { type : "text", placeholder : "סיסמא", onChange : this.handleChange('password') },
                        { type : "text", placeholder : "הקש שוב את הסיסמא", onChange : this.handleChange('confirmPass') }
                      ];
    
    if (this.state.redirectToLogin) {
      // return <Redirect to="/login" />;
      return <Redirect to={{
          pathname: '/login',
          reset: { resetPsdSuccessed: true }
            }}
        />;
    };
   
    return (
      <div className="pageTemplate backTemp">
        <CardDeck>
          {inputData.map((item,i) => 
              <div className="form-group" key={i}>
                <input
                  type= {item.type}
                  className="form-control"
                  placeholder={item.placeholder}
                  required={true}
                  onChange= {item.onChange}
                />
              </div>
            )}
        </CardDeck>
               
        <div style={{ height: "10px" }}>
          {this.state.isError? <p style={{color:'red',fontSize:'10px',lineHeight:'1px !important;',marginTop:'0',marginBottom:'0'}}> בעיית כניסה</p>:''}
        </div>

        <button
          id="btn-log-in"
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          disabled={disabled} 
          onClick={this.clickResetPassword}
          style={{backgroundColor:'#37889A'}}
        >
          <div>שלח</div>
        </button>
              
      </div>
    );
  }
}

export default ResetPassword;