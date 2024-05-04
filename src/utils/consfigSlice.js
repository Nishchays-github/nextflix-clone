import { createSlice } from "@reduxjs/toolkit";

const lang = createSlice({
    name: "config",
    initialState:{
        langu: "en",
    },
    reducers:{
        changelang:(state,action)=>{
            state.langu = action.payload
        }
    }
})
export const {changelang} = lang.actions;
export default lang.reducer;
