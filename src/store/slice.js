import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        status: false,
        userData:{},
    },
    reducers: {
        registerForm:(state,action)=>{
            state.status= true;
            state.userData= action.payload
        },
        logout:(state,action)=>{
            state.status= false;
            state.userData= {};
            
         },
        login:(state,action)=>{
            state.status= true;
            state.userData= action.payload
        },
     
    }
})
export const {login, logout, registerForm} = authSlice.actions;
export default authSlice.reducer