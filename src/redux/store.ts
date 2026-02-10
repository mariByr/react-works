import {configureStore,} from "@reduxjs/toolkit";
import {userSlice} from "./slices/UserSlice.ts";
import {postSlice} from "./slices/PostStoreSlice.ts";
import {commentSlice} from "./slices/CommentSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {complexSlice} from "./slices/ComplexSlice.ts";

export const store=configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
        complexStoreSlice:complexSlice.reducer
    }
})
//cтворюємо хуки з типізацією
//withTypes прикріплює тип
export const useAppDispatch=useDispatch.withTypes<typeof store.dispatch>();

export const useAppSelector=useSelector.withTypes<ReturnType<typeof store.getState>>();
