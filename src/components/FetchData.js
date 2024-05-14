import { useEffect,useState } from "react";

const FetchData = ()=>{
    const [stateList,ChangeList] = useState([]);
    
    useEffect(()=>{fetchData()},[]);
    
    const fetchData = async () => {
      
        const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        ChangeList(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        
        };
        console.log("fetch");
        
        return stateList;

}
export default FetchData