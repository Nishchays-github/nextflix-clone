import {configureStore} from "@reduxjs/toolkit"
import userReducers from "./userslice"
import movieReducer from "./moviesSlice"
const appStore = configureStore({
    reducer:{
        user : userReducers,
        movies:  movieReducer,  
    }
})
export default appStore;