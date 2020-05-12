import React from "react";
import "./PageTemplate.css";

function TechnologiesAreTaught() {
  
  var txt = [
      {subTitle:'צד-לקוח',subTxt:'יצירת ממשקים בסיסיים ואחר כך גם מתקדמים, מעוצבים ודינאמיים. בחלק זה נלמד: HTML, Css, Javascript, React.'},
      {subTitle:'צד-שרת',subTxt:'נלמד את סביבת ה-Back-End הפופולרית לפיתוח Servers-Web כיום: Node.js:Express.'},
      {subTitle:'אחסון הנתונים',subTxt:'BIG DATA - אחסון מידע לא-מובנה המאפיין את עולם האינטרנט וה -MongoDB.'}
    ]
  return (
    <div className="pageTemplate backTemp">
        <h1>הטכנולוגיות הנלמדות בקורס</h1>
        {txt.map((item,i)=><div key={i}><h2>{item.subTitle}</h2><div>{item.subTxt}</div></div>)}    
    </div>
  );
};

export default TechnologiesAreTaught;
