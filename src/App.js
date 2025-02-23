import React, { useState, useEffect } from "react";
// const API="https://jsonplaceholder.typicode.com/users";
import{BrowserRouter,Routes,Route} from'react-router-dom';
import EditStudent from'./EditStudent';
import CreatStudent from "./CreatStudent";
import StudentTable from "./StudentTable";
import ViewStudent from "./ViewStudent";
import'./App.css';
function App() {

  return (
    <BrowserRouter>
  <Routes>
  <Route path="/"element={<StudentTable/>} /> 
  <Route path="/student/create" element={<CreatStudent/>} /> 
  <Route path="/student/edit/:studentid" element={<EditStudent/>} /> 
  <Route path="/student/view/:studentid" element={<ViewStudent/>} /> 

    
    
    
    </Routes>  
    
    
    </BrowserRouter>
  );
}

export default App;
