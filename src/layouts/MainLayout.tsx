import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/menu/MenuComponent.tsx";


export const MainLayout = () => {
    return (
        <div>
            <p>WORKS</p>
            <MenuComponent/>
            <Outlet/>

        </div>
    );
};
