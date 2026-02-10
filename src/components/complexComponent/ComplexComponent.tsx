import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
// import {useEffect} from "react";
// import {userActions} from "../../redux/slices/UserSlice.ts";
// import {postActions} from "../../redux/slices/PostStoreSlice.ts";
// import {commentActions} from "../../redux/slices/CommentSlice.ts";
// import type {IUser} from "../../models/IUser.ts";
// import type {IPost} from "../../models/IPost.ts";
// import type {IComment} from "../../models/IComment.ts";
 import {Navigate} from "react-router-dom";
import {setSelectedUser} from "../../redux/slices/ComplexSlice.ts";
import {UserComponent} from "../userComponent/UserComponent.tsx";
import {PostComponent} from "../postComponent/PostComponent.tsx";
import {CommentComponent} from "../commentComponent/CommentComponent.tsx";




export const ComplexComponent = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(s => s.userStoreSlice.users);
    const posts = useAppSelector(s => s.postStoreSlice.posts);
    const comments = useAppSelector(s => s.commentStoreSlice.comments);
    const selectedUser = useAppSelector(s => s.complexStoreSlice.selectedUser);
    //
    const filteredUser = users.find(u => u.id === selectedUser);
    const userPosts = posts.filter(p => p.userId === selectedUser);
//звязок  з коментарями через id постів які є в юзера
    const postIds = userPosts.map(p => p.id);

    const postComments = comments.filter(c =>
        postIds.includes(c.postId)
    );


    console.log(selectedUser);

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
        return <Navigate to="/users"/>
    }
    //якщо ми хочемо вивести все на купу
//          return (
//          <div >
//              {users.map((user: IUser) => (
//                  <div className={'border border-gray-200 p-2.5'} key={user.id}>
//                      <h2>{user.name}</h2>
//
//                      {posts
//                          .filter((post: IPost) => post.userId === user.id)
//                          .map((post: IPost) => (
//                              <div key={post.id}>
//                                  <h4>{post.title}</h4>
//
//                                  {comments
//                                      .filter((c: IComment) => c.postId === post.id)
//                                      .map((c: IComment) => (
//                                          <p key={c.id}>{c.body}</p>
//                                      ))}
//                              </div>
//                          ))}
//                  </div>
//              ))}
//          </div>
//
//    )
// };
// якщо хочемо вивести пости лише певного юзера
    return (
        <div>
            <input className={'border border-gray-500'} type='number'
                   placeholder='Enter user id'
                   onChange={(e) => {
                       const value = e.target.value;
                       dispatch(
                           setSelectedUser(value ? Number(value) : null)
                       );
                   }}
            />
            {filteredUser && <UserComponent user={filteredUser}/>}

            {/* ПОСТИ */}
            {userPosts.map(p => (<PostComponent key={p.id} post={p}/>))}

            {/* КОМЕНТАРІ */}
            {postComments.map(c => (<CommentComponent key={c.id} comment={c}/>))}
        </div>
    )
}
