import React from 'react'
import Home from './components/Home';
import Create from './components/Create';
import Delete from './components/Delete';
import Edit from './components/Edit';
import Show from './components/Show';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/books/create' element = {<Create/>}/>
    <Route path = '/books/details/:id' element = {<Show/>}/>
    <Route path = '/books/edit/:id' element = {<Edit/>}/>
    <Route path = '/books/delete/:id' element = {<Delete/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App