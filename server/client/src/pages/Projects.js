import React from "react";
import "./PageTemplate.css";

function Projects() {

  let txt = [
    // {subTitle:'',subTxt:''},
          {subTitle:'פרויקט סיום פנימי',subTxt:'פרויקט סופי FullStack על פי נושאים שיעלו הסטודנטים. ביצוע בזוגות.'},
          {subTitle:'פרויקט סיום חיצוני - חניכה בשיתוף מעסיקים מתעשית ההי-טק',subTxt:'פרויקט סופי FullStack בקבוצות של עד 4 סטודנטים, בשיתוף מעסיק.'}
        ];

  let lst=[
          'פרויקטון עיצוב דף סטטי בסיום Css, HTML',
          'פרויקטון תכנות בסיום JS',
          'פרויקטון Frontend בסיום React',
          'פרויקטון Server בסיום Node',
          'פרויקטון MongoDB+Express בסיום Web Server'
        ];

  return (
    <div className="pageTemplate backTemp">
      
        <h1>פרויקטים ופרויקטונים</h1>
        
        <h2>פרויקטונים</h2>
        <ul>{lst.map((item,i)=><li>{item}</li>)} </ul>
        
        {txt.map((item,i)=><p><h2>{item.subTitle}</h2><p>{item.subTxt}</p></p>)}  
        
    </div>
  );
};

export default Projects;