import React, { useState, useContext } from 'react';
import { ContinentContex } from './components/ContinentContex';
import './App.scss';
import world from './source/source.json';
import uuid from 'react-uuid'

function App() {
  const { data } = world;
  return (
    <div className="world">
      {data.map(continent => (
        <div key={uuid()}>
          <Continent continent={continent} />
        </div>
      ))}
    </div>
  );
}

export default App;

const Continent = ({ continent }) => {
  const [isVisible, setVisible] = useState(false)
  console.log(continent);

  const closeAllNodes = () => {
    setVisible(false)
  }

  return (
    <>
      <div
        className='box continent-box'
        onClick={() => {
          setVisible(!isVisible)
        }}
      >
        {continent.name}
      </div>
      {isVisible && (
        <ContinentContex.Provider value={closeAllNodes}>
          <CountriesList countries={continent.children} />
        </ContinentContex.Provider>
      )}
    </>
  )
}

const CountriesList = ({ countries }) => {
  console.log(countries);
  return (
    <div>
      {countries.map(country => (
        <div key={uuid()}>
          <Country country={country} />
        </div>
      ))}
    </div>

  )
}

const Country = ({ country }) => {
  const [isVisible, setVisible] = useState(false);
  console.log(country);
  return (
    <>
      <div
        className='box country-box'
        onClick={() => {
          setVisible(!isVisible)
        }}
      >
        {country.name}
      </div>
      {isVisible && (
        <CitiesList cities={country.children} />
      )}
    </>
  )
}

const CitiesList = ({ cities }) => {
  console.log(cities);
  return (
    <div>
      {cities.map(city => (
        <div key={uuid()}>
          <City city={city} />
        </div>
      ))}
    </div>
  )
}

const City = ({ city }) => {
  console.log(city);
  const closeAllNodes = useContext(ContinentContex)
  return (
    <div
      className='box city-box'
      onClick={closeAllNodes}
    >
      {city}
    </div>
  )
}