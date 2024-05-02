import { createSlice } from '@reduxjs/toolkit'
const  moviesSlice = createSlice(
    {
        name:"movies",
        initialState: {
            nowplayingmovies: null,
            popularmovies:null,
            topmovies:null,
            upcoming:null,
            tvshows:null,
        },
        reducers:{
              addnowplayingmovies:(state,action)=>{
                state.nowplayingmovies = action.payload;
              },
              addpopularmovies:(state,action)=>{
                state.popularmovies = action.payload;
              },
              addtopmovies:(state,action)=>{
                state.topmovies = action.payload;
              },
              addupcoming:(state,action)=>{
                state.upcoming = action.payload;
              },
              addtvshows:(state,action)=>{
                state.tvshows = action.payload;
              }
        }
    }
)

export const {addnowplayingmovies,addpopularmovies, addtopmovies,addupcoming,addtvshows } = moviesSlice.actions;
export default moviesSlice.reducer;
