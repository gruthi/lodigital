import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Redirect ,Link} from "react-router-dom";
import FormData from "form-data";

class GraduateInsertProject extends Component {
  state = {
    name: "",
    desc: "",
    img: "",
    gitAddress: "",
    redirectToGraduates: false,
    errorDesc:""
  };
  images = new FormData();
  nameChange = e => {
    this.setState({ name: e.target.value });
  };
  descChange = e => {
    this.setState({ desc: e.target.value });
  };
  imgChange = e => {
    let idCardBase64 = "";
    console.log(e.target.files[0]);
    this.getBase64(e.target.files[0], result => {
      idCardBase64 = result;
      this.setState({ img: idCardBase64 });
      console.log(idCardBase64);
    });
    //this.setState({ img: e.target.value });
  };
  gitAddressChange = e => {
    this.setState({ gitAddress: e.target.value });
  };

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      cb(reader.result);
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  }
  saveGraduate = () => {
    this.setState({errorDesc:""})
    axios
      .post("/graduate/insert", {
        name: this.state.name,
        desc: this.state.desc,
        img: this.state.img,
        gitAddress: this.state.gitAddress
      })
      .then(res => {
        console.log("then axios");
        console.log(res.status);
        if (res.status === 201) {
          console.log(res);
          this.setState({ redirectToGraduates: true });
        } else {
          this.setState({ errorDesc: "error" });
          console.log("error");
        }
        // this.setState({ data: res.data.res });
      })
      .catch(err => {
        if(err.response.status ===413){
        this.setState({errorDesc:"Image is too large.Please choose another image"})
      }
          else{
            this.setState({errorDesc:"error"})
         }
      });
  };
  render() {
     if (this.state.redirectToGraduates) {
    //   console.log("redirectToGraduates!!")
       return <Redirect to="/graduates"></Redirect>;
   //  return <Link to="/graduates"></Link>;
     }
    return (
      
        <div className="card">
        <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Insert Your Name"
                onChange={this.nameChange}
              />
            
              <input
                type="textarea"
                className="form-control"
                placeholder="Describe your project"
                onChange={this.descChange}
              />

              <input
                type="file"
                className="form-control"
                id="file"
                name="graduateImg"
                ref="fileUploader"
                onChange={this.imgChange}
              />
              <div></div>

              <input
                type="text"
                className="form-control"
                placeholder="Insert Link toYour Git"
                onChange={this.gitAddressChange}
              />
{this.state.errorDesc!=""?<label htmlFor="formGroupExampleInput">{this.state.errorDesc}</label>:""}
      
              <Button className="form-control" variant="primary" onClick={this.saveGraduate}>
                Save
              </Button>
            </div>
        
      </div>
    );
  }
}

export default GraduateInsertProject;
{
  /* <Card
style={{ width: "36rem" }}
border="primary"
className=" text-center h-100"
>
<Card.Header className="text-center">
  <input
    type="text"
    placeholder="Insert Your Name"
    onChange={this.nameChange}
  />
</Card.Header>
<Card.Body>
  <Card.Text>
    {" "}
    <textarea
      placeholder="Describe your project"
      onChange={this.descChange}
    />{" "}
  </Card.Text>

  <input
    type="file"
    id="file"
    name="graduateImg"
    ref="fileUploader"
    onChange={this.imgChange}
  />
  <div></div>
  <Card.Link>
    <input
      type="text"
      placeholder="Insert Link toYour Git"
      onChange={this.gitAddressChange}
    />
  </Card.Link>
</Card.Body>
<Card.Footer>
  <Button variant="primary" onClick={this.saveGraduate}>
    Save
  </Button>
</Card.Footer>
</Card> */
}
