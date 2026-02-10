import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

interface CommentComponentProps {
    comment: IComment
}

export const CommentComponent:FC< CommentComponentProps> = ({comment}) => {
    return (
        <>
            <p>{comment.body}</p>
        </>
    );
};
