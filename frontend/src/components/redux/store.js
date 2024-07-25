import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slices/LoginSlice" ;
import ServiceReducer from "./slices/servicesSlice";
const store = configureStore({
    reducer : {
        login : LoginReducer,
        service : ServiceReducer
    }
})


export default store ;