// Select para pedir el tiempo en cinco ciudades.
import React from "react";
import CallApi from "../components/CallApi/CallApi";

const FiveCities = () => {
  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };
  const handleClick = () => {
    <CallApi />
  }

  return (
    <>
      <select
        name="cities"
        id="cities"
        defaultValue={"default"}
        onChange={handleChange}
      >
        <option value="default" disabled>
          Ciudades
        </option>
        <option value="berlin">Berlín</option>
        <option value="bogota">Bogotá</option>
        <option value="Denver">Denver</option>
        <option value="Estocolmo">Estocolmo</option>
        <option value="Helsinki">Helsinki</option>
        <option value="lisboa">Lisboa</option>
        <option value="oslo">Oslo</option>
        <option value="palermo">Palermo</option>
        <option value="rio">Río de Janeiro</option>
        <option value="tokio">Tokio</option>
        <option value="manila">Manila</option>
        <option value="marsella">Marsella</option>
        <option value="moscu">Moscú</option>
        <option value="nairobi">Nairobi</option>
      </select>
      <button onClick={handleClick}>Buscar</button>
    </>
  );
};

export default FiveCities;
