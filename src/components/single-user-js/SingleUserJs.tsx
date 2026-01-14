import type {IUserJson} from "../../models/IUserJson.tsx";
import type {FC} from "react";

interface SingleUserJsProps {
    user: IUserJson
}

export const SingleUserJs:FC <SingleUserJsProps> = ({user}) => {
    return (
        <>
            <h2>{user.name}</h2>
        </>
    );
};
