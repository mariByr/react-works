import type {IUserJson} from "../../../models/models-json/IUserJson.tsx";
import type {FC} from "react";

interface SingleUserJsProps {
    user: IUserJson
}

export const SingleUserJs:FC <SingleUserJsProps> = ({user}) => {
    return (
        <div className={'border border-gray-500 p-4 my-5'}>
            <h2>{user.name}</h2>
        </div>
    );
};
