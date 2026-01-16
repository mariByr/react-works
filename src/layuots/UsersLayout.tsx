import {MenoUser} from "../components/menu/menu-user/MenoUser.tsx";
import {Outlet} from "react-router-dom";

export const UsersLayout = () => {
    return (
        <>
            <MenoUser/>
            <Outlet/>
        </>
    );
};
