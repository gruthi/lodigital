import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";

class Graduate extends Component {
    state={editHeader:false}
    enableChangeHeader=()=>{
        console.log('e.target.value');
        this.setState({editHeader:true})
    }
    
    disableChangeHeader=(target) =>{
    if(target.charCode===13){
     this.setState({editHeader:false})
    } 
  }
  removeGraduate=()=>{
    console.log(this.props.id);
    axios
    .delete("/graduate/delete/"+this.props.id )
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
  render() {
    return (
      <div>
       
        <Card style={{ width: "36rem" }}  border="primary" className=" text-center h-100" >
            {!this.state.editHeader?
          <Card.Header className="text-center" onClick={this.enableChangeHeader}>{this.props.title}
            <button onClick={this.removeGraduate} ><i className="fas fa-minus"></i></button>
      </Card.Header> :
          <input  type='text'  onChange={this.ChangeHeader} onKeyPress={this.disableChangeHeader} />}
           <Card.Body>
          <Card.Img
            className="card-img-left"
            variant="top"
            src={this.props.img}
          />
         
            <Card.Text >{this.props.desc}</Card.Text>
          
            <a href={this.props.link}>Go to My Git</a>
        
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Graduate;
