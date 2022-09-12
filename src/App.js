
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import SignUp from './components/SignUp';


// Use state hook is used for change the state of an variable...
// import { useState } from 'react';




function App() {


  

  return (
    <div className="App">
     
     <BrowserRouter>    
      <Nav/>

  <Routes>

    <Route path='/' element = {<h1>Product Listening Component</h1>}/>
    <Route path='/addproduct' element = {<h1>Add Product Component</h1>}/>
    <Route path='/updateproduct' element = {<h1>Update Product Component</h1>}/>
    <Route path='/logout' element = {<h1>logout Component</h1>}/>
    <Route path='/profile' element = {<h1>Profile Component</h1>}/>

    <Route path='/signup' element = {<SignUp/>}/>


    


     
     
    
    </Routes>


      </BrowserRouter>
      <Footer/>
     

      

    </div>
  );
}

export default App;

