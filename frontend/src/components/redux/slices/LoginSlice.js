import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'
const initialState = {
     loading : false ,
     token : null ,
     role : null ,
     error : null

}




export const login = createAsyncThunk('/login', async (formData , {rejectWithValue})=>{
    try{
      const data = await axios.post(`${import.meta.env.VITE_API_URL}/login` ,{
        ...formData
      });
      return data ;
    }catch(error){
        rejectWithValue(error)
    }
    
}) 




const loginSlice = createSlice({
    name : 'login',
    initialState ,
    reducers : {
        logout : (state) => {
            state.loading = 'true',
            state.token = null ,
            state.role = null,
            localStorage.removeItem('token')
            localStorage.removeItem('role')
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(login.pending , (state)=>{
            state.loading = true
        }).addCase(login.fulfilled, (state , action)=>{
             const data = action.payload ;
           const token = data.data.token
           console.log(token)
             state.loading = false ;
             state.token = token ;
             const decoded = jwtDecode(token) ;
             console.log(decoded)
             const {role} = decoded ;
             console.log(role)
             state.role = role 
             localStorage.setItem('token', token)
             localStorage.setItem('role', role)


             
        }).addCase(login.rejected , (state,action)=>{
            state.error = action.payload
        })
        
    }



})


export const {logout} = loginSlice.actions ;
export default loginSlice.reducer ;