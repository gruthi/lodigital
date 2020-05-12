import React from "react";
import "./PageTemplate.css";

function Admission() {
  
  let lst=[
      'עמידה במבחן הקבלה (לא דורש ידע מקדים).',
      'נוכחות ב %90 מהשיעורים והתרגולים.',
      'התחיבות להשקעה של לפחות 10 שעות בבית מעבר להרצאות והתרגולים.',
      'מחשב נייד.',
      'הגשת כל המטלות ,פרויקטונים ופרויקטים וקבלת ממוצע גבוה מ80.'
    ]

  return (
    <div className="pageTemplate backTemp">
        <h1>תנאי קבלה</h1>
        <ul>{lst.map((item,i)=><li>{item}</li>)} </ul>
    </div>
  );
  
};

export default Admission;