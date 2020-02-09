import React, { Component } from "react";
import "./PageTemplate.css";
// import TitlePage from "./TitlePage.js";
// import Button from "react-bootstrap/Button"
// import Form from "react-bootstrap/Form";
import axios from "axios";
import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
import CardDeck from 'react-bootstrap/CardDeck'
// import Modal from "react-bootstrap/Modal";

class ContactUs extends Component {   

  contactUsUrl = "/contactUs";
  
  state = {
    inquiry:{
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phone: "",
      education: "",
      occupation: "",
      BackSoftwareDvelopment: "",
      tenHours: "",
    }, 
    redirectToThanks: false,
    isError: false
    // ,
    // showModal:true
  };
 
  thanks = () => {
    console.log('thanks');
    this.setState({ redirectToThanks: true });
  };

  clickContactUs = e => {
    //e.preventDefault();
    console.log("clickedContactUs");
    console.log(this.state.inquiry);
    this.setState({ isError: false });
    axios
      .post(this.contactUsUrl, {
        firstName: this.state.inquiry.firstName,
        lastName: this.state.inquiry.lastName,
        address: this.state.inquiry.address,
        email: this.state.inquiry.email,
        phone: this.state.inquiry.phone,
        education: this.state.inquiry.education,
        occupation: this.state.inquiry.occupation,
        BackSoftwareDvelopment: this.state.inquiry.BackSoftwareDvelopment,
        tenHours: this.state.inquiry.tenHours,
      })
      .then(res => {
        console.log("then axios");
        console.log('res.data-'+res.data);
        if (res.status === 200) {
          console.log('--4--');
         this.setState({ redirectToThanks: true });
        //  this.handleClose();
        } else {
          console.log('--2--');
          this.setState({ isError: true });
          console.log("can not send your inquiry. please try again later");
        }
      })
      .catch(err => {
        console.log('--3--');
        this.setState({ isError: true });
        console.log(err);
      });
  };
  // handleClose = () => this.setState({showModal:false});

  render() {
    const disabled = !this.state.inquiry.firstName || !this.state.inquiry.lastName ||
                     !this.state.inquiry.address || !this.state.inquiry.email ||
                     !this.state.inquiry.phone || !this.state.inquiry.education ||
                     !this.state.inquiry.occupation || !this.state.inquiry.BackSoftwareDvelopment ||
                     !this.state.inquiry.tenHours;
    
    if (this.state.redirectToThanks) {
       return <Redirect to="/ThanksContactUsInquiries" />;
    };
disabled? console.log ( this.state.inquiry, disabled ):console.log ( this.state.inquiry, disabled ) 
    return (
      <div className="pageTemplate backTemp">
        <CardDeck>
          <div className="form-group">
            <label>שם פרטי:</label>
            <input
              type="text"
              className="form-control"
              required={true}
              onChange={e => this.setState({ inquiry: {...this.state.inquiry, firstName: e.target.value }})}
            />
          </div>
          <div className="form-group">
            <label>שם משפחה:</label>
            <input
              type="text"
              className="form-control"
              required={true}
              onChange={e => this.setState({ inquiry: {...this.state.inquiry, lastName: e.target.value }})}
            />
          </div>
          <div className="form-group">
          <label>כתובת:</label>
            <input
              type="text"
              className="form-control"
              required={true}
              onChange={e => this.setState({ inquiry: {...this.state.inquiry, address: e.target.value }})}
            />
          </div>
          <div className="form-group">
          <label>כתובת דואר:</label>
            <input
              type="text"
              className="form-control"
              required={true}
              onChange={e => this.setState({ inquiry: {...this.state.inquiry, email: e.target.value }})}
            />
          </div>
          <div className="form-group">
          <label>מספר טלפון:</label>
            <input
              type="text"
              className="form-control"
              required={true}
              onChange={e => this.setState({ inquiry: {...this.state.inquiry, phone: e.target.value }})}
            />
          </div>
          <div className="form-group">
            <label>השכלה:</label>
            <input
              type="text"
              className="form-control"
              required={true}
              onChange={e => this.setState({ inquiry: {...this.state.inquiry, education: e.target.value }})}
            />
          </div>
          <div className="form-group">
            <label>עיסוק כיום:</label>
            <input
              type="text"
              className="form-control"
              required={true}
              onChange={e => this.setState({ inquiry: {...this.state.inquiry, occupation: e.target.value }})}
            />
          </div>
          <div className="form-group">
            <label>רקע בפיתוח תוכנה:</label>
            <input
              type="text"
              className="form-control"
              required={true}
              onChange={e => this.setState({ inquiry: {...this.state.inquiry, BackSoftwareDvelopment: e.target.value }})}
            />
          </div>
          <div className="form-group">
            <label>האם תוכל להשקיע 10 שעות שבועיות בקורס (מעבר לשעות הלימודים)?</label>
            <input
              type="text"
              className="form-control"
              required={true}
              onChange={e => this.setState({ inquiry: {...this.state.inquiry, tenHours: e.target.value }})}
            />
          </div>
        </CardDeck>
              
               
                <div style={{ height: "10px" }}>
                {this.state.isError? <p style={{color:'red',fontSize:'10px',lineHeight:'1px !important;',marginTop:'0',marginBottom:'0'}}> בעיית כניסה</p>:''}
                </div>
                <button
                  id="btn-log-in"
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                  disabled={disabled} 
                  onClick={this.clickContactUs}
                  style={{backgroundColor:'#37889A'}}
                >
                  <div>שלח</div>
                </button>
              
              </div>
           
    );
  }
}

export default ContactUs;
