import { createSlice } from "@reduxjs/toolkit";

const gptslice=  createSlice({
    name: "gpt",
    initialState:{
        showgpt:false
    },
    reducers:{
        toggleGPTview: (state)=>{
            state.showgpt = !state.showgpt
        }
    }
})
export const {toggleGPTview} = gptslice.actions;
export default gptslice.reducer;