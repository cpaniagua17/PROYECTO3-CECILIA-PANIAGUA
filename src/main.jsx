import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Historial from './componenetes/Historial.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

  <React.StrictMode> 
  <Routes>
    <Route path="/" element={<App />} />    
    <Route path="/historial" element={<Historial />} />
    <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
  </Routes>
  </React.StrictMode>

  </BrowserRouter>
)
