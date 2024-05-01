import { createSlice } from '@reduxjs/toolkit'
const  moviesSlice = createSlice(
    {
        name:"movies",
        initialState: {
            nowplayingmovies: null,
        },
        reducers:{
              addnowplayingmovies:(state,action)=>{
                state.nowplayingmovies = action.payload;
              }  
        }
    }
)

export const {addnowplayingmovies} = moviesSlice.actions;
export default moviesSlice.reducer;
