import React, { useState } from "react";
import DummyClass from "./DummyClass";
import UserContext from "../Utils/UserContext";

class AboutClass extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            userinfo:{
                login :"dummy",
                id:"123",
            }
        }
    }
    render(){
        return <div className="w-1/2 mx-auto mt-[8%] shadow-lg text-center">
           
            
            <h1 className="underline">Key Features</h1>
            <p className="text-left">
                <ul className="p-8">
                <li>Listing of reastuarant cards from Swiggy API</li>
                <li className="pt-1">React Routing</li>
                <li className="pt-1">Viewing the restaurant menu on clicking the restaurant cards</li>
                <li className="pt-1">Filter the top rated button clicking on the top rated button</li>
                <li className="pt-1">search for restaurants by name using the text field and search button</li>
                <li className="pt-1">search for restaurants by name using the text field and search button</li>
                <li className="pt-1">Accordian implementation by shifting the state up </li>
                <li className="pt-1">storing to carts using redux state management </li>
                </ul>
            </p>
           
            {/*<div>
                <UserContext.Consumer>
                    {
                        (data)=><h1>{data.LoggedUser}</h1>
                    }
                </UserContext.Consumer>
                </div>*/}
        </div>

    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/thehsin93");
        const json = await data.json();
        this.setState({
            userinfo:{
                login:json.login,
                id:json.id
            }
        })
        console.log("mounted");
        this.timer = setInterval(()=>{
            console.log("Namaste");
        },10000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
}
export default AboutClass