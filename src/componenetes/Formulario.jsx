import { useEffect, useState } from 'react';
import Boton from './Boton';
import OpcionPropiedad from './OpcionPropiedad';
import OpcionUbicacion from './OpcionUbicacion';
import 'react-toastify/dist/ReactToastify.css';
import InputMetrosCuadrados from './InputMetrosCuadrados';

function Formulario() {
  const costoM2 = 35.86;
  const datosPropiedad = [
    { tipo: 'Casa', factor: 1.09 },
    { tipo: 'P.H.', factor: 1.05 },
    { tipo: 'Depto. Edificio', factor: 1.02 },
    { tipo: 'Barrio Privado', factor: 1.19 },
    { tipo: 'Oficina', factor: 2.39 },
    { tipo: 'Local Comercial', factor: 1.41 },
    { tipo: 'Depósito Logística', factor: 1.92 },
  ];

  const datosUbicacion = [
    { tipo: 'CABA', factor: 1.13 },
    { tipo: 'Tandil', factor: 1.04 },
    { tipo: 'Costa Atlántica', factor: 1.29 },
    { tipo: 'Patagonia', factor: 1.00 },
  ];
   
   const [datos, setDatos] = useState({
    tipoPropiedad: '',
    tipoUbicacion: '',
    metrosCuadrados: '',
    fechaCotizacion: new Date().toLocaleDateString(),
    valorPoliza: '',
  });

  useEffect(() => {
   
    fetch(`https://6547b141902874dff3aca530.mockapi.io/propiedades`)
      .then((response) => response.json())
      .then((data) => {
         localStorage.setItem('datos', JSON.stringify(data));
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
    localStorage.setItem('datos', JSON.stringify({ ...datos, [name]: value }));
   
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const { tipoPropiedad, tipoUbicacion, metrosCuadrados } = datos;
    
      // Encuentra el factor de la propiedad seleccionada
      const factorPropiedad = datosPropiedad.find(
        (propiedad) => propiedad.tipo === tipoPropiedad
      )?.factor || 1; // El valor 1 es el factor por defecto si no se encuentra la propiedad.
    
      // Encuentra el factor de la ubicación seleccionada
      const factorUbicacion = datosUbicacion.find(
        (ubicacion) => ubicacion.tipo === tipoUbicacion
      )?.factor || 1; // El valor 1 es el factor por defecto si no se encuentra la ubicación.
    
      // Cálculo del valor de la póliza
      const valorPoliza = (
        costoM2 * parseFloat(metrosCuadrados) * factorPropiedad * factorUbicacion
      ).toFixed(2);
    
      setDatos({ ...datos, valorPoliza });
    
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
    };
    
  
  return (
    <>
      <div className="center div-cotizador">
        <h2 className="center separador">Completa los datos solicitados</h2>
        <OpcionPropiedad  datosPropiedad={datosPropiedad} handleChange={handleChange} {...{ datosPropiedad, handleChange }} />
        <OpcionUbicacion datosUbicacion={datosUbicacion } handleChange={handleChange} {...{ datosUbicacion, handleChange }} />
        <InputMetrosCuadrados datos={datos} {...{ handleChange, datos }} />
        <div className="center separador">
        <Boton datos={datos} datosPropiedad={datosPropiedad} datosUbicacion={datosUbicacion} costoM2={costoM2} {...{ datos }} />
        </div>
      </div>
    </>
  );
}

export default Formulario;
