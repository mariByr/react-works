import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import { postActions} from "../../redux/slices/PostStoreSlice.ts";

export const PostsComponent = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postStoreSlice.posts)
    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);
    return (
        <div>
            {
                posts.map((post) => (<div key={post.id}>{post.title}</div>))
            }
        </div>
    );
};
