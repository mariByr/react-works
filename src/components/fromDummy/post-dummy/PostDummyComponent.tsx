import type {FC} from "react";
import type IPosts from "../../../models/models-dummy/IPosts.ts";

interface PostDummyComponentProps {
    post: IPosts
}

export const PostDummyComponent: FC < PostDummyComponentProps>= ({post}) => {

    return (
        <div>
            <h2>{post.body}</h2>
        </div>
    );
};
