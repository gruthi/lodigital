import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function Projects() {
  
  return (
    <div className="Projects PageTemplate">
      <div className="wrapper">
        <TitlePage title="פרויקטים ופרויקטונים"/>
        <TitlePage subTitle="כותרת משנה"/>
        <p>
        כאן יש קטע כתוב שישובץ, שיכלול מספר מילים בנושא המיזם והקורס
        </p>
        <TitlePage subTitle="כותרת משנה"/>
        <p>
        כאן יש קטע כתוב שישובץ, שיכלול מספר מילים בנושא המיזם והקורס
        </p>
        <TitlePage subTitle="כותרת משנה"/>
        <p>
        כאן יש קטע כתוב שישובץ, שיכלול מספר מילים בנושא המיזם והקורס
        </p>
        <TitlePage subTitle="כותרת משנה"/>
        <p>
        כאן יש קטע כתוב שישובץ, שיכלול מספר מילים בנושא המיזם והקורס
        </p>
      </div>
    </div>
  );
};


export default Projects;
