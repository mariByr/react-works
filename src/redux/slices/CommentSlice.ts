import {createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../../models/IUser.ts";


type UserSliceType={
    users:IUser[]
}
const initCommentSliceState:UserSliceType ={users:[]

}
export const commentSlice=createSlice({
    name:'commentSlice',
    initialState:initCommentSliceState,
    reducers:{}
})
