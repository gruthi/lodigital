import React, { Component } from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";
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
        <TitlePage title="תודה על פנייתך! נחזור אליכם בהקדם."/>
      </div>
      :
      <div className="pageTemplate backTemp">
        <TitlePage title="מתעניינים בקורס? מוזמנים להצטרף אלינו!"/>
        <TitlePage subTitle="אנא מלאו את הפרטים הבאים, ונהיה בקשר בהקדם:"/>
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


// <!DOCTYPE html>
// <html>
// <body>

// <h1>The form autocomplete attribute</h1>

// <p>Fill in and submit the form, then reload the page, start to fill in the form again - and see how autocomplete works.</p>
// <p>Then, try to set autocomplete to "off".</p>
// c
// <!--<form action="/action_page.php" method="get" autocomplete="on">-->
// <input type="text" name="fname" placeholder='fname'><br></br>

//   <input type="text" name="lname" placeholder='lname'></br></br>
  
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname">
//    <label for="pwd">Password:</label><br>
//   <input type="password" id="pwd" name="pwd">
//   <label for="email">Enter your email:</label>
//   <input type="email" id="email" name="email">
//   <label for="myfile">Select a file:</label>
//   <input type="file" id="myfile" name="myfile">
//   <label for="phone">Enter your phone number:</label>
//   <input type="tel" id="phone" name="phone" pattern="([0-9]{3}-[0-9]{2}-[0-9]{3})||([0-9]{10})">

// <!--  
// <input name="fname" autocomplete="given-name" type="text" placeholder="First Name" required></br></br>

// <input name="fname"  autocomplete="family-name" type="text" placeholder="last Name" required></br></br>

// <input  name="street-address"  type="text" placeholder="address" required></br></br>

// <input  name="tel-country-code" type="tel" placeholder="tel" required></br></br>

// <input name="fname"  autocomplete="family-name" type="text" placeholder="last Name" required></br></br>
// <input name="fname"  autocomplete="family-name" type="text" placeholder="last Name" required></br></br>
// <input name="fname"  autocomplete="family-name" type="text" placeholder="last Name" required></br></br>

//   <label>Last name:</label>
//   <input type="text" id="given-name"><br><br>
//   <label >Email:</label>
//   <input type="email" id="email" ><br><br>
//   <label for="frmNameA">Name</label>
// <input type="text" name="name" id="frmNameA"
// placeholder="Full name" required autocomplete="name">

// <label for="frmEmailA">Email</label>
// <input type="email" name="email" id="frmEmailA"
// placeholder="name@example.com" required autocomplete="email">

// <!-- note that "emailC" will not be autocompleted -->


//   <input type="submit">
// <!--</form>-->

// <p><b>Note:</b> The autocomplete attribute of the form element is not supported in Opera 12 and earlier versions.</p>

// </body>
// </html>
