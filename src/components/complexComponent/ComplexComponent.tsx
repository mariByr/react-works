import { useAppSelector} from "../../redux/store.ts";
// import {useEffect} from "react";
// import {userActions} from "../../redux/slices/UserSlice.ts";
// import {postActions} from "../../redux/slices/PostStoreSlice.ts";
// import {commentActions} from "../../redux/slices/CommentSlice.ts";
import type {IUser} from "../../models/IUser.ts";
import type {IPost} from "../../models/IPost.ts";
import type {IComment} from "../../models/IComment.ts";
import {Navigate} from "react-router-dom";



export const ComplexComponent = () => {
    // const dispatch = useAppDispatch();
    const {userStoreSlice:{users},postStoreSlice:{posts},commentStoreSlice:{comments}} = useAppSelector(state=> state);
    //якщо ми хочемо наповнити якщо нема
    // useEffect(() => {
    //     if (!users.length) {
    //         dispatch(userActions.loadUsers())
    //     }
    //     if (!posts.length) {
    //         dispatch(postActions.loadPosts())
    //     }
    //     if (!comments.length) {
    //         dispatch(commentActions.loadComments())
    //     }
    // })

    //якщо ми хочемо лише дані зі стору??



    if (!users.length || !posts.length || !comments.length) {
        return <Navigate to="/users" />
    }
         return (
         <div >
             {users.map((user: IUser) => (
                 <div className={'border border-gray-200 p-2.5'} key={user.id}>
                     <h2>{user.name}</h2>

                     {posts
                         .filter((post: IPost) => post.userId === user.id)
                         .map((post: IPost) => (
                             <div key={post.id}>
                                 <h4>{post.title}</h4>

                                 {comments
                                     .filter((c: IComment) => c.postId === post.id)
                                     .map((c: IComment) => (
                                         <p key={c.id}>{c.body}</p>
                                     ))}
                             </div>
                         ))}
                 </div>
             ))}
         </div>

   )
};
