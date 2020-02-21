import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import Figure from "react-bootstrap/Figure";
// import FigureImage from 'react-bootstrap/FigureImage'

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
          console.log("you are not authorised to delete it");
        }
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Card
          style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          border="primary"
          className=" text-center"
        >
          {!this.state.editHeader ? (
            <Card.Header
              className="text-center"
              onClick={this.enableChangeHeader}
            >
              {this.props.title}
              {this.props.useremail === this.props.email ? (
                <button onClick={this.removeGraduate} className="float-left">
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
            <Container>
              <Row>
                <Col xs={4}>
                  {/* <Row> */}
                      {/* className="h-50 overflow-hidden"> */}
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={this.props.passPic}
                        className="rounded-circle "
                      />
                    </Figure>
                    {/* {this.props.passPic? 
                <Card.Img src={this.props.passPic} className="rounded-circle "/>:
                <p><i className="fas fa-user-graduate" ></i></p>} */}
                  {/* </Row> */}
                  {/* <Row> */}
                      {/* className="h-50"> */}
                  <Card.Text>{this.props.desc}</Card.Text>
                  <a href={this.props.link}>Go to My Git</a>
                  {/* </Row> */}
                </Col>
                <Col xs={8}>
                  <a href={this.props.link}>
                    <Card.Img variant="top" src={this.props.img} />
                  </a>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Graduate;
