import React from "react";
import "./TitlePage.css";

function TitlePage (props) {
    const myProps =  props.title || props.subTitle ;

   return(
        <div className={props.title ? "TitlePage" : "SubTitlePage"}>
            {props.title ? 
                (<div><h1  className="display-3">{myProps}</h1><h1>{myProps}</h1></div>)
                :
                (<div><h2>{myProps}</h2><h2>{myProps}</h2></div>)
            }
        </div>
    );
}

export default TitlePage;