import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import RestCategory from "./RestCategory";

const Restaurant = () =>{
    const {resid} = useParams();
    const [Menu,ChangeMenu] = useState([]);
    useEffect(()=>{
        FetchMenu();
    },[]);
const [ShowItems,setIndex] = useState(0);
    const FetchMenu = async()=>{
        
        const Menulink ="https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resid;
        const menudata = await fetch(Menulink);
        const jsond = await menudata.json();
        ChangeMenu(jsond);
    }

    if(Menu.length===0)
    return <Shimmer></Shimmer>;
    const { name, cuisines, costForTwoMessage } =
    Menu?.data.cards[2]?.card?.card?.info;

  const { itemCards } =
  Menu?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards; 
 const Menucards = Menu?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item=>item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


   return  (<div className="text-center">
    <h1 className="font-bold text-2xl my-5">{name}</h1>
    <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>
    <h2>Menu</h2>
    {
        Menucards.map((cat,index)=><RestCategory  key= {cat?.card?.card.id} data ={cat?.card?.card}
        clickstate={index===ShowItems?true:false}
        setIndex = {()=>setIndex(index)}
        ></RestCategory>)
    }
   </div>);
    
}

export default Restaurant