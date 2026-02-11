import type {IUser} from "../models/IUser.ts";
import {type FC, memo} from "react";

interface Props {
    user: IUser,
    deleteUser: (id: number) => void
}
//memo ,перерендиринг відбувається лише при зміні пропсів
export const Child:FC<Props> = memo(({user, deleteUser}) => {
    return (
        <div className={'border border-2'}>
           <p>{user.name}</p>
            <button className={'border border-gray-500'} onClick={()=>{deleteUser(user.id)}}>delete participent</button>
        </div>

    );
})
