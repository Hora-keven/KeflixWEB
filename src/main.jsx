import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './Components/Detail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}/>
     
        <Route path="/details/:id" element={<Detail/>} />
    </Routes>
  </BrowserRouter>
)
