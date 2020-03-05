import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";
//{subTitle:'',subTxt:''}
function CourseFormat() {
  let txt = [
    {subTitle:'',subTxt:'הקורס נמשך כ-8 חודשים. ומתקיים בימי ראשון ושלישי בין השעות 17:30 -21:30. בימי שישי תרגול חופשי עם מתנדבים בין השעות 08:00-13:00 .'},
    {subTitle:'תנאי קבלה',subTxt:''}
  ]
  let lst=[
   'עמידה במבחן קבלה (לא נדרש ידע מקדים).',
  'נוכחות ב-90% מהשיעורים והתרגולים.',
  'התחייבות להשקעה של לפחות 10 שעות בבית מעבר להרצאות והתרגולים.',
  'מחשב נייד.',
  'הגשת כל המטלות, פרויקטונים ופרויקטים, וקבלת ממוצע גבוה מ-80.'
]

  return (
    <div className="pageTemplate backTemp">
      <div className="wrapper">
        <TitlePage title="מבנה הקורס"/>
        {txt.map((item,i)=><div  key={i}><TitlePage subTitle={item.subTitle}/>{item.subTxt}</div>)}  
        <ul>{lst.map((item,i)=><li key={i}>{item}</li>)} </ul>
        <TitlePage title="מתכונת הקורס"/>
        <p>התוכנית תשלב בין הרצאות פרונטליות להרצאות וידאו :</p>
        <ul><li>בחודשים 1-2: שתי הרצאות פרונטליות בשבוע.</li>
        <li>בחודשים 3-8: שתי הרצאות בשבוע, אחת פרונטלית ושניה online.</li>
         </ul>
         <p>יינתנו מטלות כיתה שיבוצעו בתרגולים ובבית.</p>
      </div>
    </div>
  );
};

export default CourseFormat;