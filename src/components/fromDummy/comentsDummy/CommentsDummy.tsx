import {useEffect, useState} from "react";
import type {IComentsDummy} from "../../../models/models-dummy/IComentsDummy.ts";
import {getAllFromDummy} from "../../../services/api.services.tsx";
import type {IBaseDummyResponseModel} from "../../../models/models-dummy/IBaseDummyResponseModel.tsx";
import {CommentDummy} from "../Comment-Dummy/CommentDummy.tsx";

export const CommentsDummy = () => {
    const[comments,setComments] = useState<IComentsDummy[]>([]);
    useEffect(() => {
        getAllFromDummy<IBaseDummyResponseModel &{comments:IComentsDummy[]}>('/comments')
            .then(res=>{console.log(res)
                setComments(res.comments)})
        },
    [])

    return (
        <div>
            {comments.map(comment =><CommentDummy comment={comment} key={comment.id}/>)}
        </div>
    );
};
