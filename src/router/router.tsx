import {createBrowserRouter} from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import {UserPage} from "../pages/UserPage.tsx";
 export const routes= createBrowserRouter([{
     path: "/",element:<MainLayout/>,children:[ { index: true, element: <UserPage /> },
         { path:'users',element:<UserPage/>}
     ]
 }]);
