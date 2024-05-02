import { useEffect,useState } from "react";

const FetchData = ()=>{
    const [stateList,ChangeList] = useState([]);
    
    useEffect(()=>{fetchData()},[]);
    
    const fetchData = async () => {
      
        const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
      
        ChangeList(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
      
        };
        return stateList;
}
export default FetchData