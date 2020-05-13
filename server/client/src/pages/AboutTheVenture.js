import React from "react";
import "./PageTemplate.css";

function AboutTheVenture() {
  
  let txt = [
      {subTitle:"רקע על 'לודיגיטל'",subTxt:`המיזם 'לודגיטיל' פועל לסייע לתושבי לוד ברכישת השכלה בתחום פיתוח תוכנה. המיזם אינו למטרות רווח, ומנוהל בהתנדבות ע"י דוד אליאב ונתן קרסני.`,lst:[]},
      {subTitle:'מטרות המיזם',subTxt:'עידוד והכוונה של תושבי הפריפריה לעיסוק בתחום פיתוח תוכנה. ',lst:[]},
      {subTitle:'חזון המיזם',subTxt:'התרחבות המיזם לערי פריפריה נוספות ויצירת שיתופי פעולה עם מרכזי צעירים מקומיים.',lst:[]},
    ]  

  return (
    <div className="pageTemplate backTemp">
      <h1>אודות המיזם</h1>
      {txt.map((item,i)=><div key={i}><h2>{item.subTitle}</h2>{item.subTxt} 
      </div>)}     
    </div>
  );
};

export default AboutTheVenture;