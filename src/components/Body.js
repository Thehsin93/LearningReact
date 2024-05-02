import { resList } from "../Constants/Mockdata";
import Rescard,{withPromotedLabel} from "./Rescard";
import { useState,useContext } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import FetchData from "./FetchData";
import UserContext from "../Utils/UserContext";
const Body = ()=>{
    
    
    const {LoggedUser,setusername} = useContext(UserContext);
    const [filtList,ChangeFilt] = useState();
    const [SearchText,setSearch] = useState("");
        const statelist = FetchData();
        const Promoted = withPromotedLabel(Rescard);
       
        
     

     
    
        return statelist.length===0?(<div><Shimmer/></div>):
     (
        <div className="">
           <div className="flex justify-between">
           <input type="text" data-testid="searchInput" className="border border-solid border-black" value={SearchText} onChange={(e)=>{setSearch(e.target.value)}}/>
            <button className="border border-solid border-black rounded-lg bg-green-300 w-24 my-3" onClick={()=>{
                    const FiltList = statelist.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                    
                    ChangeFilt(FiltList);
            }}>Search</button>
          
        <div className="search">search</div>
        <div className="btndiv">
        <button className="border border-solid border-black rounded-lg bg-green-300 w-24 my-3" onClick={
            ()=>{
                const newList = statelist.filter((x)=>x.info.avgRating>4);
              
                ChangeFilt(newList);
            }
           
        }>
            Click me
        </button>
        <input type="text" className="border border-solid border-black" value={LoggedUser} onChange={(e)=>{setusername(e.target.value)}}/>
        </div>
    </div>
        <div className="flex flex-wrap justify-between">
           {
            
            statelist.map((restaurant)=>(<Link to={"/Restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                {restaurant.info.avgRating>4?<Promoted  resData={restaurant}></Promoted>:<Rescard data-testid="resCard" resData={restaurant} ></Rescard>}
                </Link>))
           }
           
        </div>
        </div>
    )
}
export default Body