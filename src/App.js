
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Login from './Components/Login';
import Administrator from  './Components/Administrator';
import Doktor from './Components/Doktor';
import Pacijent from './Components/Pacijent';
import { useState } from "react";


function App() {
   

  return (
    <BrowserRouter>
    <Routes>
       <Route
        path="/login"
        element={<Login />}
      /> 
       <Route
        path="/administrator"
        element={<Administrator />}
      /> 
      <Route
        path="/doktor"
        element={ <Doktor /> }
      />
     <Route
        path="/pacijent"
        element={ <Pacijent /> }
      />

    </Routes>
  </BrowserRouter>
    
    

    

  
  );
}

export default App;
