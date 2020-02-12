import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function Audience() {
  // let txt = [
  // {subTitle:'קהל היעד',subTxt:''},
  // {subTitle:'',subTxt:'  מועמדים ללא רקע או עם רקע בסיסי בתכנות WEB- המעוניינים להתמקצע בתחום האינטרנט ותכנות בעולם הWEB'}
  //           ]
  return (
    <div className="pageTemplate backTemp">
      <div className="wrapper">
      <TitlePage title='קהל היעד'/>
      <p>  מועמדים ללא רקע או עם רקע בסיסי בתכנות WEB- המעוניינים להתמקצע בתחום האינטרנט ותכנות בעולם הWEB.</p>
       {/* {txt.map((item,i)=><p><TitlePage subTitle={item.subTitle}/><p>{item.subTxt}</p></p>)}     */}
      </div>
    </div>
  );
};

export default Audience;
