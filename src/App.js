import React,{Suspense, lazy,suspense, useState} from "react";
import ReactDOM  from "react-dom/client";
import Heading from "./components/Heading";
import Body  from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet,useRouteError } from "react-router-dom";
import { resList } from "./Constants/Mockdata";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant"
import UserContext from "./Utils/UserContext";
const Lazycomp = lazy(()=>import("./components/AboutClass"));
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";

const Applayout = () => {
    const [username,setusername] = useState("Rohaan");
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{LoggedUser:username,setusername}}>
        <div className="app">
            <Heading/>
          
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )

}
const Approuter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[
            {   path:"/About",
                element:<Suspense fallback={<div>loading</div>}> <Lazycomp/></Suspense>,
                errorElement:<Error/>,    
            },
            {   path:"/",
                element:<Body/>,
                errorElement:<Error/> 
            },
            {
                path:"/Contact",
                element:<Contact/>,
                errorElement:<Error/> 
            },
            {
                path:"/Restaurant/:resid",
                element:<Restaurant/>,
                errorElement:<Error/> 
            },
            {
                path:"/Cart",
                element:<Cart/>,
                errorElement:<Error/> 
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>);

