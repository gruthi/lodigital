import React from "react";

function TitlePage (props) {
    if(props.title){
        return(
            <div className="TitlePage">
                <h1>{props.title}</h1><h1>{props.title}</h1>
            </div>
        );
    }else{
        return(
            <div className="SubTitlePage">
                <h2>{props.subTitle}</h2><h2>{props.subTitle}</h2>
            </div>
        ); 
    }
}

export default TitlePage;