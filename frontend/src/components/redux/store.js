import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slices/LoginSlice" ;
import ServiceReducer from "./slices/servicesSlice";
import UsersReducer from './slices/userSlice'
const store = configureStore({
    reducer : {
        login : LoginReducer,
        service : ServiceReducer,
        users : UsersReducer
    }
})


export default store ;