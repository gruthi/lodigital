import React, { Component } from "react";
import "./PageTemplate.css";
import Graduate from "./Graduate.js";
import { Link} from "react-router-dom";
// import { LinkContainer} from "react-router-bootstrap";
import axios from "axios";
import CardDeck from 'react-bootstrap/CardDeck'

class Graduates extends Component {
//    graduates=[
//     {title:'Hen Ilana & Ruthi Glick',text:'Lodigital Web Site',img:computer4Img,link:'https://github.com/gruthi/lodigital'}
//     // {title:'',text:'',img:'',link:''}
// ]
state={graduates:[]}
updateGraduates=(graduates)=>{
  console.log('updateGraduates');
  this.setState({graduates:graduates});
  this.getGraduates();
};


getGraduates=()=>{
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
  this.getGraduates();
}
render() {
  
  return (
    <div className="pageTemplate backTemp">
      <div className="wrapper">
      <Link to="/graduateInsertProject">
        <button><i className="fas fa-plus"></i></button>
        </Link>
        <CardDeck>
        {this.state.graduates.map((item,i)=>
        <Graduate key ={i} title={item.name} desc={item.desc} img={item.img} link={item.gitAddress} id={item._id} updateGraduates={this.updateGraduates}/>)}
        </CardDeck>
        {/* } */}
      </div>
    </div>
  );
}
}

export default Graduates;
