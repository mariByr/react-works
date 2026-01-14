import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";

import {CommentsDummyPage} from "../pages/CommentsDummyPage.tsx";
import {UserJspPage} from "../pages/UserJspPage.tsx";
import {UserDummyPage} from "../pages/UserDummyPage.tsx";
import {PostJsonPage} from "../pages/PostJsonPage.tsx";
import {PostsDummyPage} from "../pages/PostsDummyPage.tsx";
import {CommentsJsonPage} from "../pages/CommentsJsonPage.tsx";

export const routes=createBrowserRouter([
    {
    path:"/",element:<App/>,children :[
        {path:'users/jsonplaceholder',element:<UserJspPage/>},
        {path:'users/dummyjson',element:<UserDummyPage/>},
        {path:'posts/jsonplaceholder',element:<PostJsonPage/>},
        {path:'posts/dummyjson',element:<PostsDummyPage/>},
        {path:'comments/jsonplaceholder',element:<CommentsJsonPage/>},
        {path:'/comments/dummyjson',element:<CommentsDummyPage/>}
    ]
}
])
