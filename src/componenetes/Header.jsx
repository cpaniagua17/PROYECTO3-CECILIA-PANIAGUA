import React from 'react';
import { Link } from 'react-router-dom';
import Toastify from 'toastify-js';
import 'react-toastify/dist/ReactToastify.css';


export default function Header() {

  const toastify = () => {
    Toastify({
      text: 'Ver Historial',
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: 'top',
      position: 'center',
      stopOnFocus: true,
    }).showToast();
  }

  return (
    <>
    <div className="header">
    <div className="historial">
    <Link  to="historial"><span title="Ver Historial" onClick={toastify}>📋</span></Link>
    </div>
    <h1 className="center separador">Seguros del hogar 🏡</h1> 
    </div>
    </>
  )
}
