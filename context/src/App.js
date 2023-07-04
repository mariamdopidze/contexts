import React from 'react'
import './App.css';
import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import {Mycontext} from "./Mycontext"


function App() {

  const [darkMode, setDarkMode]=useState(false);
  console.log (darkMode);
  
  return (
    <div className='App'>
      

      <div className='first'>
        <ul>
        <li>Re:educate</li>
        <li><a href ="/">Home</a></li>
        <li><a href ="/">About</a></li>
        <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>

        </ul>
        </div>  
      
      
      
   <Mycontext.Provider value ={{darkMode, setDarkMode}}>
    
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path= "about" element ={<About/>} />
    </Routes>
    </Mycontext.Provider>
   
    </div>
  );
}

export default App;
