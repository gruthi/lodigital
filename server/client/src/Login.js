import React, { Component } from "react";

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
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
    //e.preventDefault();
    console.log("clicked");
    
    // console.log('hashed:'+ this.hashCode(this.state.password));
    // console.log(this.state.email, this.state.password);
    this.setState({ isError: false });
    axios
      .post(this.loginUrl, {
        email: this.state.email,
        password: this.hashCode(this.state.password)//this.state.password
      })
      .then(res => {
         if (res.status === 200) {
          console.log('--1--');
          console.log(res.data);
         this.setState({ redirectToStudent: true });
          this.props.setEmail(this.state.email);
          this.props.setToken(res.data);
          this.handleClose();
        } else {
          console.log('--2--');
          this.setState({ isError: true });
          console.log("cna not login");
        }
        // this.setState({ data: res.data.res });
      })
      .catch(err => {
        console.log('--3--');
        this.setState({ isError: true });
        console.log(err);
      });
  };
  handleClose = () => this.setState({showModal:false});

  render() {
    const disabled = !this.state.email || !this.state.password;

    if (this.state.redirectToStudent) {
       return <Redirect to="/courseHome" />;
     // return <Link to="/courseHome"></Link> ;
    }
    if (this.state.redirectToRegister) {
      console.log('reg');
    //  return <Redirect to="/register" />;
        return <Link to="/register"></Link> ;

    }
    if (this.state.redirectToResetPassword) {
     // return <Redirect to="/resetPassword" />;
      return <Link to="/resetPassword"></Link> ;
      
    }

    return (
      <div className="pageTemplate backTemp">
      <Modal show={this.state.showModal} onHide={this.handleClose}  >
        <Modal.Header closeButton >! ברוך שובך</Modal.Header>
        <Modal.Body >

              <div className="card"> 
               <div className="card-body">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder='כתובת דוא"ל'
                    required={true}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="סיסמא"
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
              {/* </div> */}
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
          
        </div>
    
</Modal.Body>
      </Modal>
      </div>
    );
  }
}
export default Login;
