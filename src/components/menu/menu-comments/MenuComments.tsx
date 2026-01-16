import {Link} from "react-router-dom";

export const MenuComments = () => {
    return (
        <ul className={'text-4xl  flex justify-evenly'}>
            <li>
            <Link to={'jsonplaceholder'}>comments-jsonplaceholder</Link>
        </li>
            <li>
                <Link to={'dummyjson'}>comments-dummyjson</Link>
            </li>
        </ul>
    );
};
