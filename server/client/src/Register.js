import React, { Component } from "react";
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Register extends Component {
  //  registerUrl = "/register";
  registerUrl = "/users/register";
  state = { email: "", password: "",repeatPassword: "", redirectToStudent: false, errorNum: 0 ,passwordAccRules:true,repeatPasswordIsSame:true};
  hashCode =(s)=>{
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }
  clickRegister = e => {
    e.preventDefault();
    console.log("clicked");
    console.log(this.state.email, this.state.password);
    this.setState({ errorNum: 0 });
    axios
      .post(this.registerUrl, {
        
          email: this.state.email,
          password:this.hashCode(this.state.password)
        
      })
      .then(res => {
        console.log("then axios");
        console.log(res.data.res);
        if (res.status === 201) {
          this.setState({ redirectToStudent: true });
          this.props.setUser({
            email: this.state.email,
            password: this.state.password
          });
        } else {
          this.setState({ errorNum: res.status });
          console.log("cna not register");
        }
        // this.setState({ data: res.data.res });
      })
      .catch(err => {
        this.setState({ errorNum: 600 });
        console.log(err);
      });
  };
  getErrorText = () => {
    let txtError = "";
    switch (this.state.errorNum) {
      case 400:
        txtError = "User exist";
        break;
      case 600:
      case 500:
        txtError = "Error";
        break;
      default:
        txtError = "Error";
    }
    return txtError;
  };
   passwordChange=(e)=>{
    this.setState({ password: e.target.value });
    if(e.target.value.length ===0 || (e.target.value.length>=6 && e.target.value.length<=12)){
      this.setState({passwordAccRules:true});
    }
    else{
      this.setState({passwordAccRules:false});
    }
   }
   repeatPasswordChange=(e)=>{
    this.setState({ repeatPassword: e.target.value });
    if(this.state.password === this.state.repeatPassword){
      this.setState({repeatPasswordIsSame:true});
    }else{
      this.setState({repeatPasswordIsSame:false});
    }
   }
  render() {
    const disabled = !this.state.email || !this.state.password || !this.state.passwordAccRules || !this.state.repeatPasswordIsSame;

    if (this.state.redirectToStudent) {
      return <Redirect to="/" />;
    }
    return (
   
  <div className="container w-25 p-3">   
  
  <div className="row">
    <div className="col main">
      <div id="login">
        <div>
          <form className="form-signin">
            <h6 className="form-signin-heading text-center pb-4 pt-3">
            ! מברכים אותך על החלטתך להרשם
            
            </h6>
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Email Address"
                    required=""
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required=""
                    onChange={e=>this.passwordChange(e)}
                  />
                </div>
                <div>
                {this.state.passwordAccRules? '':<p style={{color:'red',fontSize:'10px'}}> אורך סיסמא חייב להיות בין 6 ל12 תווים</p>}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Repeat Password"
                    required=""
                    onChange={e => this.setState({ repeatPassword: e.target.value })}
                  />
                </div>
                {this.state.repeatPasswordIsSame? '':<p style={{color:'red',fontSize:'10px'}}> הסיסמאות אינם תואמות</p>}
                              
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
              
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
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