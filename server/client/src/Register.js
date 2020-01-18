import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Register extends Component {
 //  registerUrl = "/register";
       registerUrl = "/users/register";
  state = { email: "", password: "" ,redirectToStudent:false,errorNum:0};

  clickRegister = e => {
    e.preventDefault();
    console.log("clicked");
    console.log(this.state.email,this.state.password);
    this.setState({errorNum:0});
    axios
      .post(this.registerUrl, {
        params: {
          email: this.state.email,
          password: this.state.password
        }
        
      })
      .then(res => {
        console.log("then axios");
        console.log(res.data.res);
        if (res.status === 201)
        {
          this.setState({redirectToStudent:true});
          this.props.setUser({email:this.state.email,password:this.state.password})
        }else{
          this.setState({errorNum:res.status});
          console.log('cna not register')
        }
        // this.setState({ data: res.data.res });
      })
      .catch(err => { this.setState({errorNum:600});
      console.log(err)});
  };
  getErrorText=()=>{
    let txtError='';
    switch(this.state.errorNum) {
       
        case 400:
            txtError='User exist';
          break;
        case 600,500:
            txtError='Error';
          break;
        default:
            txtError='Error';
      }
      return txtError;
  }

  render() {
    const disabled=!this.state.email || !this.state.password;

    if (this.state.redirectToStudent){
      return <Redirect to='/'/>
    }
    return (
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
              onChange={e => this.setState({ email: e.target.value,errorNum:0 })}
            />
           
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
           
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value,errorNum:0 })}
            />
          </Form.Group>
          {this.state.errorNum>0?
          <Form.Text style={{color:'red'}}>
            {this.getErrorText()}
          </Form.Text>:''}
          
          
          <Button variant="secondary" type="submit" disabled={disabled}>
            Submit
          </Button>
        </Form>
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
