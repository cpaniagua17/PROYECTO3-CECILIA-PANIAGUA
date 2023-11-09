import React from 'react';

export default function OpcionPropiedad({ datosPropiedad, handleChange }) {
  
  return (
    <div>
      <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
      <select
        name="tipoPropiedad"
        id="propiedad"
        onChange={handleChange}
       
      ><option defaultValue={""}>
          ....
        </option>
        {datosPropiedad.map((propiedad, index) => (
          <option key={index} value={propiedad.tipo}>
            {propiedad.tipo}
          </option>
        ))}
      </select>
    </div>
  );
}
