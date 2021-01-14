import React from 'react';
import PropTypes from 'prop-types';

// fecha de hoy inicio

let meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

let f = new Date();
let fechita =
  f.getDate() + ' de ' + meses[f.getMonth()] + ' de ' + f.getFullYear();

const Clima = ({ resultado }) => {
  // extraer los valores
  const { name, main, sys } = resultado;

  if (!name) return null;

  // Grados kelvin
  const kelvin = 273.15;

  return (
    <div className="card-panel col s12">
      <div className="black-text">
        <div className="blue-grey-text">
          <h3>
            {name}, {sys.country}:{' '}
          </h3>

          <h5>{fechita}</h5>
        </div>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(0)}
          <span>&#x2103; </span>
        </p>
        <div className="blue-grey-text">
          <p>
            Temperatura Máxima:{' '}
            {parseFloat(main.temp_max - kelvin, 10).toFixed(0)}{' '}
            <span> &#x2103; </span>
          </p>
          <p>
            Temperatura Minima:{' '}
            {parseFloat(main.temp_min - kelvin, 10).toFixed(0)}{' '}
            <span> &#x2103; </span>
          </p>
          <p>Humedad: {main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Clima;
