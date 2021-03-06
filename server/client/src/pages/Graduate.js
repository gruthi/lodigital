import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import "./Graduate.css";

class Graduate extends Component {
  state = { editHeader: false, crop: { aspect: 1 / 1 } };
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
      <div className="Graduate">
        <Card
          style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          border="primary"
          className=" text-center"
        >
          {!this.state.editHeader ? (
            <Card.Header
              className="text-center graduateText"
              onClick={this.enableChangeHeader}
            >
              {this.props.title}
              {this.props.useremail === this.props.email ? (
                <button onClick={this.removeGraduate} className="float-left">
                  <i className="fas fa-minus graduateIcons"></i>
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
                  {this.props.passPic ? (
                    <Card.Img
                      src={this.props.passPic}
                      className="rounded-circle "
                    />
                  ) : (
                    <p>
                      <i className="fas fa-user-graduate graduateIcons fa-5x" size={70}></i>
                    </p>
                  )}

                  <Card.Text className='graduateText'>{this.props.desc}</Card.Text>
                  <Card.Text>
                    <a href={this.props.link} className='graduateText'>Go to My Git</a>{" "}
                  </Card.Text>
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
