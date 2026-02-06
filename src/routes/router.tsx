import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {Complex} from "../pages/Complex.tsx";

export const routes=createBrowserRouter([
    {path:'/',element:< App/>,children:[
            {path:'users',element:<UsersPage/>},
            {path:'posts',element:<PostsPage/>},
            {path:'comments',element:<CommentsPage/>},
            {path:'complex',element:<Complex/>}
        ]

    },]
)
