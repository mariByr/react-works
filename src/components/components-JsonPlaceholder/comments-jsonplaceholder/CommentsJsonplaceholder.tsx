import {useEffect, useState} from "react";
import type ICommentjson from "../../../models/models-json/iCommentjson.ts";
import {getAllFromJson} from "../../../services/api.services.tsx";
import {CommentJsonComponent} from "../commentJson/CommentJsonComponent.tsx";


 export const CommentsJsonplaceholder = () => {

    const[comments, setComments] = useState<ICommentjson[]>([]);
    useEffect(() => {
        getAllFromJson<ICommentjson[]>('/comments')
            .then(res=>setComments(res))
        },
        [])

    return (
        <div>{
            comments.map((comment:ICommentjson) => < CommentJsonComponent comment={comment} key={comment.id} />)
        }

        </div>
    )
};
