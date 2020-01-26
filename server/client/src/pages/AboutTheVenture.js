import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function AboutTheVenture() {
  let txt = [{subTitle:'רקע על "לודיגיטל"',subTxt:'המיזם “לודגיטיל" פועל לסייע לתושבי לוד ברכישת השכלה בתחום פיתוח תוכנה. המיזם אינו למטרות רווח ומנוהל בהתנדבות ע"י דוד אליאב ונתן קרסני'},
  {subTitle:'מטרות המיזם',subTxt:'עידוד והכוונה של תושבי הפריפריה לעיסוק בתחום פיתוח תוכנה. '},
  {subTitle:'חזון המיזם',subTxt:'התרחבת המיזם לערי פריפריה נוספות ויצירת שת"פ עם מרכזי צעירים מקומיים'},
  {subTitle:'',subTxt:'קורס FullStackבנוי בהתאם לצרכי השוק ומאפשר לבוגריו לשמש כ'}  ]      
  return (
    <div className="AboutTheVenture PageTemplate">
      <div className="wrapper">
        <TitlePage title="אודות המיזם"/>
        {txt.map((item,i)=><div key={i}><TitlePage subTitle={item.subTitle}/>{item.subTxt}</div>)}     
      </div>
    </div>
  );
};


export default AboutTheVenture;
/* <TitlePage subTitle={txt[0].subTitle}/>
        <p>{txt[0].subTxt}
          </p>
        <TitlePage subTitle={txt[1].subTitle}/>
        <p>
        {txt[1].subTxt}
        </p>
        <TitlePage subTitle={txt[2].subTitle}/>
        <p>
        {txt[2].subTxt}
        </p>
        <TitlePage subTitle="כותרת משנה"/>
        <p>
        כאן יש קטע כתוב שישובץ, שיכלול מספר מילים בנושא המיזם והקורס
        </p>  */
