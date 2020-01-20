import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function Audience() {
  let txt = [
  {subTitle:'קהל היעד',subTxt:''},
  {subTitle:'  מועמדים ללא רקע או עם רקע בסיסי בתכנות WEB- המעוניינים להתמקצע בתחום האינטרנט ותכנות בעולם הWEB',subTxt:''}
            ]
  return (
    <div className="Audience PageTemplate">
      <div className="wrapper">
       {txt.map((item,i)=><p><TitlePage subTitle={item.subTitle}/><p>{item.subTxt}</p></p>)}    
      </div>
    </div>
  );
};

export default Audience;
