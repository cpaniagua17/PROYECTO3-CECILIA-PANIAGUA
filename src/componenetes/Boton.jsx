// Boton.js
import React, {  useState } from 'react';
import Toastify from 'toastify-js';
import 'react-toastify/dist/ReactToastify.css';

export default function Boton({ handleSubmit }) {

  const [valorPoliza, setValorPoliza] = useState(localStorage.getItem('poliza') || '');
  

  const handleGuardar = () => {
    console.log('Guardando...');
    
     localStorage.setItem ('valorPoliza', valorPoliza);
    
    

    Toastify({
      text: `Cotización guardada con exito ! ${parseFloat(valorPoliza).toFixed(2)}`,
      duration: 1000,
      newWindow: true,
      close: true,
      gravity: 'top',
      position: 'center',
      stopOnFocus: true,
    }).showToast();

    const handleSubmit = (e) => {
      e.preventDefault();
      const { tipoPropiedad, tipoUbicacion, metrosCuadrados } = datos;
    
      // Encuentra el factor de la propiedad seleccionada
      const factorPropiedad = datosPropiedad.find(
        (propiedad) => propiedad.tipo === tipoPropiedad
      )?.factor || 1; 
    
      // Encuentra el factor de la ubicación seleccionada
      const factorUbicacion = datosUbicacion.find(
        (ubicacion) => ubicacion.tipo === tipoUbicacion
      )?.factor || 1; 
    
      // Cálculo del valor de la póliza
      const valorPoliza = (
        costoM2 * parseFloat(metrosCuadrados) * factorPropiedad * factorUbicacion
      ).toFixed(2);
    
      setDatos({ ...datos, valorPoliza });
    
      // Crear un objeto con los detalles de la cotización
      const cotizacion = {
        fecha: new Date().toLocaleString(), // Fecha y hora de la cotización
        tipoPropiedad,
        tipoUbicacion,
        metrosCuadrados,
        valorPoliza,
      };
    
     
      const historialExistente = JSON.parse(localStorage.getItem('historial')) || [];
      
      // Agregar la cotización al historial
      historialExistente.push(cotizacion);
    
      // Guardar el historial actualizado en localStorage
      localStorage.setItem('historial', JSON.stringify(historialExistente));
    };
    


  };
  
  return (
      <div className='center div-cotizador'>       
      <button className="button" id="cotizar" onClick={handleSubmit}> Cotizar </button>
      <p className="importe">Precio estimado: ${parseFloat(valorPoliza).toFixed(2)}</p><span className="guardar" id="guardar" title="Guardar en historial" onClick={handleGuardar}>💾</span>
      </div>
      
    
      
    
  );
}
