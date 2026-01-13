// import type {IUserModel} from "../../models/userModel.ts";
// import {type FC} from "react";
//
// import {useNavigate} from "react-router-dom";
//
// interface UserComponentProps {
//     user: IUserModel
// }
//
// export const UserComponent:FC<UserComponentProps> = ({user})  => {
//    const navigation =useNavigate()
//        const onButtonClickNavigate=()=> {
//            navigation(`/users/${user.id}/carts`)
//
//
//            return (
//                <div className={'my-5 border p-2.5'}>
//                    <div className={'flex justify-between'}>
//                        <p>{user.id}</p>
//                        <p>{user.firstName}</p>
//                        <p>{user.email}</p>
//                        {<button className={'border-2 bg-amber-200'} onClick={onButtonClickNavigate}>click me</button>}
//
//                    </div>
//                </div>
//            )
//        })
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import type {IUserModel} from "../../models/userModel.ts";

interface UserComponentProps {
    user: IUserModel;
}

export const UserComponent: FC<UserComponentProps> = ({ user }) => {
    const navigate = useNavigate();

    const onButtonClickNavigate = () => {
        navigate(`/users/${user.id}/carts`);
    };

    return (
        <div className="my-5 border p-2.5">
            <div className="flex justify-between">
                <p>{user.id}</p>
                <p>{user.firstName}</p>
                <p>{user.email}</p>

                <button
                    className="border-2 bg-amber-200"
                    onClick={onButtonClickNavigate}
                >
                    click me
                </button>
            </div>
        </div>
    );
};
