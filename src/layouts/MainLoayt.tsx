import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/menu/MenuComponent.tsx";

export const MainLoayt = () => {
    return (
        <>
            <MenuComponent/>

            <Outlet/>
        </>
    );
};
