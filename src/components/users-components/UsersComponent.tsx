import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.servises.ts";
import type {IUsersResponse} from "../../models/IUsersResponse.ts";
import type {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {  console.log("UserComponent rendered");
    const [query]=useSearchParams({page:'1'})

    const [users,setUsers]=useState<IUser[]>([]);

    useEffect(() => {console.log('start')
        const currentPage = query.get('page') || '1';


        getUsers(currentPage).then(({users}: IUsersResponse) => {
          console.log(users);

            setUsers(users)})

    },[query])
    return (
        <div>
            {users.map((user: IUser) => <UserComponent user={user} key={user.id}/>)}

        </div>
    );
};
