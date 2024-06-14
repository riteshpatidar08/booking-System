import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slices/LoginSlice" ;

const store = configureStore({
    reducer : {
        login : LoginReducer
    }
})


export default store ;