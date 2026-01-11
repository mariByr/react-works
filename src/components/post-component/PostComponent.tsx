import type {IPosts} from "../../models/IPosts.ts";
import type {FC} from "react";

interface PostComponentProps {
    post: IPosts
}

export const PostComponent:FC<PostComponentProps> = ({post}) => {
    return (
        <>
        <p>{post.body}</p>
        </>
    );
};
