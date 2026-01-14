import {useEffect, useState} from "react";
import type {IUsersDummyjson} from "../../../models/models-dummy/IUsersDummyjson.tsx";
import {getAllFromDummy} from "../../../services/api.services.tsx";
import type{IBaseDummyResponseModel}from "../../../models/models-dummy/IBaseDummyResponseModel.tsx";
import {UserDummyComponent} from "../userDummyjson/UserDummyComponent.tsx";


export const UsersDummyjson = () => {
        const [users, setUsers] = useState<IUsersDummyjson[]>([]);

    useEffect(() => {
            getAllFromDummy<IBaseDummyResponseModel &{users:IUsersDummyjson[]}>('/users')

            .then( res=>
            { console.log('API RESPONSE exist', res)
                setUsers(res.users)})
            console.log('STATE:', users);

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
