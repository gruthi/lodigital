import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";

function Audience() {
   
  return (
    <div className="Audience PageTemplate">
      <div className="wrapper">
        <TitlePage title="קהל היעד"/>
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

export default Audience;
