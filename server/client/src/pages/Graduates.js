import React, { Component } from "react";
import "./PageTemplate.css";
import Graduate from "./Graduate.js";
import { Link } from "react-router-dom";
import axios from "axios";
import CardDeck from "react-bootstrap/CardDeck";

class Graduates extends Component {
  state = { graduates: [] };
  updateGraduates = graduates => {
    console.log("updateGraduates");
    this.setState({ graduates: graduates });
    this.getGraduates();
  };

  getGraduates = () => {
    axios
      .get("/graduate/get")
      .then(res => {
        if (res.status === 200) {
          this.setState({ graduates: res.data });
        } else {
          console.log("error");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentWillMount() {
    this.getGraduates();
  }
  render() {
    return (
      <div className="pageTemplate backTemp">
        <div className="wrapper">
          {this.props.token ? (
            <Link to="/graduateInsertProject">
              <button>
                <i className="fas fa-plus"></i>
              </button>
            </Link>
          ) : (
            ""
          )}

          <CardDeck>
            {this.state.graduates.map((item, i) => (
              <Graduate
                key={i}
                token={this.props.token}
                title={item.name}
                desc={item.desc}
                img={item.img}
                link={item.gitAddress}
                id={item._id}
                email={item.email}
                useremail={this.props.email}
                passPic={item.passPic}
                getGraduates={this.getGraduates}
              />
            ))}
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default Graduates;
