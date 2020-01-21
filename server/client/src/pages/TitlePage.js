import React from "react";
import "./TitlePage.css";

function TitlePage (props) {
    const myProps =  props.title || props.subTitle ;
    // if(props.title){

    //     return(
    //         <div className="TitlePage">
    //             <h1>{props.title}</h1><h1>{props.title}</h1>
    //         </div>
    //     );
    // }else{
    //     return(
    //         <div className="SubTitlePage">
    //             <h2>{props.subTitle}</h2><h2>{props.subTitle}</h2>
    //         </div>
    //     ); 
    // }
    
        // return(
        //     <div className={props.title? "TitlePage" : "SubTitlePage"}>
        //         <h1>{ props.title | props.subTitle }</h1>
        //         <h1>{ props.title | props.subTitle }</h1>
        //     </div>
        // );
    
   return(
            <div className={props.title? "TitlePage" : "SubTitlePage"}>
                <h1>{ myProps}</h1>
                <h1>{ myProps }</h1>
            </div>
        );
    
}

export default TitlePage;