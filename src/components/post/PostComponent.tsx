import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

interface PostComponentProps {
    post: IPost,
    onDetails: (id: number) => void
}

export const PostComponent: FC<PostComponentProps> = ({post, onDetails}) => {
    return (
        <div>
            <p>{post.id}-----{post.title}</p>
            <button className={'border border-gray-500'}onClick={()=>onDetails(post.id)}>go to details</button>

        </div>
    );
};

export default PostComponent;
