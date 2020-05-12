import React, { Component } from "react";
import "./PageTemplate.css";
import axios from "axios";
import CardDeck from 'react-bootstrap/CardDeck'

class ContactUs extends Component {   

  contactUsUrl = "/contactUs";
  
  state = {
    newContant:{
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phone: "",
      education: "",
      occupation: "",
      backSoftwareDvelopment: "",
      tenHours: "",
    }, 
    thanks: false, 
    isError: false
  };
 
  thanks = () => {
    this.setState({ redirectToThanks: true });
  };

  handleChange = name => e => {
      this.setState({ newContant: {...this.state.newContant, [name]: e.target.value},
    });
  };

  clickContactUs = e => {
    e.preventDefault();
    console.log("clickedContactUs");
    console.log(this.state.newContant);
    this.setState({ isError: false });
    axios
      .post(this.contactUsUrl, {
        firstName: this.state.newContant.firstName,
        lastName: this.state.newContant.lastName,
        address: this.state.newContant.address,
        email: this.state.newContant.email,
        phone: this.state.newContant.phone,
        education: this.state.newContant.education,
        occupation: this.state.newContant.occupation,
        backSoftwareDvelopment: this.state.newContant.backSoftwareDvelopment,
        tenHours: this.state.newContant.tenHours,
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({ thanks: true });
        } else {
          this.setState({ isError: true });
        }
      })
      .catch(err => {
        this.setState({ isError: true });
      });
  };

  render() {
    const disabled = !this.state.newContant.firstName || !this.state.newContant.lastName ||
                     !this.state.newContant.address || !this.state.newContant.email ||
                     !this.state.newContant.phone || !this.state.newContant.education ||
                     !this.state.newContant.occupation || !this.state.newContant.backSoftwareDvelopment ||
                     !this.state.newContant.tenHours;
    
    const inputData = [ {label : "שם פרטי:", type : "text", id:'fname', onChange : this.handleChange('firstName') },
                        {label : "שם משפחה:", type : "text", id:'lname', onChange : this.handleChange('lastName') },
                        {label : "כתובת:", type : "text", id:'frmAddress', onChange : this.handleChange('address') },
                        {label : "כתובת אימייל:", type : "email", id:'email', onChange : this.handleChange('email') },
                        {label : "מספר טלפון:", type : "tel", id:'phone', onChange : this.handleChange('phone') },
                        {label : "השכלה:", type : "text", id:'education', onChange : this.handleChange('education') },
                        {label : "עיסוק כיום:", type : "text", id:'occupation', onChange : this.handleChange('occupation') },
                        {label : "רקע בפיתוח תוכנה:", type : "text", id:'backSoftwareDvelopment', onChange : this.handleChange('backSoftwareDvelopment') },
                        // {label : "האם תוכל להשקיע 10 שעות שבועיות בקורס (מעבר לשעות הלימודים)?:", 
                                  // type : "text", id:'tenHours', onChange : this.handleChange('tenHours') }
                      ];
    
    return (
      this.state.thanks
      ?
      <div className="pageTemplate backTemp">
        <h1>תודה על פנייתך! נחזור אליכם בהקדם.</h1>
      </div>
      :
      <div className="pageTemplate backTemp">
        <h1>מתעניינים בקורס? מוזמנים להצטרף אלינו!</h1>
        <h2>אנא מלאו את הפרטים הבאים, ונהיה בקשר בהקדם:</h2>
        <CardDeck>
          
          {inputData.map((item,i) => 
            <div className="form-group m-2" key={i}>
              <label>{item.label}</label>
              <input
                type= {item.type}
                id = {item.id}
                className="form-control mt-0"
                required={true}
                onChange= {item.onChange}
              />
            </div>
          )}
          <div className="form-group m-2">
            <label className="ml-2" >האם תוכל/י להשקיע 10 שעות שבועיות בקורס (מעבר לשעות הלימודים)?</label>
            
            <input type="radio" id="yes" name="tenHours" value="כן" onChange = {this.handleChange('tenHours')}/>
            <label className="mx-2" for="yes" >כן</label>
            <input type="radio" id="no" name="tenHours" value="לא"  onChange = {this.handleChange('tenHours')}/>
            <label className="mx-2" for="no">לא</label>
          </div>
        </CardDeck>
               
        <div>
          {this.state.isError ? <p style={{color:'red',fontSize:'10px',lineHeight:'1px !important;',marginTop:'0',marginBottom:'0'}}> בעיית כניסה</p>:''}
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