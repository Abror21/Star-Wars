import React, { useState, useEffect } from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import Error from '../error';
import PropTypes from 'prop-types';


const RandomPlanet = ({ updateInterval }) => {

  const swapiService = new SwapiService();

  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    updatePlanet();
    const interval = setInterval(updatePlanet, updateInterval);
    return () => clearInterval(interval);
  }, [])

  const onPlanetLoaded = (planet) => {
    setPlanet(planet);
    setLoading(false);
  }
  const onError = () => {
    setError(true);
    setLoading(false);
  }
  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 24) + 1;
    swapiService
      .getPlanet(id)
      .then(onPlanetLoaded)
      .catch(onError)
  }

  const spinner = loading ? <Spinner /> : null;
  const element = !(loading || error) ? <Planet planet={planet} /> : null;
  const errorMessage = error ? <Error /> : null;
  return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {spinner}
      {element}
    </div>
  );
}
RandomPlanet.defaultProps = {
  updateInterval: 10000
}
RandomPlanet.propTypes = {
  updateInterval: PropTypes.number
}
export default RandomPlanet;

const Planet = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
