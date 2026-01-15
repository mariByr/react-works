import {createBrowserRouter} from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import {UserPage} from "../pages/UserPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";

 export const routes= createBrowserRouter(
     [{
     path: "/",element:<MainLayout/>,children:[
             { path:'users',element:<UserPage/>},
             {path:'users/:id/carts',element:<CartsPage/>}
             ]

 }]);
