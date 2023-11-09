import React from 'react';

export default function OpcionUbicacion({ datosUbicacion, handleChange }) {
  return (
    <div>
      <label htmlFor="ubicacion">Selecciona su ubicación</label>
      <select
        name="tipoUbicacion"       
        id="ubicacion"
        onChange={handleChange}>
        <option defaultValue={""}>
          ...
        </option>
          {datosUbicacion.map((ubicacion,index) => (
          <option key={index}  value={ubicacion.tipo}>
            {ubicacion.tipo}
          </option>
        ))}
      </select>
    </div>
  );
}
