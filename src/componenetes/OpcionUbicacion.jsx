import React from 'react';

export default function OpcionUbicacion({ datosUbicacion, handleChange }) {
  return (
    <div>
      <label htmlFor="ubicacion">Selecciona su ubicación</label>
      <select
        name="tipoUbicacion"
        id="ubicacion"
        onChange={handleChange}
        value={datosUbicacion.tipoUbicacion}><option value=" " disabled>
          ...
        </option>
          {datosUbicacion.map((ubicacion, index) => (
          <option key={ubicacion.tipo} value={ubicacion.tipo}>
            {ubicacion.tipo}
          </option>
        ))}
      </select>
    </div>
  );
}
