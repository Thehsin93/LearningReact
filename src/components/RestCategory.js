import { useState } from "react";
import ItemList from "./ItemList";
const RestCategory = ({data,clickstate,setIndex})=>{
   

 const handleclick = ()=>{
    setIndex();
 }

  return(
    <div>
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between" onClick={handleclick}>
        <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
        </div>
        
        
        <div>
        {clickstate && <ItemList items={data.itemCards}></ItemList>}
    </div>
        

    </div>
   
    </div>

  );

};
export default RestCategory