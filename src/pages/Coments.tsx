import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCommentsById} from "../services/api.services.tsx";
import type {IComent} from "../models/IComent.tsx";
import {ComentComponent} from "../components/comment-component/ComentComponent.tsx";


export const Coments = () => {

    const {postId } = useParams<{ postId: string }>();
    console.log('ID:', postId);
    const [comments, setComments] = useState<IComent[]>([]);

    useEffect(() => {
        if (!postId) return;

        const id = Number(postId);

        getCommentsById(id).then(setComments);
    }, [postId]);




    return (
        <div>COMME
            {comments.map((comment: IComent) => (<
                ComentComponent key={comment.id} comment={comment} />))}
        </div>
    );
};
export default Coments;
