import React, { Component, useState } from 'react';
import './App.css';
import airlineData, { getAirlineById, getAirportByCode } from './data';
import Table from './components/Table';

const App = () => {
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'}
  ]

  const formatValue = (property, value) => {
    let fetchedValue;

    if (property === 'airline') {
      fetchedValue = getAirlineById(value[property]);
    } else {
      fetchedValue = getAirportByCode(value[property]);
    }

    return fetchedValue.name;
  }

  const [airlineId, setAirlineId] = useState(0);

  const airlineSelectHandle = (event) => {
    setAirlineId(Number(event.target.value))
  }

  const filterRoutes = () => {
    if (airlineId === 0) {
      return airlineData.routes;
    }

    return airlineData.routes.filter(routes => {
      return routes.airline === airlineId
    })
  }

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <div>
        <select name="airline" id="airline-select" onChange={airlineSelectHandle}>
          <option value="0">All Airlines</option>
          {airlineData.airlines.map(airline => {
            return (
              <option key={airline.id} value={airline.id}>{airline.name}</option>
            )
          })}
        </select>
      </div>
      <Table
        className="routes-table"
        columns={columns}
        rows={filterRoutes()}
        format={formatValue}
        perPage={25}
      />
    </section>
  </div>
  )
};

export default App;