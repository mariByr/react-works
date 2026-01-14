import type ICommentjson from "../../../models/models-json/iCommentjson.ts";
import type {FC} from "react";

interface CommentJsonComponentProps {
    comment: ICommentjson
}

export const CommentJsonComponent:FC< CommentJsonComponentProps> = ({comment}) => {
    return (
        <>{comment.body}</>
    );
};
