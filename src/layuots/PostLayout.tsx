import {MenuPosts} from "../components/menu/menu-posts/MenuPosts.tsx";
import {Outlet} from "react-router-dom";

export const PostLayout = () => {
    return (
        <>
        <MenuPosts/>
            <Outlet/>
        </>
    );
};
