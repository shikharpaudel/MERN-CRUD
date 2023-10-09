import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { BsFillTrashFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5555/books").then((response) => {
      setBook(response.data.data);
    })
    .catch((error) => {
      console.log(error);
      
    });
  }, []);
  return (
    <div className="p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 text-[#000] font-[700]">All Books</h1>
        <Link to="/books/create" className="cursor-pointer">
          <FiPlus size={25} color="green" />
        </Link>
      </div>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-600-slate rounded-md">No</th>
            <th className="border border-600-slate rounded-md">Book Name</th>
            <th className="border border-600-slate rounded-md">Author</th>
            <th className="border border-600-slate rounded-md">Publish Year</th>
            <th className="border border-600-slate rounded-md">Action</th>
          </tr>
        </thead>
        <tbody>
        {book.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-600-slate rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-600-slate rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-600-slate rounded-md text-center">
              {book.author}
            </td>
            <td className="border border-600-slate rounded-md text-center">
              {book.publishyear}
            </td>
            <td className="border border-600-slate rounded-md text-center">
              <div className="flex flex-row justify-center gap-3 text-center">
               <Link to = {`/books/details/${book._id}`}><AiFillEye size={20} color="green" /></Link> 
               <Link to = {`/books/edit/${book._id}`}><HiPencil size={20} color="green" /></Link>
               <Link to = {`/books/delete/${book._id}`}><BsFillTrashFill size={20} color="green" /></Link>
              </div>
            </td>
          </tr>
        ))}
        
        </tbody>
      </table>
    </div>
  );
};

export default Home;
