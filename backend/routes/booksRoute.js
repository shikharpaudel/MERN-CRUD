import express from 'express';
import { Book } from '../models/bookmodel.js';

const router = express.Router();

//create a request for add a books
router.post('/',async (request,response)=>{
    try{
 if(!request.body.title || !request.body.author || !request.body.publishyear){
    return response.status(400).send({message:'send all required field:title,author,publishyear'});
 }
 const newBook ={
    title:request.body.title,
    author:request.body.author,
    publishyear:request.body.publishyear
 } ;
 const book = await Book.create(newBook);
 return response.status(201).send(book);
    }catch(error){
  console.log(error.message);
  response.status(500).send({message:error.message});
  
    }
})
//create a route for get a books
router.get('/',async (request,response)=>{
    try{
   const books = await Book.find({});
   return response.status(200).json({
    count:books.length,
    data:books
   });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message})

    }
})
//create a route to get a single book by id
router.get('/:id', async (request,response)=>{
    try{
        const {id} = request.params;
     
        const books = await Book.findById(id);
        return response.status(200).json({books});

    }catch(error){
        console.log(error.message);
        return response.status(500).send({message:error.message})
    }
   

})
//create a route to update a book
router.put('/:id', async (request,response)=>{
    try{
        const {id} = request.params;
        const result = await Book.findByIdAndUpdate(id,request.body);
        if(!result){
            return response.status(404).json({message:"Book not found"});
        }
       return response.status(200).send({message:"Book updated successfully"})
    }catch(error){
        console.log(error.message);
            return response.status(500).send({message:error.message})
        
    }
})
//route for deleting a book
router.delete('/:id', async (request,response)=>{
    try{
    const {id} = request.params;
    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
        return response.status(400).send({ message: "Invalid ObjectId format" });
    }
    const result = await Book.findByIdAndDelete(id);
    if(!result){
        return response.status(404).json({message:"Book not find"})
    }
    return response.status(200).send({message:"Book Deleted Successfully"});
    }catch(error){
        console.log(error);
        return response.status(500).send({message:error.message});
    }
})

export default router;