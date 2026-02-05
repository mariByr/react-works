import {useParams} from "react-router-dom";


import {useComments} from "../../queries/comments.query.tsx";
import type {IComment} from "../../models/IComment.ts";

export const Comments = () => {
    const { postId } = useParams<{ postId: string }>();
    const id = Number(postId);
    const { data: comments, isLoading } =useComments(id);

if (isLoading) return <div>Loading...</div>;
    return (
         <div className={'border border-gray-200'}>
            {comments?.map((c:IComment) => (
                <div key={c.id}>{c.id}----{c.body}</div>
            ))}
         </div> ); };
