import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
                <li><Link to='login'>login</Link></li>
                <li><Link to='/auth/resourses'>/auth-resourses</Link></li>
            </ul>
        </div>
    );
};
