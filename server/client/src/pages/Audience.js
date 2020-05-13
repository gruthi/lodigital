import React from "react";
import "./PageTemplate.css";

function Audience() {

  let txt = [
    {subTitle:'קהל יעד',subTxt:'מועמדים ללא רקע או עם רקע בסיסי בתכנות WEB, המעוניינים להתמקצע בתחום האינטרנט ותכנות בעולם ה- WEB.',lst:[]},
    {subTitle:'מטרות הקורס',subTxt:'',
        lst:[
        'הכשרת Web Devlopers לפיתוח, ניהול והצגת תכנים באתרי אינטרנט בסיסיים ומתקדמים, ומתן מענה מקצועי וטכנולוגי בצד השרת ובצד הלקוח.',
        'חשיפה לטכנולוגיות החשובות ביותר כיום, והקניית יכולות ללמידה עצמית.']}
    ]  
   
  return (
    <div className="pageTemplate backTemp">
        <h1>קהל היעד ומטרות הקורס</h1>
        <p>קורס FullStack בנוי בהתאם לצרכי השוק, ומאפשר לבוגריו לשמש כמתכנתים במגוון עצום של חברות הייטק בתחום פיתוח WEB.</p>
        {txt.map((item,i)=><div key={i}><h2>{item.subTitle}</h2>{item.subTxt} 
      <ul>{item.lst.map((lstI,index)=><li key={index}>{lstI}</li>)} </ul>
      </div>)}   
    </div>
  );
};

export default Audience;
