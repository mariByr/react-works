import {useEffect, useState} from "react";
import type {IPosts} from "../../models/IPosts.ts";
import {getAll} from "../../services/users.api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponceModel.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";



export const PostsComponent=()=> {

    const [posts, setPosts] = useState<IPosts[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & { posts: IPosts[]}>('/posts').then(value =>setPosts( value.posts))
    },
        [])
    return (
        <>
            {
                posts.map((post: IPosts) => <PostComponent post={post} key={post.id}/>)
            }
        </>
    )
};
