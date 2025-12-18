import type {IPostModel} from "../../models/postModel.ts";
import type {FC} from "react";

interface PostComponentProps {
    post: IPostModel
}

export const PostComponent:FC<PostComponentProps> = ({post: {title,userId, id, body}}) => {
    return (
        <div className="p-10 bg-yellow-200 border-4 border-blue-500 rounded-lg">

    <h3>{title}</h3>
            <p>{id}</p>
            <p>{userId}</p>
            <p>{body}</p>


        </div>
    );
};
