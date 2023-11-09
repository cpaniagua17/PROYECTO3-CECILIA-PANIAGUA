// Boton.js
import  {  useState } from 'react';
import Toastify from 'toastify-js';
import 'react-toastify/dist/ReactToastify.css';

export default function Boton({ datos, datosPropiedad, datosUbicacion, costoM2 }) {
  const [valorPoliza, setValorPoliza] = useState(localStorage.getItem('poliza') || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { tipoPropiedad, tipoUbicacion, metrosCuadrados } = datos;

    // Encuentra el factor de la propiedad seleccionada
    const factorPropiedad = datosPropiedad.find((propiedad) => propiedad.tipo === tipoPropiedad)?.factor || 1;

    // Encuentra el factor de la ubicación seleccionada
    const factorUbicacion = datosUbicacion.find((ubicacion) => ubicacion.tipo === tipoUbicacion)?.factor || 1;

    // Cálculo del valor de la póliza
    const valorPolizaCalculado = (costoM2 * parseFloat(metrosCuadrados) * factorPropiedad * factorUbicacion).toFixed(2);

    // Actualizar el estado local con el valor de la póliza
    setValorPoliza(valorPolizaCalculado);

    
    // Mostrar mensaje de éxito
    Toastify({
      text: `Cotización realizada con éxito: $${valorPoliza}`,
      duration: 1000,
      newWindow: true,
      close: true,
      gravity: 'top',
      position: 'center',
      stopOnFocus: true,
    }).showToast();
  };
  
  
  const handleGuardarEnHistorial = () => {
    // Obtener los datos necesarios
    const { tipoPropiedad, tipoUbicacion, metrosCuadrados } = datos;
  
    // Encuentra el factor de la propiedad seleccionada
    const factorPropiedad = datosPropiedad.find((propiedad) => propiedad.tipo === tipoPropiedad)?.factor || 1;
  
    // Encuentra el factor de la ubicación seleccionada
    const factorUbicacion = datosUbicacion.find((ubicacion) => ubicacion.tipo === tipoUbicacion)?.factor || 1;
  
    // Cálculo del valor de la póliza
    const valorPoliza = (costoM2 * parseFloat(metrosCuadrados) * factorPropiedad * factorUbicacion).toFixed(2);
  
    // Crear un objeto con los detalles de la cotización
    const cotizacion = {
      fecha: new Date().toLocaleString(),
      tipoPropiedad,
      tipoUbicacion,
      metrosCuadrados,
      valorPoliza,
    };
  
    // Obtener el historial existente o crear uno nuevo si no existe
    const historialExistente = JSON.parse(localStorage.getItem('historial')) || [];
  
    // Agregar la cotización al historial
    historialExistente.push(cotizacion);
  
    // Guardar el historial actualizado en localStorage
    localStorage.setItem('historial', JSON.stringify(historialExistente));
  
    // Mostrar mensaje de éxito
    Toastify({
      text: `Cotización guardada en el historial con éxito: $${valorPoliza}`,
      duration: 1000,
      newWindow: true,
      close: true,
      gravity: 'top',
      position: 'center',
      stopOnFocus: true,
    }).showToast();
  };
  
  
  return (
    
    
      <div className='center div-cotizador'>       
      <button className="button" id="cotizar" onClick={handleSubmit}> Cotizar </button>
      <p className="importe">Precio estimado: ${ valorPoliza}</p>
      <span className="guardar" id="guardar" title="Guardar en historial" onClick={handleGuardarEnHistorial }>💾</span>
        
      </div>
      
    
    
  );
}
