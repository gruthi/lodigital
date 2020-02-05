import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";
//{subTitle:'',subTxt:''}
function CourseFormat() {
  let txt = [
    {subTitle:'',subTxt:'הקורס נמשך כ8 חודשים. ימי ראשון ושלישי בין השעות 17:30 -21:30. ימי שישי, תרגול חופשי עם מתנדבים בין השעות 08:00-13:00 .'},
    {subTitle:'תנאי קבלה',subTxt:''}
  ]
  let lst=[
    'עמידה במבחן הקבלה )לא דורש ידע מקדים(',
  'נוכחות ב %90מהשיעורים והתרגולים',
  'התחיבות להשקעה של לפחות 10שעות בבית מעבר להרצאות והתרגולים',
  'מחשב נייד',
  'הגשת כל המטלות ,פרויקטונים ופרויקטים וקבלת ממוצע גבוה מ80'
]

  return (
    <div className="pageTemplate backTemp">
      <div className="wrapper">
        <TitlePage title="מבנה הקורס"/>
        {txt.map((item,i)=><div  key={i}><TitlePage subTitle={item.subTitle}/>{item.subTxt}</div>)}  
        <ul>{lst.map((item,i)=><li key={i}>{item}</li>)} </ul>
        <TitlePage title="מתכונת הקורס"/>
        <p>התוכנית תשלב בין הרצאות פרונטליות להרצאות וידאו :</p>
        <ul><li>בחודשים 2: 2-1הרצאות בשבוע פרונטליות</li>
        <li>בחודשים 2: 8-3הרצאות בשבוע ,אחת פרונטלית ושניה online</li>
         </ul>
         <p>יינתנו מטלות כיתה שיבוצעו בתרגולים ובבית.</p>
      </div>
    </div>
  );
};

export default CourseFormat;
