import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { fetchService, createService, deleteService ,updateService } from '../redux/slices/servicesSlice';
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";

function Services() {
  const { services } = useSelector((state) => state.service);
  const [isEdit, setIsEdit] = useState(false);
  const { handleSubmit, register, setValue, reset } = useForm();
const [id , setID] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
    setIsEdit(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);


  const handleEdit = (data) => {
    setValue('name' , data.name)
    setValue('duration', data.duration)
    setValue('price', data.price) 
    setValue('description', data.description)
    setID(data._id)
    handleOpen()
    setIsEdit(true)
 
  };
console.log(id)
  const handleDelete = async (id) => {
    await dispatch(deleteService(id));
    dispatch(fetchService());
  };


    const onSubmit = async (data) => {
console.log(data)
if(isEdit){
 await dispatch(updateService({id,data}))
}else{
 await dispatch(createService(data))
}
handleClose();
dispatch(fetchService())
  };


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'duration', headerName: 'Duration', width: 130 },
    { field: 'description', headerName: 'Description', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div className='flex gap-2 mt-3'>
          <FiEdit2 onClick={() => handleEdit(params.row)} size={24} className='cursor-pointer hover:text-lime-500' />
          <RiDeleteBin7Line onClick={() => handleDelete(params.row._id)} size={24} className='cursor-pointer hover:text-red-500 transition-all duration-150' />
        </div>
      ),
    },
  ];


  return (
    <div className='m-8'>
      <div className='flex justify-end mb-4'>
        <button onClick={handleOpen} className='bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 transition-all'>Add New</button>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={services}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h1 className='text-center text-md mb-4'>{isEdit ? "Update Service" : "Add Service"}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className='mt-1 p-2 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div>
                <label htmlFor='duration' className='block text-sm font-medium text-gray-700'>Duration</label>
                <input
                  type="text"
                  {...register("duration")}
                  className='mt-1 p-2 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div>
                <label htmlFor='price' className='block text-sm font-medium text-gray-700'>Price</label>
                <input
                  type="number"
                  {...register("price")}
                  className='mt-1 p-2 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div>
                <label htmlFor='description' className='block text-sm font-medium text-gray-700'>Description</label>
                <input
                  type="text"
                  {...register("description")}
                  className='mt-1 p-2 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='inline-flex p-2 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  {isEdit ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Services;
