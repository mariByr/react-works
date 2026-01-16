import {Link} from "react-router-dom";


export const MenoUser = () => {
    return (
        <ul className={'text-4xl  flex justify-evenly'}>
           <li><Link to="jsonplaceholder">JSON Placeholder</Link></li>
           <li><Link to="dummyjson">Dummy JSON</Link></li>
        </ul>
    );
};
