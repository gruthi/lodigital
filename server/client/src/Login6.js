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
    sumbitButton: 'כניסה לחשבונך',
    forgotPassword: false,
    forgotButton: 'שכחת סיסמא?',
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
    this.setState({ forgotButton: 'חזרה לכניסה לחשבון', sumbitButton: 'לשליחת מייל לאיפוס סיסמא', forgotPassword: true });
  };

  backToLogin = () => {
    this.setState({ forgotButton: 'שכחת סיסמא?', sumbitButton: 'כניסה לחשבונך', forgotPassword: false });
  }
  // resetPsdSuccessed= () => {
  //   this.setState({ resetPsdSuccessed: this.props.location.state.resetPsdSuccessed});
  // };

  handleChange = name => e => {
    this.setState({ [name] : e.target.value});
  };

  componentDidMount(){
    if(this.props.location){
      console.log(this.props.location)
    if(this.props.location.state){
      this.setState({email:this.props.location.state.email,
        resetPsdSuccessed: this.props.location.state.resetPsdSuccessed});
    }  }}
  // handlePropsFromResetPsd = () => {
  //   if(this.props.location.state){
  //     this.setState({email:this.props.location.state.email,
  //       resetPsdSuccessed: this.props.location.state.resetPsdSuccessed});
  //   }

     

  // componentDidUpdate(_props,_state){
  //   console.log(this.props.location.reset.resetPsdSuccessed);
  //   if(this.props.location.state.resetPsdSuccessed)
  //     this.setState({resetPsdSuccessed:true});
  //   // else
  //   //   this.setState({resetPsdSuccessed:false}); 
  // }

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

  clickForgotPsd = e => {

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
    // const disabledLogin = !this.state.email || !this.state.password;
    // const disabledForgotPsd = !this.state.email;

    if (this.state.redirectToStudent) {
       return <Redirect to="/courseHome" />;
    }

    if (this.state.redirectToRegister) {
     return <Redirect to="/register" />;

    }

    // if (this.state.forgotPassword) {
      
      return (
        <div className="pageTemplate backTemp">
          {this.state.sentEmailSuccessed
          ?
          <h3> נשלח מייל עם קישור לאיפוס סיסמא לכתובת שמילאת.</h3>
          :
          <div className="wrraperLogin">
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
                {!this.state.forgotPassword
                ?
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
                :
                ''
                }
                

                <div style={{ height: "10px" }}>
                  {this.state.isError
                  ? 
                  <p style={{color:'red',fontSize:'10px',lineHeight:'1px !important;',marginTop:'0',marginBottom:'0'}}>
                     בעיית כניסה</p>
                  : 
                  ''}
                </div>

                <button
                  id="btn-log-in"
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                  disabled={disabled} 
                  onClick={ this.state.forgotPassword ? this.clickLogin : this.clickForgotPsd }
                  style={{backgroundColor:'#37889A'}}
                >
                  <div>{this.state.sumbitButton}</div>
                </button>

                <div className="pt-3" 
                  onClick={this.state.forgotPassword ? this.clickLogin : this.backToLogin } 
                  style={{color:'#37889A'}}>
                  {this.state.forgotButton} 
                </div>
                
                <div className="pt-3" onClick={this.register} style={{color:'#37889A'}}>
                    הירשם כעת
                </div>

              </div>
            </div>
          </div>
          }
        </div>
        //       {/* <button
        //         id="btn-log-in"
        //         className="btn btn-lg btn-primary btn-block"
        //         type="submit"
        //         // disabled={disabled} 
        //         onClick={this.clickForgotPsd}
        //         style={{backgroundColor:'#37889A'}}
        //       >
        //         <div>לשליחת מייל לאיפוס סיסמא</div>
        //       </button>

        //     </div>
        //   </div> 
        // </div>  */}
      )
    // }
    
   
  }
}

export default Login;