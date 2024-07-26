import React , {useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
import { fetchUsers , DeactivateUser , activateUser } from '../redux/slices/userSlice';
function Users() {
    const {users} = useSelector((state)=> state.users)
const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    const handleDeactivate =async (user) => {
if(user.isActive){
  await  dispatch(DeactivateUser(user._id))
}else{
  await  dispatch(activateUser(user._id))
}
 dispatch(fetchUsers())
    }

console.log(users)
      const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'isActive', headerName: 'Status', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div className=''>
         <button onClick={()=>{handleDeactivate(params.row)}} className={`${params.row.isActive ? 'bg-red-500' : "bg-green-500"} px-4 py-2 rounded-sm`}>{params.row.isActive ? 'Deactivate' : 'Activate'} </button>
        </div>
      ),
    },
 
  
  ];
  return (
    <div>
      <div className='m-8'>
      <div className='flex justify-between mb-4'>
        <div>
               <h2>Users</h2>
               <p>Total Active Users : {users.filter(user=> user.isActive).length} </p>
        </div>
     
        <button  className='bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 h-10 transition-all'>Add New</button>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          getRowId={(row) => row._id}
          pageSizeOptions={[5, 10]}
        />
      </div>
</div>
</div>
  )
}

export default Users
