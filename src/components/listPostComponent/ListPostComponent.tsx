
import {loadPosts} from "../../cervices/api.service.ts";
import {useEffect, useState} from "react";
import type {IPostModel} from "../../models/PostModel.ts";
import PostComponent from "../post-component/PostComponent.tsx";



export const ListPostComponent = () => {
     const[posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await loadPosts();
            setPosts(allPosts);

        }
        fetchPosts();
    },[])

return (

    <div className="max-w-3xl mx-auto p-6 space-y-4 bg-gray-50">
        {posts.map((post) => <PostComponent post={post} key={post.id}/>)
        }
    </div>
);
};
