import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function AboutFullStack() {
  let txt=[{subTitle:'פיתוח צד לקוח - אחראי, בין היתר, על ממשק המשתמש',subTxt:'עם השנים, יכולות הצגת המידע בדפדפנים, טלפונים ומכשירים נוספים השתכללה מאוד, וכוללת היום אינספור טכנולוגיות. אלו משמשות למגוון עצום של צרכים: מילוי טפסים, אתרי מידע ושירות (לדוגמא אתרי בנקים או אתרי ממשלה), מפות אינטראקטיביות ועוד. ככל שהלקוח "חכם" יותר בהצגת המידע, כך הוא חוסך עבודה לשרת העסוק ממילא.'},
  {subTitle:'פיתוח צד שרת - חלק הלוגי, הנמצא "מאחורי" ממשק המשתמש',subTxt:'הממשק מתקשר עם השרת על מנת לשלוח נתונים (בקשות) בשם הלקוח, לקבל תשובות ולהציגן. בהתחשב בעובדה שישנם לקוחות רבים, ניתן להניח שתכנות בצד שרת עוסק בעיקר בחישוב תשובות, אחסון וטעינת מידע - וכל זאת במהירות המירבית.'}]  
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
