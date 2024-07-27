import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import { fetchUsers, DeactivateUser, activateUser } from '../redux/slices/userSlice';
import './Datagrid.css';
import {Button} from '@mui/material';

function Users() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDeactivate = async (user) => {
    if (user.isActive) {
      await dispatch(DeactivateUser(user._id));
    } else {
      await dispatch(activateUser(user._id));
    }
    dispatch(fetchUsers());
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    {
      field: 'isActive',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <Chip
          label={params.row.isActive ? 'Active' : 'Inactive'}
          color={params.row.isActive ? 'success' : 'error'}
          variant='outlined'
          sx={{
            fontSize :'11px'
          }}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Button
          
          onClick={() => handleDeactivate(params.row)}
          color={params.row.isActive ? 'error' : 'success'}
          variant = "contained"
        sx={{
            fontSize : '11px'
        }}
        >{params.row.isActive ? 'Deactivate' : 'Activate'}</Button>
      ),
    },
  ];

  return (
    <div>
      <div className="m-8">
        <div className="flex justify-between mb-4">
          <div>
            <h2>Users</h2>
            <p>Total Active Users: {users.filter((user) => user.isActive).length}</p>
          </div>
        
        </div>
        <div style={{ height: 350, width: '100%', }}>
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
             sx={{
            boxShadow: 2,
          
           
           
          
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
          />
        </div>
      </div>
    </div>
  );
}

export default Users;
