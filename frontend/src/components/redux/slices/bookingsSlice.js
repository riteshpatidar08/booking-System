import {createAsyncThunk, createSlice} from  '@reduxjs/toolkit' ;



const initialState = {
    bookings : [],
    loading : false ,
    error : null,
}

export const fetchBookings = createAsyncThunk("/fetchBookings" , async()=>{
    
})



const bookingSlice = createSlice({
    name : 'booking' ,
    initialState,
    extraReducers : (builder)=>{
        builder.addCase()
    }
})

