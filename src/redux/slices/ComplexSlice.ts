import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
interface ComplexStateType{
    selectedUser:number|null
}

const initComplexState:ComplexStateType={
    selectedUser:null
}
export const complexSlice=createSlice({
    name:'complexSlice',
    initialState:initComplexState,
    reducers: {setSelectedUser:(state,action:PayloadAction<number|null>)=>{state.selectedUser=action.payload},
    },
})
export const{setSelectedUser}=complexSlice.actions;
//export const complexSliceActions = {...complexSlice.actions}
