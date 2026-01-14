import {useEffect, useState} from "react";
import type {IUsersDummyjson} from "../../models/IUsersDummyjson.tsx";
import {getAllFromJson} from "../../services/api.services.tsx";
import type{IBaseDummyResponseModel}from "../../models/IBaseDummyResponseModel.tsx";
import {UserDummyComponent} from "../userDummyjson/UserDummyComponent.tsx";


export const UsersDummyjson = () => {
    const [users, setUsers] = useState<IUsersDummyjson[]>([]);

    useEffect(() => {
        //<IBaseResponseModel & { posts: IPosts[]}>
        getAllFromJson<IBaseDummyResponseModel>('/users')
            .then( res=>setUsers(res.users))

        },
    []
    )

    return (
        <div>{
            users.map((user: IUsersDummyjson) => <UserDummyComponent key={user.id} user={user} />)
        }


        </div>
    )
};
// getAll<IBaseResponseModel & { posts: IPosts[]}>('/posts').then(value =>setPosts( value.posts))
