import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function Projects() {
  let txt = [
    // {subTitle:'',subTxt:''},
  {subTitle:'פרויקט סיום פנימי',subTxt:'פרויקט סופי FullStack על פי נושאים שיעלו הסטודנטים. ביצוע בזוגות.'},
  {subTitle:'פרויקט סיום חיצוני - חניכה בשיתוף מעסיקים מתעשית ההי-טק',subTxt:'פרויקט סופי FullStack בקבוצות של עד 4 סטודנטים, בשיתוף מעסיק.'}];
  let lst=['פרויקטון עיצוב דף סטטי בסיום Css, HTML',
'פרויקטון תכנות בסיום JS',
'פרויקטון Frontend בסיום React',
'פרויקטון Server בסיום Node',
'פרויקטון MongoDB+Express בסיום Web Server'
];
  return (
    <div className="pageTemplate backTemp">
      <div className="wrapper">
        <TitlePage title="פרויקטים ופרויקטונים"/>
        <TitlePage subTitle='פרויקטונים'/>
        <ul>{lst.map((item,i)=><li>{item}</li>)} </ul>
        {txt.map((item,i)=><p><TitlePage subTitle={item.subTitle}/><p>{item.subTxt}</p></p>)}  
        
        
      </div>
    </div>
  );
};


export default Projects;
