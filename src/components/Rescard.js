import { imgurl } from "../Constants/Mockdata";
const Rescard= (props) =>{
    const {resData} = props;
   
    const {name,cuisines,avgRating,cloudinaryImageId} = resData?.info;
    return (<div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className="rounded-lg w-[200px] h-[150px] items-center" src={imgurl+cloudinaryImageId} alt="rescard"></img>
        <h3 className="text-wrap">{name}</h3>
        <h4 className="overflow-hidden whitespace-normal">{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
    </div>)
}
export const withPromotedLabel=(Rescard)=>{
   return (props)=>{
        return(<div>
        <label className="absolute bg-black text-white">Promoted</label>
        <Rescard {...props}></Rescard>
        </div>
    )
    }
}
export default Rescard