import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";

interface PostComponentProps {
    post: IPost;
}

export const PostComponent:FC<PostComponentProps> = ({post}) => {
    return (
        <>
      <p>{post.userId}---{post.title}</p>
        </>
    );
};
