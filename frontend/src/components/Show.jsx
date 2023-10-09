import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../others/BackButton';
import Spinner from '../others/Spinner';

const Show = () => {
  const [showBook, setShowBook] = useState({});
  const[loading,setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
   setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setShowBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Api error:",error);
        setLoading(false);
      });
  }, [id]); // Include 'id' as a dependency to re-run the effect when the 'id' changes.

  // Conditionally render the component when 'showBook' is empty or undefined.
  if (!showBook || Object.keys(showBook).length === 0) {
    return <div className='text-[#000] text-2xl text-center font-bold mt-6'>Loading...</div>; // You can replace this with a loading indicator.
  }


  return (
    <div className='p-4'>
     
      <h1 className='text-3xl my-4 text-center'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 m-auto'>
        
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{showBook.books._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{showBook.books.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{showBook.books.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span>{showBook.books.publishyear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(showBook.books.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(showBook.books.updatedAt).toString()}</span>
          </div>
          <BackButton />
        </div>
      )}
      </div>
    
  );
}


export default Show;