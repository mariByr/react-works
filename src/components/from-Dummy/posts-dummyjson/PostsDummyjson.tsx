import {useEffect, useState} from "react";
import type IPosts from "../../../models/models-dummy/IPosts.ts";
import {getAllFromDummy} from "../../../services/api.services.tsx";
import type {IBaseDummyResponseModel} from "../../../models/models-dummy/IBaseDummyResponseModel.tsx";
import {PostDummyComponent} from "../post-dummy/PostDummyComponent.tsx";



const PostsDummyjson = () => {

    const [posts, setPosts] = useState<IPosts[]>([]);

    useEffect(() => {
        getAllFromDummy<IBaseDummyResponseModel & { posts: IPosts[] }>('/posts')
            .then(
                res => {
                    console.log('API RESPONSE exist', res)
                    setPosts(res.posts)
                }
            )
    }, []);


    return (
        <div>
            {
            posts.map((post:IPosts) => <PostDummyComponent key={post.id} post={post} />)
        }
        </div>
    );
};
export default PostsDummyjson;
// users.map((user: IUsersDummyjson) => <UserDummyComponent key={user.id} user={user} />)
//         }
