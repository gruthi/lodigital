import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function Admission() {
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
        <TitlePage title="תנאי קבלה"/>
        <ul>{lst.map((item,i)=><li>{item}</li>)} </ul>
      </div>
    </div>
  );
};

export default Admission;
