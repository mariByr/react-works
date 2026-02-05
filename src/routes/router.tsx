import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import PostsPage from "../pages/PostsPage.tsx";

import PostDetailPage from "../pages/PostDetailPage.tsx";
import CommentPage from "../pages/CommentPage.tsx";

export const routes=createBrowserRouter([{
    path:'/',element:<App/>,children:[
        {path:'posts',element:<PostsPage/>},
        {path:'posts/:postId',element:<PostDetailPage/>},
        {path:'posts/:postId/comments',element:<CommentPage/>}
    ]
}

])
