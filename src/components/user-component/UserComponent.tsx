import type {IUserModel} from "../../models/userModel.ts";
import type {FC} from "react";

interface UserComponentProps {
    user: IUserModel
}

export const UserComponent:FC<UserComponentProps> = ({user})  => {
    return (
        <>
            <p>{user.firstName}</p>
            <p>{user.email}</p>
        </>
    );
};
