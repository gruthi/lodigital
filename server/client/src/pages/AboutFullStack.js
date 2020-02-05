import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function AboutFullStack() {
  let txt=[{subTitle:' אחראי, בין היתר, על ממשק המשתמש – פיתוח צד לקוח',subTxt:'עם השנים יכולות הצגת המידע בדפדפנים, טלפונים ומכשירים נוספים, השתכללה מאוד וכוללת היום אינספור טכנולוגיות, למגוון עצום שלצרכים: מילוי טפסים, אתרי מידע ושירות(אתרי בנקים או אתרי ממשלה), מפות אינטראקטיביות ככל שהלקוח "חכם" יותר בהצגת המידע, כך הוא חוסך עבודה לשרת העסוק ממילא'},
  {subTitle:'פיתוח צד שרת . חלק הלוגי, הנמצא "מאחורי" ממשק המשתמש ',subTxt:'הממשק מתקשר עם השרת על מנת לשלוח נתונים(בקשות) בשם הלקוח, לקבל תשובות ולהציגן. בהתחשב בעובדה שישנם . וכל זאת במהירות המרבית – לקוחות רבים ניתן ל'}]  
  return (
    <div className="pageTemplate backTemp">
      <div className="wrapper">
        <TitlePage title="מה זה Full Stack?"/>
        <TitlePage subTitle="פיתוח המסורתי WEB  אינטרנט - נחלק לשניים: "/>
        {txt.map((item,i)=><div key={i}><TitlePage subTitle={item.subTitle} /><p>{item.subTxt}</p></div>)}  
       
      </div>
    </div>
  );
};

export default AboutFullStack;
