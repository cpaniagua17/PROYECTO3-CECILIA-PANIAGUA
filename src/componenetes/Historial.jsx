import React from "react";
import { useNavigate } from "react-router-dom";

export default function Historial() {
  const navigate = useNavigate();
  const handleVolver = () => {
    navigate("/");
  };
  const handleLimpiar = () => {
    // Limpia el historial eliminando el elemento 'historial' del localStorage
    localStorage.removeItem("historial");
    navigate("/");
  };

  // Obtén el historial existente del localStorage
  const historialExistente =
    JSON.parse(localStorage.getItem("historial")) || [];

  return (
    <div>
      <h1 className="center separador">Ver Historial 📋</h1>
      <div className="center div-cotizador">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo de propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
            </tr>
          </thead>
          <tbody>
            {historialExistente.map((cotizacion, index) => (
              <tr key={index}>
                <td>{cotizacion.fecha}</td>
                <td>{cotizacion.tipoPropiedad}</td>
                <td>{cotizacion.tipoUbicacion}</td>
                <td>{cotizacion.metrosCuadrados} m²</td>
                <td>${cotizacion.valorPoliza}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="center separador">
          <button  className="button button-outline"   type="button"   onClick={handleVolver}   >
            VOLVER
          </button>
          <div className="center separador"> 
          <button  className="button button-outline"  type="button"   onClick={handleLimpiar}   >
              LIMPIAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
