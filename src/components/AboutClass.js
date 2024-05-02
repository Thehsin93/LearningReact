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
        return <div ClassName="AboutClass">
            <h1>ghaha</h1>
            <DummyClass name="Thehsin" subject = "Learning React"></DummyClass>
            <li>{this.state?.userinfo?.login}</li>
            <li>{this.state?.userinfo?.id}</li>
            <div>
                <UserContext.Consumer>
                    {
                        (data)=><h1>{data.LoggedUser}</h1>
                    }
                </UserContext.Consumer>
            </div>
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