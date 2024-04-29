import {createSlice} from "@reduxjs/toolkit"

const userslice = createSlice({
    name:"user",
    initialState: null,
    reducers:{
        adduser:(state,action)=>{
            console.log("adduser func" ,action.payload)
             return action.payload;
        },
        removeuser:(state,action)=>{
            return null;
        }
    }
}) 
export const {adduser,removeuser} = userslice.actions;
export default userslice.reducer;