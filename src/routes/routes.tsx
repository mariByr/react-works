import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UsersJsonPlaceholder from "../components/usersJsonPlaceholder/UsersJsonPlaceholder.tsx";
import UsersDummyjson from "../components/usersDummyjson/UsersDummyjson.tsx";
import PostsDummyjson from "../components/posts-dummyjson/PostsDummyjson.tsx";
import PostsJsonplaceholder from "../components/posts-jsonplaceholder/PostsJsonplaceholder.tsx";
import CommentsJsonplaceholder from "../components/comments-jsonplaceholder/CommentsJsonplaceholder.tsx";

export const routes=createBrowserRouter([{
    path:"/",element:<App/>,children :[
        {path:'users/jsonplaceholder',element:<UsersJsonPlaceholder/>},
        {path:'users/dummyjson',element:<UsersDummyjson/>},
        {path:'posts/jsonplaceholder',element:<PostsJsonplaceholder/>},
        {path:'posts/dummyjson',element:<PostsDummyjson/>},
        {path:'comments/jsonplaceholder',element:<CommentsJsonplaceholder/>}
    ]
}])
