import {createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../../models/IUser.ts";
type UserSliceType = {
    users:IUser[],
}

const initUserSliceState:UserSliceType={users:[]}
 export const userSlice= createSlice({
    name:'userSlice',
    initialState:initUserSliceState,
    reducers:{},
     extraReducers:builder => builder,
})
