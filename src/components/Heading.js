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
        <div className="flex justify-between  bg-gray-100 shadow-lg rounded-2xl">
            <div>
            <img className="w-40 p-2 rounded-2xl" src={resLogo}>

            </img>
            </div>
            <div className="flex  items-center">
                <ul className="flex flex-wrap items-center ">
                    <li className="px-5 m-5 underline"><Link to="/">Home</Link></li>
                    <li className="px-5 m-5 underline"><Link to="/About">About</Link></li>
                   
                    <li className="px-5 m-5 underline"><Link to="/Cart">Cart({cartItems.length})</Link></li>
                       <li className="px-4 underline">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                     
                </ul>
            </div>
        </div>
    )
}
export default Heading