import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLoayt} from "../../layouts/MainLoayt.tsx";
import {PaginationLoayt} from "../../layouts/PaginationLoayt.tsx";
import {UsersPage} from "../../pages/UsersPage.tsx";

export const routes=createBrowserRouter([{
    path:'/',element:<MainLoayt/>,children:[{
        path:'list',element:<PaginationLoayt/>,children:[
            { index: true, element: <Navigate to="users" /> },
            {path:'users',element:<UsersPage/>}]
    }]
}])
