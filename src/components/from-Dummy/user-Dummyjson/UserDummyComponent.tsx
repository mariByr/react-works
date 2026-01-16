import type {IUsersDummyjson} from "../../../models/models-dummy/IUsersDummyjson.tsx";
import type {FC} from "react";

interface UserDummyComponentProps {
    user: IUsersDummyjson
}

export const UserDummyComponent:FC<UserDummyComponentProps> = ({user} ) => {
    return (
        <div className={'m-5'}>
            <h2>{user.firstName}</h2>
        </div>
    );
};
