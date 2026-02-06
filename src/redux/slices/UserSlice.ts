import {createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../../models/IUser.ts";
type UserSliceType={
    users:IUser[],
}

const initUserSliseState:UserSliceType={users:[]

}
 export const userSlice= createSlice({
    name:'userSlice',
    initialState:initUserSliseState,
    reducers:{}
})
