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
    const [filtList,ChangeFilt] = useState([]);
    const [SearchText,setSearch] = useState("");
        const statelist = FetchData();
       
        const Promoted = withPromotedLabel(Rescard);
       
   
            const search=(val)=>{
                const FiltList = statelist.filter((res)=>res.info.name.toLowerCase().includes(val.toLowerCase()));
                    
                    ChangeFilt(FiltList);
            }
     
     
    
        return statelist.length===0?(<div><Shimmer/></div>):
     (
        <div className="m-4">
           <div className="flex justify-between">
            <div className="w-3/4 justify-between">
           <input type="text" data-testid="searchInput" className="border border-solid border-black m-2 w-1/2" value={SearchText} onChange={(e)=>{setSearch(e.target.value)}}/>
            <button className="border border-solid border-black rounded-lg bg-gray-300 w-24 my-3" onClick={()=>{
                    const FiltList = statelist.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                    
                    ChangeFilt(FiltList);
            }}>Search</button>
             
            </div>
          
        
        <div className="btndiv w-1/4 flex justify-end">
        <button className="border border-solid border-black rounded-lg bg-gray-300 w-24 my-3" onClick={
            ()=>{
                const newList = statelist.filter((x)=>x.info.avgRating>4);
              
                ChangeFilt(newList);
            }
           
        }>
            Top Rated
        </button>
        <button className="border border-solid border-black rounded-lg bg-gray-300 w-24 my-3 ml-[12%]" onClick={()=>{
                  
                    
                  ChangeFilt([]);
          }}>Clear filters</button>
       {/* <input type="text" className="border border-solid border-black" value={LoggedUser} onChange={(e)=>{setusername(e.target.value)}}/>*/}
        </div>
    </div>
        <div className="flex flex-wrap justify-between">
           {
            
            ((filtList.length>0)?filtList:statelist).map((restaurant)=>(<Link to={"/Restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                {restaurant.info.avgRating>4?<Promoted  resData={restaurant}></Promoted>:<Rescard data-testid="resCard" resData={restaurant} ></Rescard>}
                </Link>))
           }
           
        </div>
        </div>
    )
}
export default Body