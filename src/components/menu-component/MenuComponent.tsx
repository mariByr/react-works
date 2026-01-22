import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <>
        <li>
           <Link to={'cars'}>CARS</Link>
        </li>
            <li>
                <Link to={'cars/create'}>ADD CAR</Link>
            </li>
        </>
    );
};
