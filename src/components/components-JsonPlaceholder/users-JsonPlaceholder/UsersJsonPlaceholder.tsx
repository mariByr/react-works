import {useEffect, useState} from "react";
import type {IUserJson} from "../../../models/models-json/IUserJson.tsx";
import {getAllFromJson} from "../../../services/api.services.tsx";
import {SingleUserJs} from "../single-user-js/SingleUserJs.tsx";


 export const UsersJsonPlaceholder = () => {
    const [ users,setUsers]=useState<IUserJson[]>([]);
    useEffect(() => {
        getAllFromJson<IUserJson[]>('/users')
           .then(res=>setUsers(res))

    }, []);


    return (
        <div>
            {
                users.map(user => <SingleUserJs user={user} key={user.id}/>)
            }
        </div>
    );
};
