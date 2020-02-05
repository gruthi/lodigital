import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function Projects() {
  let txt = [{subTitle:'',subTxt:''},
  {subTitle:'פרויקט סיום פנימי',subTxt:'פרויקט סופי FullStackעל פי נושאים שיעלו הסטודנטים .ביצוע בזוגות.'},
  {subTitle:'פרויקט סיום חיצוני -חניכה בשיתוף מעסיקים מתעשית ההי-טק',subTxt:'פרויקט סופי FullStackביצוע בקבוצות של עד 4סטודנטים ,בשיתוף מעסיק.'}];
  let lst=['פרויקטון עיצוב דף סטטי בסיום CSS, HTML',
'פרויקטון תכנות בסיום JS',
'פרויקטון Frontendבסיום React',
'פרויקטון Serverבסיום Node',
'Mongo+Express בסיוםWeb Server פרויקט'
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
