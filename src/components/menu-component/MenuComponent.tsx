import {Link} from "react-router-dom";
import './menu.css';


export const MenuComponent = () => {
    return (
        <ul>
        <li>
           <Link to={'cars'}>CARS</Link>
        </li>
            <li>
                <Link to={'cars/create'}>ADD CAR</Link>
            </li>
        </ul>
    );
};
