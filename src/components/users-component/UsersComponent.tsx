import {useEffect, useState} from "react";
import {getAll} from "../../services/users.api.service.ts";
import type {IUser} from "../../models/IUser.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponceModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & { users: IUser[]}>('/users')
            .then(value => setUsers(value.users))
    },
    [])

    return (
        <>
            {
                users.map((user: IUser) =>

                <UserComponent user={user} key={user.id} />)
            }
        </>
    );
};
