
import {useNavigate} from "react-router-dom";
import {usePosts} from "../../queries/posts.queries.tsx";
import type {IPost} from "../../models/IPost.ts";

import PostComponent from "../post/PostComponent.tsx";

export const PostsComponent = () => {
    const { data: posts, isLoading } = usePosts();//витягуємо дані з квері клієнта
    const navigate = useNavigate();
    if (isLoading) return <div>Loading...</div>;

    const goToDetails = (id:number) => {
        console.log('ID:', id);
        navigate(`/posts/${id}`);
    }
    return (
        <div className={'grid grid-cols-2 gap-1'}>
            {
                posts?.map((post:IPost) => (<PostComponent
                    key={post.id}
                    post={post}
                    onDetails={()=>goToDetails(post.id)} />))
            }
        </div>
    );
};
