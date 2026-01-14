import {useEffect, useState} from "react";
import type {IPostJson} from "../../../models/models-json/IPostJson.ts";
import {getAllFromJson} from "../../../services/api.services.tsx";
import {PostComponent} from "../post-component/PostComponent.tsx";


const PostsJsonplaceholder = () => {

    const[ posts,setPosts] = useState<IPostJson[]>([])

    useEffect(() => {
       getAllFromJson<IPostJson[]>('/posts')
           . then(res=>setPosts(res))
    }, []);
    return (
        <div>{
            posts.map(post => <PostComponent post={post} />)
        }
            
            </div>
    );
};

export default PostsJsonplaceholder;
