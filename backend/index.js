import express, { response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app = express();

//middleware for parsing the request
app.use(express.json());
//middleware for handling cors policy
app.use(cors());
//app.use(cors({
 // origin:"http://localhost:3000",
  //methods:['GET','POST','PUT','DELETE'],
  //allowHeaders:['content-type']
//}))
app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send("WELCOME TO MERN STACK");

})

app.use('/books', booksRoute);
mongoose
.connect(mongoDBURL)
.then(()=>{
console.log('mongoDB connected successfully');
app.listen(PORT, () => {
    console.log(`app is running at port:${PORT}`);
  });
})
.catch((error)=>{
console.log(error);
})
