import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch();
    const ClearCart = ()=>{
        dispatch(clearCart());
    }
    const cartItes = useSelector(store=>store.cart.items)
    return <div className="m-5 p-5 ">
        <div className="font-bold text-lg text-center">
            Cart
        </div>
        <div className="w-6/12 m-auto">
           {cartItes.length>0&& <button className="p-2 m-2 rounded-lg bg-black text-white" onClick={ClearCart}>Clear Cart</button>}
        <ItemList items={cartItes}>

        </ItemList>
        </div>
    </div>
}
export default Cart