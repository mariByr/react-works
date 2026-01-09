import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersComponent} from "../components/UsersComponent.tsx";

 export const routes=createBrowserRouter([{
    path:'/',element:<App/>,children:[
        {path:'users',element:<UsersComponent/>},
        {path:'posts',element:<div>posts</div>},
        {path:'comments',element:<div>comments</div>},
        {path:'products',element:<div>products</div>}
    ]
}])
