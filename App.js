// const heading = React.createElement
// ("h1", 
// { id : "color"},
// "Hello World from React");

// creating nested structure as below using react

// <div id="parent">
/* <div id="child">
    <h1>I am H1 Tag</h1>
    </div></div> */

    // if we have more than one sibling then we should have wrap it inside array[]
    // <div id="parent">
/* <div id="child">
    <h1>I am H1 Tag</h1>
    <h2>I am H2 Tag</h2>
    </div></div> */
import React from "react";
import ReactDOM from "react-dom/client";

    const nesteing = React.createElement("div", {id:"parent"}, 
React.createElement("div", {id:"child"}, [    
React.createElement("h1", {}, "I am Mithun Chide Learning React Js"),
React.createElement("h2", {}, "I'm so proud of myself")
]));

 const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(nesteing);