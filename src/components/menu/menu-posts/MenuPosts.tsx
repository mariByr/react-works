import {Link} from "react-router-dom";

export const MenuPosts = () => {
    return (
        <ul className={'text-4xl  flex justify-evenly'}>
           <li><Link to={"jsonplaceholder"}>Post-jsonplaceholder</Link></li>
            <li><Link to={"dummyjson"}>Post-dummyjson</Link></li>
        </ul>
    );
};
