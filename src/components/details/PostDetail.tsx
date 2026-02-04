import { useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {goToDetails} from "../../services/api.services.tsx";


const PostDetail = () => {
    const{postId} =useParams<{postId:string}>()

          const[details,setDetail]=useState<IPost|null>()
    useEffect(() => {
        if(!postId)return;
        const id=Number(postId)
        goToDetails(id)
            .then ((post:IPost)=>setDetail(post));

    }, [postId]);
const navigate = useNavigate();
    if (!details) return <div>Loading...</div>;

    return (
        <div>
            <h1 style={{color: 'red'}}>DETAILS PAGE</h1>

            post id
            <p>{details?.id}</p>
            <p>{details?.title}</p>
            <p>{details?.body}</p>
            <button className={'border border-2'}onClick={()=>navigate(`/posts/${details.id}/comments`)
                }>view comments</button>
        </div>
    );
};


export default PostDetail;
