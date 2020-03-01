import React, { Component } from "react";
import "./PageTemplate.css";
import axios from "axios";
import Table from 'react-bootstrap/Table'

class ContactsList extends Component {

    state={contactsList:[]}

    // updateContactContactsList=(contactsList)=>{
    //     console.log('updateContactContactsList');
    //     this.setState({contactsList:contactsList});
    //     this.getContactsList();
    // };

    getContactsList = () => {
        console.log('axios');
        axios
            .get("/getContactsList")
            .then(res => {
                if (res.status === 200) {
                this.setState({ contactsList : res.data });
                } else {
                console.log("error");
                }
            })
            .catch(err => {
                console.log( err );
            });
        };

    componentWillMount(){
        this.getContactsList();
    };

  render(){
  
    return (
        <div className="pageTemplate backTemp">
            <div className="wrapper">
                {/* {this.props.token?  */}
                    <Table striped bordered hover size="sm" responsive="sm" >
                        <thead><tr>
                            <th>שם פרטי</th><th>שם משפחה</th><th>כתובת</th><th>אימייל</th><th>טלפון</th>
                            <th>השכלה</th><th>עיסוק כיום</th><th>רקע בפיתוח תוכנה</th><th>10 שעות השקעה</th>
                        </tr></thead>
                        <tbody> 
                            {this.state.contactsList.map((item,i)=>
                            <tr key={i}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.address}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.education}</td>
                            <td>{item.occupation}</td>
                            <td>{item.BackSoftwareDvelopment}</td>
                            <td>{item.tenHours}</td>
                            </tr>)
                            } 
                        </tbody>
                    </Table>
                {/* :
                    ''
                } */}
            </div>
        </div>
    );
  }
}

export default ContactsList;