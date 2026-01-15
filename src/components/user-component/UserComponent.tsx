
import { type FC } from 'react';

import type {IUserModel} from "../../models/userModel.ts";
import {useNavigate} from "react-router-dom";

interface UserComponentProps {
    user: IUserModel;
}

export const UserComponent: FC<UserComponentProps> = ({ user }) => {
    const navigation = useNavigate();

    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')}

    return (
        <div className="my-5 border p-2.5">
            <div className="flex justify-between">
                <p>{user.id}</p>
                <p>{user.firstName}</p>
                <p>{user.email}</p>

                        </div>
            <button className={"border-2"} onClick={onButtonClickNavigate}>click me
            </button>
        </div>
    );
};
