import { useDispatch } from "react-redux";
import { imgurl } from "../Constants/Mockdata"
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{
    const dispatch = useDispatch();
    const handleItem = (itm)=>{
        dispatch(addItem(itm));
 
    }
    return <div >
       
            {items.map((itm)=>(
                <div data-testid="foodItems" key={itm?.card?.info?.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
                  <div className="w-9/12"> 
                <div className="py-2">
                    <span>{itm?.card?.info?.name}</span>
                    <span>- ₹{itm?.card?.info?.price/100 || itm?.card?.info?.defaultprice/100}</span>
                    </div>
                    <p className="text-xs">{itm?.card?.info?.description}</p>
                    
                    
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                        <button className="p-2 mx-16 rounded-lg bg-white shadow-lg" onClick={()=>handleItem(itm)}>Add +</button>
                        </div>
                    <img src={imgurl+itm?.card?.info?.imageId} className="w-full"></img>
                        </div>
                    </div>

            ))}
    </div>
}
export default ItemList