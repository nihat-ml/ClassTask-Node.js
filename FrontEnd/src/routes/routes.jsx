import { Children } from "react";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const ROUTES = [
    {
        path:"/",
        element:<Home/>,
        children:[
            {
                path:"detail/:id",
                element:<Detail/>
            }
        ]
    },
]

export default ROUTES