import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import { postActions} from "../../redux/slices/PostStoreSlice.ts";
import {PostComponent} from "../postComponent/PostComponent.tsx";

export const PostsComponent = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postStoreSlice.posts)
    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);
    return (
        <div>
            {
                posts.map((post) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};
