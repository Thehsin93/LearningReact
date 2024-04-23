
import React from "react";
import ReactDOM from "react-dom/client";
import mainLogo from'./user.jpg';
import companylogo from "./logo.jpg";
const Input = () =>  ( <input type="text"
className="textbox"
placeholder="Search data...">
</input>)

const Heading =()=>(<h1> <img  src={companylogo} className="UserIcon" alt="fireSpot2"/>
    {<Input/>}
     <img  src={mainLogo} className="UserIcon" alt="fireSpot"/>
</h1>)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading/>);
