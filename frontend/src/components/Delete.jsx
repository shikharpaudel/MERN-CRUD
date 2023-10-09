import React from 'react'
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
const Delete = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const handleDelete=()=>{
  axios.delete(`http://localhost:5555/books/${id}`)
  .then(()=>{
    navigate('/');
  }).catch((error)=>{
  console.log(error);
  })
}
  return (
    <div className='p-4'>
    <h1 className='text-2xl text-center'>Delete Book</h1>
    <div className='border w-fit m-auto mt-4 flex flex-col gap-5 p-4'>
    <h1>Are you sure want to delete a book?</h1>
    <button className='bg-[red] text-[#fff] w-full' onClick={handleDelete}>Yes Delete it</button>
    </div>
    </div>
  )
}

export default Delete