

const { createSlice , createAsyncThunk} from '@redux/tookit' ;


const initialState = {
    users : [] ,
    loading : false ,
    error : null
}


const fetchUsers = createAsyncThunk('/fetechusers' , async(_ ,{rejectWithValue})=>{
    const token = localStorage.getItem('token') ;
    const data = axios.get(`${import.meta.env.VITE_API_URL}/allusers` ,  {
  headers : {
    Authorization : `Bearer ${localStorage.getItem('token')}`
  }})
    return data ;
})