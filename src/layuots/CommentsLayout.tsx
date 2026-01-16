import {MenuComments} from "../components/menu/menu-comments/MenuComments.tsx";
import {Outlet} from "react-router-dom";

export const CommentsLayout = () => {
    return (
        <div>
            <MenuComments/>
            <Outlet/>
        </div>
    );
};
