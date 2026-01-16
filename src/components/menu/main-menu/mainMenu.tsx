import {Link} from "react-router-dom";
import './menu.css'

const MainMenu = () => {
    return (
        <ul  className="menu-main">
<li>
    <Link to={'users'}>Users</Link>
</li>
            <li>
                <Link to={'posts'}>Posts</Link>
            </li>
            <li>
                <Link to={'comments'}>Comments</Link>
            </li>


        </ul>
    );
};

export default MainMenu;
