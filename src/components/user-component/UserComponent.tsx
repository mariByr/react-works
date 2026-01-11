import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

interface UserComponentProps {
    user: IUser
}

export const UserComponent:FC<UserComponentProps> = ({user} ) => {
    return (
        <div>
           <h3>{user.id}</h3>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>


        </div>
    );
};
