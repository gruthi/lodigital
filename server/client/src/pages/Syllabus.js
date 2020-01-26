import React from "react";
import "./PageTemplate.css";
import TitlePage from "./TitlePage.js";
import Table from 'react-bootstrap/Table'


function Syllabus() {
   let courseHeader=[{subject:'Subject',desc:'Description'}]
   let course=[
   {subject:'Introduction to programming',desc:'Computer, input, output, hardware, software, operating system, CPU, memory, bit, byte, binary base, flow diagrams',lst:[]},
   {subject:'HTML',desc:'IDE,Tags, HTML elements,HTML5 elements,URL,  Elements properties ',lst:[]},
   {subject:'CSS',desc:'Syntax, Selectors, Inline/Internal/External,  Box mode, Width/Height, Layout, Pseudo class, Responsive Web Site,  Frameworks: Bootstrap, Advanced: Flexbox, Grid   ',lst:[]},
   {subject:'JavaScript',desc:'',
      lst:[{subject:'Basic Programming',desc:'Variables, Operators, Conditions, Loops, Functions, Scope, Array, Event, Object'},
           {subject:'Web Programming',desc:'DOM, AJAX, JSON'},
           {subject:'Next Generation JavaScript',desc:'let/const, arrow function, filter, map, modules, class, rest operator, destructuring, promise, async & await'}]},
   {subject:'React',desc:'Components, Props, State, Styling, Advanced Rendering, Component life cycle, Single Page Application, Routing, Validations, Forms,  Advanced: Redux',lst:[]},
   {subject:'Node.js',desc:'Events loop, Modules: core, custom, third party, Files',lst:[]},
   {subject:'Express.js',desc:'Web server, Middleware, Rest API, Authentication / Authorization, Postman',lst:[]},
   {subject:'MongoDB/Mongoose',desc:'NoSQL, CRUD operations, ObjectId, Model',lst:[]},
   {subject:'Tools',desc:'Visual Studio Code ',lst:[]},
   {subject:'Deployment',desc:'Heroku',lst:[]},
   {subject:'Testing',desc:'Unit Test, Jest',lst:[]},
   {subject:'Version',desc:'control Git, Github',lst:[]},
   {subject:'Debugging',desc:'Chrome Dev Tools, React Dev Tools',lst:[]},
   {subject:'Advanced concepts',desc:'Data structures (array,list,queue,stack,dictionary), Algorithms (sorting, search), Complexity, Events, Threads',lst:[]},
   {subject:'Effective learning',desc:'Best practices for effective learning',lst:[]},
   {subject:'Career development',desc:'Receive guidelines on how to make a CV, prepare for a job interview',lst:[]}

  ] 
  return (
    <div className="AboutTheVenture PageTemplate">
      <div className="wrapper">
        <TitlePage title="סילבוס"/>
        <Table striped bordered hover size="sm" responsive="sm" className="text-left"  dir="ltr" >
    <thead>{courseHeader.map((item,i)=><tr key={i}><th>{item.subject}</th><th>{item.desc}</th></tr>)}</thead>
    <tbody> 
      {course.map((item,i)=><tr key={i}>
      <td>{item.subject} </td>
      <td>{item.desc} <ul>{item.lst.map((lstI,index)=><li key={index}>{lstI.subject}:{lstI.desc}</li>)} </ul></td>
      </tr>) } 
      </tbody>
    </Table>
      </div>
    </div>
  );
};

export default Syllabus;
