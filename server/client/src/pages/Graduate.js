import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
// import  "./Graduate.css";

class Graduate extends Component {
  state = { editHeader: false };
  enableChangeHeader = () => {
    this.setState({ editHeader: true });
  };

  disableChangeHeader = target => {
    if (target.charCode === 13) {
      this.setState({ editHeader: false });
    }
  };
  removeGraduate = () => {
    axios
      .delete("/graduate/delete/" + this.props.id, {
        headers: { Authorization: this.props.token }
      })
      .then(res => {
        if (res.status === 200) {
          this.props.getGraduates();
          this.setState({ graduates: res.data });
        } else {
          console.log("error");
        }
      })
      .catch(err => {
        if (err.response.status === 403) {
          console.log('you are not authorised to delete it'); 
        }
        console.log(err);
      });
  };
  render() {
    return (
      <div >
      <Card
        style={{ width: "36rem" }}
        border="primary"
        className=" text-center h-100"
      >
        {!this.state.editHeader ? (
          <Card.Header
            className="text-center"
            onClick={this.enableChangeHeader}
          >
            {this.props.title}
             {(this.props.useremail===this.props.email) ? (
              <button onClick={this.removeGraduate}>
                <i className="fas fa-minus"></i>
              </button>
            ) : (
              ""
            )}
          </Card.Header>
        ) : (
          <input
            type="text"
            onChange={this.ChangeHeader}
            onKeyPress={this.disableChangeHeader}
          />
        )}
        <Card.Body>
          <Card.Img
            className="card-img-left"
            variant="top"
            src={this.props.img}
          />
      
          <Card.Text>{this.props.desc}</Card.Text>
          
          <a href={this.props.link}>Go to My Git</a>
        </Card.Body>
      </Card>
      </div>
    );
  }
 }
 
export default Graduate;
