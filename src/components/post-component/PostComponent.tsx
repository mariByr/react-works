import type {FC} from "react";
import type {IPostModel} from "../../models/PostModel.ts";

interface PostComponentProps {
    post: IPostModel
}

const PostComponent:FC<PostComponentProps>= ({post:{id, title, body, tags, views, userId}}) => {
    return (
        <div className ='border-2 border-solid border-lime-100'>
         <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
            <p>{tags}</p>
            <p>{views}</p>
            <p>{userId}</p>
        </div>
    );
};

export default PostComponent;
