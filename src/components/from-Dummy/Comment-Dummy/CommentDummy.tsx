import type {IComentsDummy} from "../../../models/models-dummy/IComentsDummy.ts";
import type {FC} from "react";

interface CommentDummyProps {
    comment: IComentsDummy
}

export const CommentDummy:FC<CommentDummyProps> = ({comment}) => {
    return (
        <div className={'m-4'}>
            <h3>{comment.body}</h3>
        </div>
    );
};
