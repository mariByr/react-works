import {useEffect, useState} from "react";
import type {IPostModel} from "../../models/postModel.ts";
import {loadPosts} from "../../services/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const ListPostesComponent = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(()=>{
        loadPosts().then(res=>setPosts(res))
    } ,[]);
    return (

        <div className="max-w-3xl mx-auto p-6 space-y-4 bg-gray-50">
            {posts.map((post: IPostModel) => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};
