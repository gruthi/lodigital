import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function TechnologiesAreTaught() {
  var txt = [
  {subTitle:'צד-לקוח',subTxt:'יצירת ממשקים בסיסיים ואחר כך גם מתקדמים ,מעוצבים ודינאמיים. בחלק זה נלמד  HTML,CSS,JAVASCRIPT,REACT. '},
  {subTitle:'צד-שרת',subTxt:'סביבת ה Back-End הפופולרית לפיתוח Servers-Web כיום js.Node:Express.'},
  {subTitle:'אחסון הנתונים',subTxt:'BIG DATA- אחסון מידע לא-מובנה המאפיין את עולם האינטרנט וה -MONGODB.'}
]
  return (
    <div className="pageTemplate backTemp">
      <div className="wrapper">
        <TitlePage title="הטכנולוגיות הנלמדות בקורס"/>
        {txt.map((item,i)=><div key={i}><TitlePage subTitle={item.subTitle}/><div>{item.subTxt}</div></div>)}    
      </div>
    </div>
  );
};

export default TechnologiesAreTaught;
