import {createBrowserRouter} from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import {UserPage} from "../pages/UserPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";

 export const routes= createBrowserRouter(
     [{
     path: "/",element:<MainLayout/>,children:[
         { index: true, element: <UserPage /> },
         { path:'users',element:<UserPage/>,children:[
                 {
                     path:':id/carts',element:<CartsPage/>
                 }
             ]}
     ]
 }]);



 //         {
 //             path: 'users',
 //             element: <MainLayout/>,
 //             children: [
 //                 {
 //                     path: ':id',
 //                     element: <UserPage/>,
 //                     children: [
 //                         {
 //                             path: 'carts',
 //                             element: <CartsPage/>
 //                         }
 //                     ]
 //                 }
 //             ]
 //         }]
 // )
// /
//     }
// ]);
