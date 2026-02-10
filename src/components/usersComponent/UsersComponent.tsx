
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UserSlice.ts";
import type {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../userComponent/UserComponent.tsx";

export const UsersComponent = () => {
    const dispatch = useAppDispatch();
    const users=useAppSelector((state)=>state.userStoreSlice.users)
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, []);
    return (
        <div>
            {
                users.map((user:IUser) => <UserComponent key={user.id} user={user} />)
            }
        </div>
    );
};
