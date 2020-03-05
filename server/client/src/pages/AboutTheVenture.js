import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function AboutTheVenture() {
  let txt = [
  {subTitle:"רקע על 'לודיגיטל'",subTxt:`המיזם 'לודגיטיל' פועל לסייע לתושבי לוד ברכישת השכלה בתחום פיתוח תוכנה. המיזם אינו למטרות רווח, ומנוהל בהתנדבות ע"י דוד אליאב ונתן קרסני.`,lst:[]},
  {subTitle:'מטרות המיזם',subTxt:'עידוד והכוונה של תושבי הפריפריה לעיסוק בתחום פיתוח תוכנה. ',lst:[]},
  {subTitle:'חזון המיזם',subTxt:'התרחבת המיזם לערי פריפריה נוספות ויצירת שיתוף פעולה עם מרכזי צעירים מקומיים.',lst:[]},
  {subTitle:'אודות הקורס',subTxt:'קורס FullStack בנוי בהתאם לצרכי השוק, ומאפשר לבוגריו לשמש כמתכנתים במגוון עצום של חברות הנזקקות לפיתוח מערכות WEB.',lst:[]},
  {subTitle:'מטרות הקורס',subTxt:'',
  lst:[' הכשרת מפתחי אינטרנט מומחים ועצמאיים, המסוגלים להקים ולנהל אתרי אינטרנט.',
  'הכשרת Web Devloppers לניהול והצגת תכנים באתרי אינטרנט בסיסיים ומתקדמים, ומתן מענה מקצועי וטכנולוגי בצד השרת ובצד הלקוח.',
  'חשיפה לטכנולוגיות החשובות ביותר כיום, והקניית יכולות ללמידה עצמית.'
]}  ]      
  return (
    <div className="pageTemplate backTemp">
      <div className="wrapper">
        <TitlePage title="אודות המיזם"/>
        {txt.map((item,i)=><div key={i}><TitlePage subTitle={item.subTitle}/>{item.subTxt} 
        <ul>{item.lst.map((lstI,index)=><li key={index}>{lstI}</li>)} </ul>
        </div>)}     
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
