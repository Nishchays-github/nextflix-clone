import {configureStore} from "@reduxjs/toolkit"
import userReducers from "./userslice"
const appStore = configureStore({
    reducer:{
        user : userReducers,     
    }
})
export default appStore;