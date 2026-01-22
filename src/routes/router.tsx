import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {CreateCarPage} from "../pages/CreateCarPage.tsx";
import CarsPage from "../pages/CarsPage.tsx";

export const routes = createBrowserRouter([
    {path: '/',element:<App/>,children:[
            {path: 'cars',element:<CarsPage/>},
{ path:'cars/create',element:<CreateCarPage/>}
        ]
}])
