import React from "react";
import ReactDOM  from "react-dom/client";

const heading = () =>{
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://th.bing.com/th?id=OIP.g_EYshV4TBrKFonMmN2KEgHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2">

            </img>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Applayout = () => {
    return (
        <div class="app">
            <heading/>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)

