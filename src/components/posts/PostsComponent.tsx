import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {getPosts} from "../../services/api.services.tsx";
import { PostComponent } from "../post/PostComponent";
import {useNavigate} from "react-router-dom";


export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts()
            .then((posts) => setPosts(posts))


    }, []);
    const navigate = useNavigate();
    const goToDetails = (id:number) => {
        console.log('ID:', id);
        navigate(`/posts/${id}`);

        }


    return (
        <div>
            {
                posts.map((post:IPost) => (<PostComponent
                    key={post.id}
                    post={post}
                    onDetails={()=>goToDetails(post.id)} />))

            }
        </div>
    )
}
//<PostComponent
//   key={post.id}
//   post={post}
//   onDetails={() => goToDetails(post.id)}
// />
