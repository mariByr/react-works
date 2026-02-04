import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import PostPage from "../pages/PostPage.tsx";
import {PostDetails} from "../pages/PostDetails";
import Coments from "../pages/Coments.tsx";

 export const routes = createBrowserRouter([{
       path: '/',element: <App/>,children: [
    { path: 'posts', element: <PostPage/> },
    { path: 'posts/:postId', element: <PostDetails/> },//те що в роуті змінне позначаємо :
    { path: 'posts/:postId/comments', element: <Coments/> }
]
}
])
//https://jsonplaceholder.typicode.com/posts/6/comments
