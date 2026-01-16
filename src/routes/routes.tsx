import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UserJspPage} from "../pages/UserJspPage.tsx";
import {UserDummyPage} from "../pages/UserDummyPage.tsx";
import {PostJsonPage} from "../pages/PostJsonPage.tsx";
import {PostsDummyPage} from "../pages/PostsDummyPage.tsx";
import {CommentsJsonPage} from "../pages/CommentsJsonPage.tsx";
import {CommentsDummyPage} from "../pages/CommentsDummyPage.tsx";
import {UsersLayout} from "../layuots/UsersLayout.tsx";
import {PostLayout} from "../layuots/PostLayout.tsx";
import {CommentsLayout} from "../layuots/CommentsLayout.tsx";



export const routes=createBrowserRouter([
        {path:"/",element:<App/>},
        {path:'users',element:<UsersLayout/>,children:[
            {path:'jsonplaceholder',element:<UserJspPage/>},
                {path:'dummyjson',element:<UserDummyPage/>}
            ]},
        {path:'posts',element:<PostLayout/>,children:[
            {path:'jsonplaceholder',element:<PostJsonPage/>},
                {path:'dummyjson',element:<PostsDummyPage/>}
            ]},
            {
                path: 'comments', element: <CommentsLayout/>, children: [
                    {path: 'jsonplaceholder', element: <CommentsJsonPage/>},
                    {path: 'dummyjson', element: <CommentsDummyPage/>}]


            }//

]
)
