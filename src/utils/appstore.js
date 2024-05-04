import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userslice";
import movieReducer from "./moviesSlice";
import gptReducer from "./gptslice";
import langReducer from "./consfigSlice";
const appStore = configureStore({
  reducer: {
    user: userReducers,
    movies: movieReducer,
    gpt: gptReducer,
    lang: langReducer,
  },
});
export default appStore;
