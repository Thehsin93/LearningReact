import { resLogo } from "../Constants/Mockdata";
import {useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Heading = () =>{
    const user = useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store)=>store.cart.items);
    
    const [logtext,ChangeLog] = useState("Login");
    return (
        <div className="flex justify-between  bg-gray-200">
            <div>
            <img className="w-56" src={resLogo}>

            </img>
            </div>
            <div className="flex  items-center">
                <ul className="flex flex-wrap items-center ">
                    <li className="px-5 m-5"><Link to="/">Home</Link></li>
                    <li className="px-5 m-5"><Link to="/About">About</Link></li>
                    <li className="px-5 m-5"><Link to="/Contact">Contact</Link></li>
                    <li className="px-5 m-5"><Link to="/Cart">Cart({cartItems.length})</Link></li>
                    <button onClick={()=>
                    {return logtext=="Login"?ChangeLog("Logout"):ChangeLog("Login")}}>{logtext}</button>
                       <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                       <li>{user.LoggedUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Heading