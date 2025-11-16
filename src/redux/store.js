import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import searchSclice from "./searchSlice"


const store = configureStore({
    reducer: {
        app: userReducer,  
        movie:movieReducer,
        searchMovie:searchSclice
    },
});

export default store;
