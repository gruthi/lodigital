import React, { Component } from "react";
import "./PageTemplate.css";
import Graduate from "./Graduate.js";
import GraduateInsertProject from "./GraduateInsertProject.js";
//import computer4Img from "../images/computer4.jpg";
import axios from "axios";
import CardDeck from 'react-bootstrap/CardDeck'

class Graduates extends Component {
//    graduates=[
//     {title:'Hen Ilana & Ruthi Glick',text:'Lodigital Web Site',img:computer4Img,link:'https://github.com/gruthi/lodigital'}
//     // {title:'',text:'',img:'',link:''}
// ]
state={addGraduate:false,graduates:[]}
addGraduate=()=>{this.setState({addGraduate:true})}
getGraduate=()=>{
  axios
  .get("/graduate/get" )
  .then(res => {
    console.log("then axios");
    console.log(res.data);
    if (res.status === 200) {
      this.setState({graduates:res.data});
     console.log( 'hi'+res.data);   
     console.log(this.state.graduates);
    } else {
      console.log("error");
    }
  })
  .catch(err => {
    console.log(err);
  });
}
componentWillMount(){
  this.getGraduate();
}
render() {
  return (
    <div className="Graduates PageTemplate">
      <div className="wrapper">
        <button onClick={this.addGraduate} ><i className="fas fa-plus"></i></button>
        {this.state.addGraduate?
        <GraduateInsertProject/>:
        <CardDeck>
        {this.state.graduates.map((item,i)=>
        <Graduate key ={i} title={item.name} desc={item.desc} img={item.img} link={item.gitAddress} id={item._id}/>)}
        </CardDeck>}
      </div>
    </div>
  );
}
}

export default Graduates;
