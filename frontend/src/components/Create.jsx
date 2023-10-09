import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from '../others/BackButton';
import Spinner from '../others/Spinner';

const Create = () => {
  const[title,setTitle]=useState('');
  const[author,setAuthor]=useState('');
  const[publishyear,setPublishyear] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleClick=()=>{
    const data = {
      title,
      author,
      publishyear
    }
    setLoading(true);
    axios.post('http://localhost:5555/books',data).then(()=>{
      navigate('/')
    }).catch((error)=>{
      console.log(error);
      setLoading(false);
    })
  }
  return (
    <div className='p-4'>
    <h1 className='text-3xl my-4 text-center'>Create Book</h1>
    {loading ? (<Spinner />) : (
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
    <BackButton />
    <div className='my-4'>
    <label htmlFor='Title' className='text-xl mr-4'>Book Title</label>
    <input type='text'  id ="title"value={title} onChange={(e)=>{setTitle(e.target.value)}} className='border-2 border-gray-500 py-2 px-4 w-full'/>
    </div>
    <div className='my-4'>
    <label htmlFor='Title' className='text-xl mr-4'>Author</label>
    <input type='text' id = "author" value={author} onChange={(e)=>{setAuthor(e.target.value)}} className='border-2 border-gray-500 py-2 px-4 w-full'/>
    </div>
    <div className='my-4'>
    <label htmlFor='Title' className='text-xl mr-4'>Publish Year</label>
    <input type='number' id = "year" value={publishyear} onChange={(e)=>{setPublishyear(e.target.value)}} className='border-2 border-gray-500 py-2 px-4 w-full'/>
    </div>
    <div className='my-4'>
   <button className='bg-[green] border p-4 text-[#fff] rounded-md' onClick={handleClick}>Create Book</button>
   
    </div>
   
    </div>
    )}
    </div>
  )
}

export default Create