import {useEffect, useState} from "react";
import type {IUserModel} from "../../models/userModel.ts";
import type IUserResponseModel from "../../models/IUserResponseModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {userService} from "../../services/api.services.tsx";

export const UsersComponent = () => {
    const[ users, setUsers]=useState<IUserModel[]>([])

    useEffect(()=>{userService.getALLUsers()
            .then((value:IUserResponseModel) => {setUsers(value.users)})},
        [])

    return (
        <div>
            {users.map((user: IUserModel) => <UserComponent user={user} key={user.id}/>)}

        </div>
    );
};
