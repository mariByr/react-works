import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {postActions} from "../../redux/slices/PostStoreSlice.ts";
import {commentActions} from "../../redux/slices/CommentSlice.ts";



export const ComplexComponent = () => {
    const dispatch = useAppDispatch();
    const {userStoreSlice:{users},postStoreSlice:{posts},commentStoreSlice:{comments}} = useAppSelector(state=> state);
    useEffect(() => {
        if (!users.length) {
            dispatch(userActions.loadUsers())
        }
        if (!posts.length) {
            dispatch(postActions.loadPosts())
        }
        if (!comments.length) {
            dispatch(commentActions.loadComments())
        }
    })
    return (
     <div>

        </div>
   )
};
