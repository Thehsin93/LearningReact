const Rescard= (props) =>{
    const {resData} = props;
   
    const {name,cuisines,avgRating} = resData?.info;
    return (<div data-testid="resCard" className="bg-slate-300 hover:bg-gray-500 rounded-lg my-2 border border-solid border-black w-[250px]">
        <img className="w-40 mx-1" src="https://img2.storyblok.com/filters:format(webp)/f/62776/804x420/e1de7f270d/salad_wide.png" alt="rescard"></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
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