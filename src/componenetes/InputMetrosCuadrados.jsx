import React from 'react';

export default function InputMetrosCuadrados({ handleChange, datos }) {
  return (
    <div>
      <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
      <input
        type="number"
        id="metros2"
        placeholder="Ingresa los Metros cuadrados"
        min="20"
        max="500"
        step="20"
        required
        onChange={handleChange}
        name="metrosCuadrados"
        value={datos.metrosCuadrados}
      />
    </div>
  );
}
